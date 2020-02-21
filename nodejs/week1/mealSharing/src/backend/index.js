const express = require("express");
const app = express();

//1. Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. 
const mealsRouter = require('./routes/meals.js');
app.get('/meals', mealsRouter);


//2.Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)
const cheapMeals = require('./routes/cheap_meals.js');
app.get('/cheap_meals', cheapMeals);


//3.Respond with the json for all the meals (including it's reviews) that can fit lots of people
const largeMeals = require('./routes/large_meals.js');
app.get('/large_meals', largeMeals);



//4.Respond with the json for a random meal (including it's reviews)
const randomMealRouter = require('./routes/meal.js');
app.get('/meal', randomMealRouter);

//5.Respond with the json for all reservations
const renderReservations = require('./routes/reservations.js');
app.get('/reservations', renderReservations);

//6.Respond with the json for a random reservation
const randomReservation = require('./routes/reservation.js');
app.get('/reservation', randomReservation);




app.listen(3000);
console.log("Server is running");



