const express = require("express");
const app = express();

const circle = require('./warmup.js');
app.get('/warmup.js', circle);


app.listen(3000);
console.log("Server is running");