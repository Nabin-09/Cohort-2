function FindSum(n){
    let ans = 0 ;
    for(let i = 0 ; i <= 100 ; i++){
        ans += i;
    }
    return ans;
}
function findSumTill100(){
    console.log(FindSum(100));
}
setTimeout(findSumTill100, 5000) //Calling an async Function
console.log("Namaste");


//11:46 1.5