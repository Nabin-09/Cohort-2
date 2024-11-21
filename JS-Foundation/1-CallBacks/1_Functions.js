// This is how the function works
function square(a){
    return a*a;
}
function SumOFSquares(a, b){
    let val1 = square(a);
    let val2 = square(b);
    return val2 +val1;
}
console.log(SumOFSquares(2,3)); //13
/* 2*2 + 3*3 = 4 + 9 = 13*/ 