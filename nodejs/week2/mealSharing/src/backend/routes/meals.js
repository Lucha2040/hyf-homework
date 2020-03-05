const jsonReviews = require("../data/reviews");
const jsonMealsObj = require("../data/meals");
// FIXME:const FuzzySearch = require("fuzzy-search");


const renderMeals = function (req, res) {    
    const reqMealID = Number(req.params.id);
    const maxPrice = Number(req.query.maxPrice);
    //FIXME: const reqTitle = req.query.title; 
    const reqLimit = Number(req.query.limit);
    

// Respond with the json for the meal with the corresponding id 
    if(reqMealID > 0) {
    const filteredMeal = jsonMealsObj.filter((el) => {
        return el.id === reqMealID
    })
    res.json(filteredMeal)}    

//Get meals that has a price smaller than maxPrice	    
    if(maxPrice > 0) {
            const cheaperMealsThan = jsonMealsObj.filter((el) => {
                    if(Number(el.price) < maxPrice) {
                        return el.price
                    } 
             });
                res.json(cheaperMealsThan);
        } 

//Only specific number of meals	
   if (reqLimit > 0) {
    const showLimitResults = jsonMealsObj.slice(0, reqLimit);
        res.json(showLimitResults)
        }
else {
        jsonMealsObj.forEach((el) => {
            return el.review = jsonReviews.filter((item) => {
             if (el.id === item.mealID) {
                 return el.id
             }
            })
        })
        res.json(jsonMealsObj);
    }

// //TODO: Get meals that has been created after the date	
//FIXME: check date-fns 



// TODO:Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
//      if(title.length > 0) {
// const searchIn = new FuzzySearch(jsonMealsObj, ["title"]).filter((el) => {return el.title})
// const searchInTitle = searchIn.filter(`${reqTitle}`)
// res.json(searchInTitle);

          
     }
    

module.exports = renderMeals;