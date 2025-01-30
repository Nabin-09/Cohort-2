//Async Await is just syntactical sugar to make look async calls like sync ones
function setTimeoutPromisifed(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}
async function solve(){//returns promise
    await setTimeoutPromisifed(1000);
    console.log("HI");
    await setTimeoutPromisifed(3000);
    console.log("HELLO");
    await setTimeoutPromisifed(5000);
    console.log("HI THERE");
}//looks sync but is async
solve();    
console.log("Nabin");
/*
Nabin
HI
HELLO
HI THERE
 */