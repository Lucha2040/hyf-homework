const largeMeals = function (req, res) {
    const jsonMealsObj = require('../data/meals.json');  
    const jsonReviewMeal = require('../data/reviews.json');   
    const largeMealsArr = jsonMealsObj.filter(function (item) {
        return item.maxNumberOfGuests > 20  
      });
      const largeReviewMeals = jsonMealsObj.map((el) => {
          return el.review = jsonReviewMeal.filter((item) => {
           el.id === item.mealID
           return item.mealID === el.id
        }); 
    }) 
    res.json(largeMealsArr)
}

module.exports = largeMeals; 