const prompt = require("prompt-sync")();

let mode = prompt("Enter the mode: ");
let color;

if (mode === "dark")
    color = "black";
else if (mode === "light")
    color = "white";
else
    color = "Invalid mode";

console.log(color);
