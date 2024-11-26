const express = require("express");
const app = express();

const users = [{
    name: "Nabin",
    kidneys: [{
        healthy: false,
    }]
}];

app.get("/", function (req, res) {
    const NabinKidneys = users[0].kidneys; // Correct reference
    console.log(NabinKidneys);
    const numberOfKidneys = NabinKidneys.length; // Fixed typo
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < NabinKidneys.length; i++) {
        if (NabinKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

app.post("/" , function(res , req){
    
})