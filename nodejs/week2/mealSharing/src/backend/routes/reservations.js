const jsonReservObj = require("../data/reservations");
const renderReservations = function (req, res, next) {
  const reqReservationID =
    Number(req.params.id) > 0 ? Number(req.params.id) : req.params.id;

  if (reqReservationID) {
    const filteredReservation = jsonReservObj.filter((el) => {
      return el.id === reqReservationID;
    });
    if (filteredReservation.length === 0) {
      res.json(
        `Sorry, we couldn't find a reservation that matched the Id ${reqReservationID}`
      );
    } else {
      res.json(filteredReservation[0]);
    }
  } else {
    res.json(jsonReservObj);
  }
};

module.exports = renderReservations;
