
const randomMeal = function (req, res) {
    const randomIndex = Math.floor(Math.random()*10);
    const jsonMealsObj = require('../data/meals');
    const jsonReviewMeal = require('../data/reviews');
    const randomMeal = { 
        "Meal": jsonMealsObj[randomIndex], 
        "Review": jsonReviewMeal.filter((el) => {
        return jsonMealsObj[randomIndex].id === el.mealID
    })}
    
    res.json(randomMeal)

}

module.exports = randomMeal;