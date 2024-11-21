//Code Below shows simple implementation of Functions
function sqaure(n){
    return n * n;
}
function cube(n){
    return n*n*n;
}
function SumOfSquares(a , b){
    let val1 = sqaure(a);
    let val2 = sqaure(b);
    return val1 + val2;
}
function SumOfCubes(a , b){
    let val1 = cube(a);
    let val2 = cube(b);
    return val1 + val2;
}
console.log(SumOfCubes(2,3)); //35 = 8 + 27
console.log(SumOfSquares(2,3));// 13 = 4 + 9
//We are violating DRY (Dont repeat yourself)in above case too lets see how we can improvise it


//This is how Callback functions improvises the above situation


function SumOfSomething(a , b , fn){
    let val1 = fn(a);
    let val2 = fn(b);
    return val1 + val2;
}

console.log(SumOfSomething(2,5,cube));//133