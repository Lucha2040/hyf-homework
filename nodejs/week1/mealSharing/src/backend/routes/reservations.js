const renderReservations = function (req, res) {
    const jsonReservObj = require('../data/reservations.json');   
    res.json(jsonReservObj);  
}

module.exports = renderReservations;