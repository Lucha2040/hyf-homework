const renderMeals = function (req, res) {
    const jsonMealsObj = require('../data/meals.json');   
    const jsonReviewMeal = require('../data/reviews.json');
const mealsWithReview = jsonMealsObj.map((el) => {
    return el.review = jsonReviewMeal.filter((item) => {
     el.id === item.mealID
        return item.mealID === el.id
    }); 
}) 
res.json([jsonMealsObj, mealsWithReview])
}

module.exports = renderMeals;