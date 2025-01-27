function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function SumOfSquares(a, b){
    let val1 = square(a);
    let val2 = square(b);
    return val1 + val2;
}
function SumOfCubes(a, b){
    let val1 = cube(a);
    let val2 = cube(b);
    return val1 + val2;
}
/*console.log(SumOfSquares(2,3)); //13
console.log(SumOfCubes(2,3)); //35*/

//We use Callbacks to improvise repition of code

function SumOfSomething(a , b , fn){ 
    let val1 = fn(a);
    let val2 = fn(b);
    return val1 + val2;
}

/*console.log(SumOfSomething(2,3,square));//13
console.log(SumOfSomething(2,3,cube));//35*/

/* ASYNCHRONOUS FUNCTIONS */

function onDone(){
    console.log("Nitin Dalla hai !");
}

/*setTimeout(onDone , 2000);
console.log("After Timeout")*/

const fs = require("fs");

let a = 1;
console.log(a);

fs.readFile("a.txt" , "utf-8" , (err, data)=>{
    console.log("Data read from the txt file");
    console.log(data);
})

let ans = 0 ;
for(let i = 0 ; i <100 ; i++){
    ans+=i;
}
console.log(ans);