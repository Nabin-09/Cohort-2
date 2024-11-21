/*Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a way to handle asynchronous tasks more effectively than traditional callback functions, allowing for cleaner and more manageable code.They are basically syntactical sugar to make the code slightly readable , it will still use callback queues and call stack */


/*Creating our own asynchronous functions , mostly if will build over some JS provided async functions */

const fs = require("fs");

function NabinReads(cb){
    fs.readFile("test.txt" , "utf-8" , function(err , data){
        cb(data);
    });
}

function onDone(data){
    console.log(data);
}

NabinReads(onDone);


//The above code is the ugly way the ones behind is the syntactically better way 

function NabinReadsFile(){
    return new Promise(function(resolve){ //Creating object of Promise class and function is its first parameter which takes resolve as a parameter
        fs.readFile("a.txt" , "utf-8" , function(err , data){
            resolve(data);
        });
    })
}
function OnDone1(data){
    console.log(data)
}

NabinReadsFile().then(OnDone1);


//When we make a n object of the Promise class ,we need to make sure its first parameter is a function and the function's first parameter is 
// resolve - resolve: This function is called when the asynchronous operation completes successfully. You pass the result of the operation to this function.
 
//this has 3 states , pending , resolved and rejected 
let d = new Promise(function(resolve){
    resolve();
});

function callback(){
    console.log(d);
}

d.then(callback); //Promise { undefined }


//A simple promise 

let p = new Promise(function(resolve){
    resolve("Hi there");
});

p.then(function(){
    console.log(p);  //Promise {'Hi there}
})

//Async await 
function NabinsAsyncFunction(){
    let p = new Promise (function(resolve){
        resolve("Hi There !")
    });
    return p;
}

/* function main (){
    NabinsAsyncFunction().then(function(value){
        console.log(value);
    });
}*/

//Writing above function using async and await keywords

async function main(){
    let value = await NabinsAsyncFunction()
    console.log(value);
} //much more cleaner and no need to use "." or "then" keyord

main(); //Hi There 

