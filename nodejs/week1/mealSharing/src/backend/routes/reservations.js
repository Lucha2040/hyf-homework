const renderReservations = function (req, res) {
    const jsonReservObj = require('../data/reservations');   
    res.json(jsonReservObj);  
}

module.exports = renderReservations;