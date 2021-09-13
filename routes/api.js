const express = require("express");

// Initializing express and exporting it along with the paths
const app = module.exports = express();

app.get("/api/mock", (req, res) => {
    res.send("Hello World!");
});
