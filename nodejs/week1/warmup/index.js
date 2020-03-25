const express = require("express");
const app = express();

const circle = require('./warmup');
app.get('/warmup', circle);


app.listen(3000);
console.log("Server is running");