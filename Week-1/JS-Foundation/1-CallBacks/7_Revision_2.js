//Normal Async function
function myOwnSetTimeout(callback , duration){
    setTimeout(function(){
        callback();
    } , duration);
}
//We can call above async function as, 
/*
myOwnSetTimeout(function(){
} , 1000) */
//Promisified function
function PromisifiedMyOwnTimeout(duration){
    const p = new Promise(function(resolve){//Promise has a function as a parameter which has resolve as its own parameter

    });
    return p;
}
//calling the promisified function , no call back from end user neeeded !
const ans = PromisifiedMyOwnTimeout(1000);
//console.log(ans); //Promise { <pending> }

//async await syntax , Promise chaining
ans.then(function(){
    console.log("Timeout is done!");
});