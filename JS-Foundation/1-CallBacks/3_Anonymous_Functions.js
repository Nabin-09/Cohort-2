// A nameless function is an Anonymous Function useful in scenarios when naming isn,t required

function SumOfSomething(a , b , callback){
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;
}

const ans = SumOfSomething(2,3,function (n){ return  n* n *n; })//Naming of the function passed wasn't needed
console.log(ans); //35