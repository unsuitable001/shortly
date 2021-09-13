console.log("Hello from shortly. I'll be active shortly (☞ ͡° ͜ʖ ͡°)☞");
const express = require("express");
const apis = require("./routes/api.js");

// Initialize express
const app = express();
const port = 3000;

// Using sub-modules
app.use(apis);

// Listening to incoming connections
const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Handling exit/termination signals
["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) =>
  process.on(signal, () => {
    server.close(() => {
      console.log("Server is shutting down...");
    });
  })
);
