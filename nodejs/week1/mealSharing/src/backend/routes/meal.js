
const randomMeal = function (req, res) {
    const randomIndex = Math.floor(Math.random()*10);
    const jsonMealsObj = require('../data/meals.json');
    const jsonReviewMeal = require('../data/reviews.json');
    const randomMeal = jsonMealsObj[randomIndex];
    const randomReview = jsonReviewMeal.filter((el) => { randomMeal.id === el.mealID
    return el.mealID === randomMeal.id })
    res.json([randomMeal, randomReview]);   
}

module.exports = randomMeal;