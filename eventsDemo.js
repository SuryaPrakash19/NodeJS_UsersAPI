import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log(name, ": UNO DOS TRES");
}

function goodbyeHandler(name) {
  console.log(name, ": Hala Madrid!");
}

// Register event listeners

myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

myEmitter.emit("greet", "Cristiano");
myEmitter.emit("goodbye", "Ronaldo");

//Error handling

myEmitter.on("error", (err) => {
  console.log("Oh no!", err);
});

myEmitter.emit("error", new Error("Messi enters the conversation"));
