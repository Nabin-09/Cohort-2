//Callbacks mean to pass function as an argument to another function
function sum(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a*b;
}
function divide(a , b){
    return a/b;
}
function doOperation(a,b,op){
    return op(a,b);
}
console.log(doOperation(4 ,5 , multiply))//Implementing the Callbacks