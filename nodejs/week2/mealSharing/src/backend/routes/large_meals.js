const largeMeals = function (req, res) {
    const jsonMealsObj = require("../data/meals");  
    const jsonReviewMeal = require("../data/reviews");   
    const largeMealsArr = jsonMealsObj.filter(function (item) {
        return item.maxNumberOfGuests > 50  
      });
      jsonMealsObj.map((el) => {
          return el.review = jsonReviewMeal.filter((item) => {
           el.id === item.mealID
           return item.mealID === el.id
        }); 
    }) 
    res.json(largeMealsArr)
}

module.exports = largeMeals; 