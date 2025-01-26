const fs = require("fs")

const contents = fs.readFileSync("lag.txt","utf-8");
console.log(contents);

var user = {
    age : 21, 
    name : "Nabin"
}

console.log(user.name,user.age)//Pointing towards the variable of object