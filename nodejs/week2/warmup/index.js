const express = require("express"); 
const app = express(); 


app.get("/numbers/add", (req, res) => {
const {first, second} = req.query;
const firstNumber = Number(first); 
const secondNumber = Number(second); 

const getSum = firstNumber + secondNumber
res.json(`The sum of your numbers is ${getSum}`)
});


app.get("/numbers/multiply/:first/:second", (req, res) => { 
        const {first, second} = req.params;
        const firstNumber = Number(first); 
        const secondNumber = Number(second); 
        const getProduct = firstNumber * secondNumber;     
        res.send(`The multiplication of your numbers is ${getProduct}`)
    })


const PORT = 3000; 
app.listen(PORT)
console.log("Server is up"); 