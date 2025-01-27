console.log("Hi!");//This gets logged first
function timeout(){
    console.log("Click me !");//Then this runs 
}
setTimeout(timeout, 5000);
console.log("Welcome to loupe .")//Second