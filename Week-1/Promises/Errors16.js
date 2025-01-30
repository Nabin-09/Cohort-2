const fs = require("fs");
function readFileAsync(){
    return new Promise(function(resolve){
        fs.readFile("asdasdasasdasd.txt","utf-8",function(err,data){
            if(err){
                console.log("File not found");
            }
            else{
                resolve(data);
            }
        })
    })
}
readFileAsync().then(function(x){
    console.log("Files has been read")//shows this even if the file name is incorrect, without using the if(err) block
})