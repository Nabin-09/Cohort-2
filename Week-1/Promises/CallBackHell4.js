//Promise chaining
function setTimeoutPromisifed(duration){
    return new Promise(function(resolve){
        setTimeout(resolve , duration);
    });
}
setTimeoutPromisifed(1000).then(function(){
    console.log("HI");
    return setTimeoutPromisifed(3000)
}).then(function(){
    console.log("Hello");
    return setTimeoutPromisifed(5000)
}).then(function(){
    console.log("Hi there");
});
console.log("Outside the callback Hell");
/*
Outside the callback Hell
HI
Hello
Hi there */
