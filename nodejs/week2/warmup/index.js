const express = require("express"); 
const app = express(); 

app.get("/numbers/add", (req, res) => {
const firstNumber = Number(req.query.first); 
const secondNumber = Number(req.query.second);
const result = firstNumber + secondNumber;
res.send(`The sum of your numbers is ${result}` )
}); 

app.get("/numbers/multiply/:first/:second", (req, res) => {
    const firstNum = Number(req.params.first); 
    const secondNum = Number(req.params.second);
    const result = firstNum * secondNum;     
    res.send(`The sum of your numbers is ${result}`)
    }); 
    


const PORT = 3000; 
app.listen(PORT)
console.log("Server is up"); 