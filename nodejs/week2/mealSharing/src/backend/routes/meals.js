const jsonReviews = require("../data/reviews");
const jsonMealsObj = require("../data/meals");
const parseISO = require("date-fns/parseISO"); // to convert dates https://date-fns.org/v2.9.0/docs/parseISO
const FuzzySearch = require("fuzzy-search");

const renderMeals = function(req, res) {
  const reqMealID = Number(req.params.id);
  const maxPrice = Number(req.query.maxPrice);
  const reqTitle = req.query.title;
  const reqLimit = Number(req.query.limit);
  const createdAfter = parseISO(req.query.createdAfter);

  // Get meals that has been created after the date

  if (createdAfter > 0) {
    const mealsCreatedAfter = jsonMealsObj.filter(el => {
      return parseISO(el.createdAt) > createdAfter;
    });
    res.json(mealsCreatedAfter);
  }

  // Respond with the json for the meal with the corresponding id
  if (reqMealID > 0) {
    const filteredMeal = jsonMealsObj.filter((el) => {
      return el.id === reqMealID;
    });
    res.json(filteredMeal[0]);
    return filteredMeal;
  }
  
  //Get meals that has a price smaller than maxPrice
  if (maxPrice > 0) {
    const cheaperMealsThan = jsonMealsObj.filter(el => {
      if (Number(el.price) < maxPrice) {
        return el.price;
      }
    });
    res.json(cheaperMealsThan);
  }

  //Only specific number of meals
  if (reqLimit > 0) {
    const showLimitResults = jsonMealsObj.slice(0, reqLimit);
    res.json(showLimitResults);
    return showLimitResults
  } 
  
  if (reqTitle) {
    const searcher = new FuzzySearch(jsonMealsObj, ["title"]);
    const result = searcher.search(reqTitle);
    res.json({ result });
    return result;
  } 
  else { jsonMealsObj.forEach(el => {
    return (el.review = jsonReviews.filter(item => {
      if (el.id === item.mealID) {
        return el.id;
      }
    }));
  })
  res.json(jsonMealsObj);
}
}


module.exports = renderMeals;

