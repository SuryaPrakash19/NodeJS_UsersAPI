//import fs from "fs";

// readFile()- callback()

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log("async", data);
// });

// //readFileSync() - synchronous.
// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log(data);

import { write } from "fs";
import fs from "fs/promises";

// fs.readFile("./test.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hala Madrid!");
    console.log("File written to...");
  } catch (err) {
    console.log(err);
  }
};
const appendFile = () => {
  try {
    fs.appendFile("./test.txt", "\nGGMU");
    console.log("File appended to...");
  } catch (err) {
    console.log(err);
  }
};
const execute = async () => {
  await readFile();
  await writeFile();
  await readFile();
  await appendFile();
  await readFile();
};
execute();
