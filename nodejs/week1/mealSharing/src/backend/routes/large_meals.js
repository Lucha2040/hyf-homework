const largeMeals = function (req, res) {
    const jsonMealsObj = require('../data/meals');  
    const jsonReviewMeal = require('../data/reviews');   
    const largeMealsArr = jsonMealsObj.filter((item) => {
        return item.maxNumberOfGuests > 20  
      });
      largeMealsArr.map((el) => {
          return el.review = jsonReviewMeal.filter((item) => {
           return el.id === item.mealID
          }); 
      }) 
      res.json(largeMealsArr)
}

module.exports = largeMeals;