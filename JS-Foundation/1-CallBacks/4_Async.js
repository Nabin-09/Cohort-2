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
setTimeout(findSumTill100, 5000) //Calling an async Function
console.log("Namaste");
/* Asynchronous functions in JavaScript are a key feature that allows developers to write code that can perform long-running tasks without blocking the main execution thread. This capability is essential for maintaining responsiveness in applications, especially when dealing with operations like network requests, file reading, or timers. 
Common async fucntions are : 
setTimeout - The setTimeout() function in JavaScript is used to execute a specified function after a designated delay, measured in milliseconds. 
fs.readFile - reads a file from your system
Fetch - to fetch some data from API endpoint
*/



//11:46 1.5