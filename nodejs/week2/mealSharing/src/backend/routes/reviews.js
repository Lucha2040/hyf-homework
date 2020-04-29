const jsonReviews = require("../data/reviews");
const reviewsRouter = function (req, res, next) {
  const reviewID =
    Number(req.params.id) > 0 ? Number(req.params.id) : req.params.id;

  if (reviewID) {
    const reviewRequested = jsonReviews.filter((el) => {
      return el.id === reviewID;
    });
    if (reviewRequested.length === 0) {
      return res.json(
        `Sorry, we couldn't find any review with the requested Id ${reviewID}`
      );
    } else {
      return res.json(reviewRequested[0]);
    }
  } else {
    return res.json(jsonReviews);
  }
};

module.exports = reviewsRouter;
