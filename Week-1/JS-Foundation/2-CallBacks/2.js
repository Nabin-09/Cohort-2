function sum(n){
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
        sum+=i;
    }
    return sum;
}
const n = 100
const ans = sum(parseInt(n))
console.log(ans);
//This is synchronous code , the instructions written are performed in order.
// I/O heavy operations - Operations that require a lot of data transfer between program and external devices.
//We can read a file (using OS) using readFile , this operation is done by OS and until this happens JS operates its own
//operations and hence reading a file is an asynchronous operation
/* Some heavy IO opeartions : 
Reading a file 
Starting a clock
HTTP requests

Lets read a file , we will use the require keyoword*/