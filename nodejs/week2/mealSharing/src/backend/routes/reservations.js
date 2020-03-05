const jsonReservObj = require("../data/reservations");
const renderReservations = function (req, res, next) {   
const reqReservationID = Number(req.params.id);

    if(reqReservationID > 0) {   
    const filteredReservation = jsonReservObj.filter((el) => {
        return el.id === reqReservationID
    });
    res.json(filteredReservation)
} else 
{res.json(jsonReservObj)}
}
module.exports = renderReservations;