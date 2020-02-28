const express = require("express");
const app = express();
const jsonMealsObj = require('./data/meals.json');
const jsonReservObj = require('./data/reservations.json');   
const jsonReviewMeal = require('./data/reviews.json');    

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

// Week2 
// Respond with the json for the meal with the corresponding id 
app.get("/meals/:id", (req, res) => {
    const reqMealID = Number(req.params.id);
    const filteredMeal = jsonMealsObj.filter((el) => {
        return el.id === reqMealID
    });
    res.json(filteredMeal)
});

//Respond with the json for the reservation with the corresponding id	
app.get("/reservations/:id", (req, res) => {    
    const reqReservationID = Number(req.params.id);
    const filteredReservation = jsonReservObj.filter((el) => {
        return el.id === reqReservationID
    });
    res.json(filteredReservation)
});

//Respond with the json for the review with the corresponding id
app.get("/reviews/:id", (req, res) => {    
    const reqReviewID = Number(req.params.id);
    const filteredReview = jsonReviewMeal.filter((el) => {
        return el.id === reqReviewID
    });
    res.json(filteredReview)
});

//Respond with the json for all reviews
const reviewsRouter = require('./routes/reviews.js');
app.get('/reviews', reviewsRouter);

//Get meals that has a price smaller than maxPrice	
app.get("/meals", (req, res) => {
    const maxPrice = req.query.maxPrice;
    const cheaperMealsThan = jsonMealsObj.filter((el) => {
            if(Number(el.price) < maxPrice) {
                return el.price
            } 
        });
        res.json(cheaperMealsThan)
});


app.listen(3000);
console.log("Server is running");