const express = require("express");
const app = express();

const mealsRouter = require('./routes/meals');
app.get('/meals', mealsRouter);

const cheapMeals = require('./routes/cheap_meals');
app.get('/cheap_meals', cheapMeals);

const largeMeals = require('./routes/large_meals');
app.get('/large_meals', largeMeals);

const randomMealRouter = require('./routes/meal');
app.get('/meal', randomMealRouter);

const renderReservations = require('./routes/reservations');
app.get('/reservations', renderReservations);

const randomReservation = require('./routes/reservation');
app.get('/reservation', randomReservation);


app.listen(3000);
console.log("Server is running");



