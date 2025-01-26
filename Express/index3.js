const express = require("express");
const app = express();
app.use(express.json());
//Implementation of middlewares 
function userMiddleware(req , res, next){
    if(username != "nabin" || password != "nabin8670"){
        res.status(403).json({
            msg:"Incorrect inputs",
        });
    }else{
        next(); //If things go fine call next() , control will reach to next parameter using this , this is an express feature
    }
};
function KidneMiddleware(req , res, next){
    if(kidneyId != 1 || KidneyId !=2){
        res.status(403).json({
            msg:"Incorrect inputs",
        });
    }else{
        next();
    }
};
app.get("/health-checkup", userMiddleware , KidneMiddleware,function(req , res){
    res.send("Heart is healthy");
});
app.get("/kidney-check" , userMiddleware ,KidneMiddleware , function(req , res){
    res.send("Your heart is healthy");
})
//Global Catches - Error based middlewares
app.use(function(err , req , res ,next){ //If a router handler is present at the end , with 4 parameter this will lead to display
    //message when the server is broken
    res.json({
        msg:"Sorry something is wrong with the server",
    })
});
/*
calculating number of requests :
let numberOfReq = 0;
function calculateReq(req , res , next){
    numberOfReq++;
    console.log(numberOfReq)
    next();
}
app.get("/health-checkup", calculateReq , function(req, res){


})

app.use(middleware) this means this middleware has to called everyhere
*/