import { createServer } from "http";
import { appendFile, writeFile } from "fs/promises";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Surya" },
  { id: 2, name: "Prakash" },
  { id: 3, name: "Jim" },
];

//Logger middleware

const logger = (req, res, next) => {
  appendFile("./logs.txt", `\n${req.method} ${req.url}`);
  next();
};

//json middleware

const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  let user = users.find((user) => {
    return user.id == Number(id);
  });
  if (!user) {
    user = { message: "User not found" };
    res.statusCode = 404;
  }
  res.write(JSON.stringify(user));
  res.end();
};

// Route handler for GET not found
const notFound = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};

// Route handler for POST api/users
const createUserHandler = (req, res) => {
  let body = "";

  // listen for the data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    // console.log(body);
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        // res.setHeader("Content-Type", "application/json");
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method == "POST") {
        createUserHandler(req, res);
      } else {
        notFound(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log("Server running on port", PORT);
  writeFile("./logs.txt", "Logs started:");
});
