const app = express();
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