 function waitFor3s(resolve){//main function is passed
     setTimeout(resolve , 3000)//same as setTimeout(main, 3000)
 }
 function main(){
    console.log("Main is called ! ")//called after 3s
 }
 waitFor3s(main);

function setTimeoutPromsified(){
     return new Promise(waitFor3s); 
}
function main(){
    console.log("Main is called ")
}
setTimeoutPromsified(3000).then(main);