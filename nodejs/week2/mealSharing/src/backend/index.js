const express = require("express");
const app = express();

//1. Respond with the json for all the meals. For each meal, if there are reviews matching it"s meal ID, add these reviews to each meal in the form of an array. 
const mealsRouter = require("./routes/meals");
app.get("/meals", mealsRouter);


//2.Respond with the json for all the meals (including it"s reviews) that are cheap (you define what a cheap meal is)
const cheapMeals = require("./routes/cheap_meals");
app.get("/cheap_meals", cheapMeals);


//3.Respond with the json for all the meals (including it"s reviews) that can fit lots of people
const largeMeals = require("./routes/large_meals");
app.get("/large_meals", largeMeals);


//4.Respond with the json for a random meal (including it"s reviews)
const randomMealRouter = require("./routes/meal");
app.get("/meal", randomMealRouter);

//5.Respond with the json for all reservations
const renderReservations = require("./routes/reservations");
app.get("/reservations", renderReservations);

//6.Respond with the json for a random reservation
const randomReservation = require("./routes/reservation");
app.get("/reservation", randomReservation);

// Week2 
// Respond with the json for the meal with the corresponding id 
app.get("/meals/:id", mealsRouter);

//Respond with the json for the reservation with the corresponding id	
app.get("/reservations/:id", renderReservations);


//Respond with the json for the review with the corresponding id
const reviewsRouter = require("./routes/reviews")
app.get("/reviews/:id", reviewsRouter) 

//Respond with the json for all reviews
app.get("/reviews", reviewsRouter);


//Only specific number of meals	
app.get("/meals?limit=4", mealsRouter)


//TODO:Get meals that has been created after the date	
// app.get("/meals?createdAfter=2019-04-05", mealsRouter)



TODO: 
// Work with middleware
// Lets create a middleware function that logs out the time, a request was received and the path. The log should look like this:
// 2019-11-07 11:41 request received for path: /meals/3

app.listen(3000);
console.log("Server is running");