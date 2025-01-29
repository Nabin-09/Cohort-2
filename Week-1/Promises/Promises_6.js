 function waitFor3s(resolve){//main function is passed
     setTimeout(resolve , 3000)//same as setTimeout(main, 3000)
 }
 function main(){
    console.log("Main is called ! ")//called after 3s
 }
 waitFor3s(main);