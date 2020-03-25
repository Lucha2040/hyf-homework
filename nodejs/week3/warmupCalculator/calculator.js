const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/calculator/:operation", (req, res, next) => {
  const { operation } = req.params;
  const queryParameters = Object.values(req.query);
  const queryConversion = queryParameters.map(el => {
    return Number(el);
  });

  if (operation === "addition") {
    const result = queryConversion.reduce((a, b) => a + b);
    res.send(`The result of the ${operation} of the numbers is ${result}`);
  }
  if (operation === "subtraction") {
    const result = queryConversion.reduce((a, b) => a - b);
    res.send(`The result of the ${operation} of the numbers is ${result}`);
  }
  if (operation === "multiplication") {
    const result = queryConversion.reduce((a, b) => a * b);
    res.send(`The result of the ${operation} of the numbers is ${result}`);
  } else if (operation === "division") {
    const result = queryConversion.reduce((a, b) => a / b);
    res.send(`The result of the ${operation} of the numbers is ${result}`);
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
