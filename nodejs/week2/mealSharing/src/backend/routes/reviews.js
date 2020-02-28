const renderReviews = function (req, res) {
    const jsonReviews = require("../data/reviews.json");       
    res.json(jsonReviews);       
} 


module.exports = renderReviews; 