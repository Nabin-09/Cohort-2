function setTimeoutPromisifed(duration){
    return new Promise(function(resolve){
        setTimeout(resolve , duration);
    });
}
setTimeoutPromisifed(1000).then(function(){
    console.log("Hi");
    setTimeoutPromisifed(3000).then(function(){
        console.log("Hello");
        setTimeoutPromisifed(5000).then(function(){
            console.log("Hi there");
        });
    });
});//Although this looks similar to callback hell other and cleaner way of doing it is shown below