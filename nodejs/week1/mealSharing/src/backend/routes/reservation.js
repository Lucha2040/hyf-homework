const randomReservation = function (req, res) {
    const randomIndex = Math.floor(Math.random()*5);
    const jsonReserObj = require('../data/reservations.json');   
    res.json(jsonReserObj[randomIndex]);   

}

module.exports = randomReservation;