//Promise class gives a promise that it will return us something in the future.
function logName(){
    console.log("Nabin");
}
setTimeout(logName,3000);
//A promise in JS is an object that represents the eventual completion of an asynchronous operation more effectively than
// traditional callbacks.
/*
Promisified version : setTimeoutPromisified(3000).then(callback)
callback version : setTimeout(callback , 3000)
*/
function setTimeoutPromisified(ms){
    let p = new Promise (resolve => setTimeout(resolve,ms));
    return p;//returns an object of the promise class
}
function callback(){
    console.log("3 seconds  have passed");
}
setTimeoutPromisified(3000).then(callback);