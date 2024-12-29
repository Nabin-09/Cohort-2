const express = require("express");
const app = express();

app.get("/health" , function(req, res){
    const username = req.headers.username;
    const passowrd = req.headers.passowrd

    if(username != "nabin" || passowrd != "nabin8670"){
        res.status(403).json({
            msg:"User doesn't exist!",
        });
        return;
    }
    res.send("Nabin is a goater!");
});
app.listen(3000);