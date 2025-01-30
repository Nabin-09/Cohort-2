 function waitFor3s(resolve){//main function is passed
     setTimeout(resolve , 3000)//same as setTimeout(main, 3000)
 }
 function main(){
    console.log("Main is called ! ")//called after 3s
 }
 waitFor3s(main);

function setTimeoutPromsified(){
     return new Promise(waitFor3s);//takes a function as input and whenever the first argument of it is called fir the .then is executed.
}
function main(){
    console.log("Main is called ")
}
setTimeoutPromsified(3000).then(main);