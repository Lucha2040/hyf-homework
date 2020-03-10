const renderMeals = function (req, res) {
    const jsonMealsObj = require('../data/meals');   
    const jsonReviewMeal = require('../data/reviews');
    jsonMealsObj.map((el) => {
    return el.review = jsonReviewMeal.filter((item) => {
     return item.mealID === el.id
    }); 
}) 
res.json(jsonMealsObj)
}

module.exports = renderMeals;