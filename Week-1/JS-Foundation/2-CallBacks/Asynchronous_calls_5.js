const fs = require("fs")
function read(err, data){//err argument catches error and is null if no error
    console.log(data);
}

const contents = fs.readFile("lag.txt" , "utf-8",read);//asynchrnous , callbacks the read function after the I/O operation is done
console.log(contents);