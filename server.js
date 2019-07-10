const express = require("express");
const mongoose = require("moongoose");
const app = express();

const PORT = 3001;

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/googlebooks");

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });