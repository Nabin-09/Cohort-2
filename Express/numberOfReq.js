const express = require("express");
const app = express();

let numberOfReq = 0;

// Middleware to calculate and log the number of requests
function calculateReq(req, res, next) {
    numberOfReq++;
    console.log("Number of requests:", numberOfReq);
    next(); // Proceed to the next middleware or route handler
}

// Health-checkup route
app.get("/health-checkup", calculateReq, (req, res) => {
    res.status(200).send("Health Checkup OK");
});

// Start the server
const PORT = 3000;
app.listen(3000, '0.0.0.0', () => {
    console.log("Server is running on http://localhost:3000");
});
