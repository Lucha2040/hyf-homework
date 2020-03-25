const express = require("express");
const router = express.Router();
const pool = require("./../database");

// Returns all reservations
router.get("/", (req, res) => {
  pool.query("SELECT * FROM reservation", (error, results) => {
    if (error) {
      res.send(`Something went wrong. Error: ${error}`);
    } else {
      res.json(results);
    }
  });
});

// Returns reservations by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  pool.query("SELECT * FROM reservation WHERE id = ?", id, (error, results) => {
    if (error) {
      res.send(
        "No reservations were found, please check that the id is correct"
      );
    } else if (results.length === 0) {
      res.send(`There is no reservation with the Id ${id} `);
    } else {
      res.json(results);
    }
  });
});

// Adds a new reservations
router.post("/", (req, res) => {
  const { numberOfGuests, mealID, createdDate } = req.body;

  if (!numberOfGuests || !mealID || !createdDate)
    throw new Error("Please, insert all the required fields");

  pool.query(
    "INSERT INTO reservation SET Number_of_guests = ?, Meal_id = ?, Created_date = ?",
    [numberOfGuests, mealID, createdDate],
    (error, results) => {
      if (error) {
        res.send(`No reservations were made, please check the error ${error}`);
      } else {
        res.json({ id: results.insertId });
      }
    }
  );
});

//Updates the reservations by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { numberOfGuests, mealID, createdDate } = req.body;

  pool.query(
    "UPDATE reservation SET Number_of_guests = ?, Meal_id = ?, Created_date = ?  WHERE id = ?",
    [numberOfGuests, mealID, createdDate, id],
    (error, results) => {
      if (error) {
        res.send("We couldn't update the reservations please contact the chef");
      } else {
        res.json(`The reservation with the Id:${id} was updated`);
      }
    }
  );
});

//Deletes the reservations by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  pool.query("DELETE FROM reservation WHERE id = ?", id, (error, results) => {
    if (error) {
      res.send(
        `Something went wrong, the reservation was not delete. Check Error ${error}`
      );
    } else if (results.affectedRows === 1) {
      res.send({ results: `The reservation with the id ${id} was deleted` });
    } else {
      res.send({ results: `Reservation not found` });
    }
  });
});

module.exports = router;
