const cheapMeals = function (req, res) {
    const jsonMealsObj = require("../data/meals"); 
    const jsonReviewMeal = require("../data/reviews");    
    const cheapMealArr = jsonMealsObj.filter((item) =>  {
        return item.price < 50;
      });
    jsonMealsObj.map((el) => {
          return el.review = jsonReviewMeal.filter((item) => {
           if (el.id === item.mealID) {
              return item.mealID === el.id
            }}); 
        }) 
        res.json(cheapMealArr)
    }

    module.exports = cheapMeals;