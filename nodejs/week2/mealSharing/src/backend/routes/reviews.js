const jsonReviews = require("../data/reviews");       
const reviewsRouter = function (req, res, next) {
    const reviewID = Number(req.params.id)
    
 //   FIXME: A review consists of content, numberOfStars and createdAt.
    if (reviewID > 0) {
        const reviewRequested =  jsonReviews.filter((el) => {
            return el.id === reviewID 
        });
            res.json(reviewRequested[0]);
    } else {
        res.json(jsonReviews);
    }      
} 

module.exports = reviewsRouter;                             