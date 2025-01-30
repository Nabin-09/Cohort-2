/*
QUESTION : 
log hi after 1 second
logs hello after 3 seconds after step 1
logs hello there 5 seconds after step 2 */
function callback(){
    console.log("hi");
}
setTimeout(function(){
    console.log("hi");//Prints after 1000ms
    setTimeout(function(){
        console.log("HEllO");//gets nested in it as it has to start 1s after hi is logged
        setTimeout(function(){
            console.log("HELLO THERE")//This thing works but this syntax is extremely ugly and is hence called Callback hell
        },5000)
    },3000)
},1000);