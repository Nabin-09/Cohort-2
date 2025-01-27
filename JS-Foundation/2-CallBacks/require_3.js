const fs = require("fs")//fs is a module for reading files 

const contents = fs.readFileSync("lag.txt","utf-8");//We have readFile function as well , this one reads file 
//synchrnously we can use the readFile for asynchronous call 
console.log(contents);

var user = {
    age : 21, 
    name : "Nabin"
}

console.log(user.name,user.age)//Pointing towards the variable of object