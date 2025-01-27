function FindSum(n){
    let ans = 0 ;
    for(let i = 0 ; i <= 100 ; i++){
        ans += i;
    }
    return ans;
}
function findSumTill100(){
    console.log(FindSum(100));
}
setTimeout(findSumTill100, 2500) //Calling an async Function
console.log("Namaste");
/* Asynchronous functions in JavaScript are a key feature that allows developers to write code that can perform long-running tasks without blocking the main execution thread. This capability is essential for maintaining responsiveness in applications, especially when dealing with operations like network requests, file reading, or timers. 
Common async fucntions are : 
setTimeout - The setTimeout() function in JavaScript is used to execute a specified function after a designated delay, measured in milliseconds. 
fs.readFile - reads a file from your system
Fetch - to fetch some data from API endpoint
*/

const fs = require("fs");//filesystem
fs.readFile("test.txt" , "utf-8" , function(err , data){
    console.log(data); //Reads data from file   
})

/* Async functions keep happening meanwhile the rest of program goes on , in JS if thread is busy some where 
even if the even if a callback has resolve (settimeout in above case) , the thread will continue in main program 
and return control to Asynchronous functions 
Every instructions runs in the call stack (if code is only synchronous everything runs here) , if we have asynchronous calls , 
after the task is done it comes to callback queue and in case there are multiple async calls , the ones finished earliar 
will stand the callback queue first and will be sent to call stack first .*/