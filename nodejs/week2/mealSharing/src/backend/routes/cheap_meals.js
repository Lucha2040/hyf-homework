const cheapMeals = function (req, res) {
    const jsonMealsObj = require('../data/meals.json'); 
    const jsonReviewMeal = require('../data/reviews.json');    
    const cheapMealArr = jsonMealsObj.filter((item) =>  {
        return item.price < 80;
      });
    const cheapReviewArr = jsonMealsObj.map((el) => {
          return el.review = jsonReviewMeal.filter((item) => {
           if (el.id === item.mealID) {
              return item.mealID === el.id
            }}); 
        }) 
        res.json(cheapMealArr)
    }

    module.exports = cheapMeals;