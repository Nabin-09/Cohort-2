const fs = require("fs")

const contents = fs.readFileSync("lag.txt" , "utf-8");
console.log(contents);