const randomMeal = function (req, res) {
  const randomIndex = Math.floor(Math.random() * 10);
  const jsonMealsObj = require("../data/meals");
  const jsonReviewMeal = require("../data/reviews");
  const randomMeal = jsonMealsObj[randomIndex];
  const randomReview = jsonReviewMeal.filter((el) => {
    return randomMeal.id === el.mealID;
  });
  res.json({ randomMeal, randomReview });
};

module.exports = randomMeal;
