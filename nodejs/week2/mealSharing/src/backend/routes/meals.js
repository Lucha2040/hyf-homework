const jsonReviews = require("../data/reviews");
const jsonMealsObj = require("../data/meals");
const parseISO = require("date-fns/parseISO"); // to convert dates https://date-fns.org/v2.9.0/docs/parseISO
const FuzzySearch = require("fuzzy-search");

const renderMeals = function (req, res) {
  const reqMealID =
    Number(req.params.id) > 0 ? Number(req.params.id) : req.params.id;
  const maxPrice = Number(req.query.maxPrice);
  const reqTitle = req.query.title;
  const reqLimit = Number(req.query.limit);
  const createdAfter = parseISO(req.query.createdAfter);

  if (createdAfter > 0) {
    const mealsCreatedAfter = jsonMealsObj.filter((el) => {
      return parseISO(el.createdAt) > createdAfter;
    });
    res.json(mealsCreatedAfter);
  } else if (reqMealID) {
    const filteredMeal = jsonMealsObj.filter((el) => {
      return el.id === reqMealID;
    });
    if (filteredMeal.length === 0) {
      return res.json(`We could not find and meal with the ID ${reqMealID}`);
    } else {
      return res.json(filteredMeal[0]);
    }
  } else if (maxPrice > 0) {
    const cheaperMealsThan = jsonMealsObj.filter((el) => {
      if (Number(el.price) < maxPrice) {
        return el.price;
      }
    });
    if (cheaperMealsThan.length === 0) {
      res.json(`We could not find meals for less that ${maxPrice}`);
    } else {
      res.json(cheaperMealsThan);
    }
  } else if (reqLimit > 0) {
    const showLimitResults = jsonMealsObj.slice(0, reqLimit);
    res.json(showLimitResults);
    return;
  } else if (reqTitle) {
    const searcher = new FuzzySearch(jsonMealsObj, ["title"]);
    const result = searcher.search(reqTitle);
    res.json({ result });
    return result;
  } else {
    jsonMealsObj.forEach((el) => {
      return (el.review = jsonReviews.filter((item) => {
        if (el.id === item.mealID) {
          return el.id;
        }
      }));
    });
    return res.json(jsonMealsObj);
  }
};

module.exports = renderMeals;
