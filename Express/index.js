//Creating an http server
const express = require("express");

const app = express();
// function sum(n){
//     let ans = 0 ;
//     for(let i = 1 ; i <= n ; i++){
//         ans += i;
//     }
//     return ans;

// }
// app.get("/" , function(req , res){
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("Hi your sum is "+ ans);
// })
//req and res (the parameters) stand for request and respond   
/*
GET - asking something from the server
POST - Put some data on the backend
PUT - Update a data on server
DELETE - Removing data from backend

Status Codes :
200 : All good
404 : Route doesn't exist
500 : Outage between the process
411 : Inputs were incorrect
*/
app.get("/" , function(req , res){

})

app.listen(3000);
 