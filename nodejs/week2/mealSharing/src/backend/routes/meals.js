const renderMeals = function (req, res) {
    const jsonMealsObj = require('../data/meals.json');   
    jsonMealsObj.forEach((el) => {
    return el.review = jsonReviewMeal.filter((item) => {
     if (el.id === item.mealID) {
         return el.id
     }
    }); 
}) 
res.json(jsonMealsObj)
}

module.exports = renderMeals; 