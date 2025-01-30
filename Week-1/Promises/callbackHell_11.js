function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve , duration);
    });
}
function callback(){
    console.log("1 second has passed");
}
setTimeoutPromisified(1000).then(callback)
//Above code shows simple promisification of SetTimeout