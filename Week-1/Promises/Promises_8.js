//as we saw when the resolve fn is called the .then(fn) is called lets try this
function random(resolve){
    setTimeout(resolve,3000);//resolve is called 3s later and then hence .then(callback) is called eventually
}
let p = new Promise(random);
function callback(){
    console.log("Promise complete")
}
p.then(callback);