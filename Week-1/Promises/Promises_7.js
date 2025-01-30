function random(resolve){//resolve is also a function
    resolve();//Whenever this resolved is called the .then(fn) is called
}
let p = new Promise(random);
console.log(p);//Promise { <pending> }
//A Promise represents the eventual completion of an asynchronous operation and its resulting value.
function callback(){
    console.log("Promise Succeded");
}
p.then(callback);//call callback when you eventually complete
