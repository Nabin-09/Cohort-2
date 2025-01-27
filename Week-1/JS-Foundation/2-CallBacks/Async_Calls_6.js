console.log("Hi!");//This gets logged first
function timeout(){
    console.log("Click me !");//Then this runs 
}
setTimeout(timeout, 5000);//Makes the timeout to wait for 5s
console.log("Welcome to loupe .")//Second
//If the JS thread is running and the async task is done it waits in the callback queue until the JS thread is idle.
