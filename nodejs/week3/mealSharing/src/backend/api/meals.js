const express = require("express");
const router = express.Router();
const pool = require("./../database");

// Returns meal by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  pool.query("SELECT * FROM meal WHERE id = ?", id, (error, results) => {
    if (error) {
      res.send(`Sorry, something went wrong. ${error}`);
    } else if (results.length === 0) {
      res.send(`The Id ${id} does not exist. Please insert a valid Id`);
    } else {
      res.send(results[0]);
    }
  });
});

router.get("/", (req, res) => {
  const {
    limit,
    maxPrice,
    availableReservations,
    title,
    createdAfter
  } = req.query;
  const limitNum = Number(limit);

  if (Object.entries(req.query).length > 0) {
    if (availableReservations) {
      pool.query(
        "SELECT meal.*, SUM(reservation.number_of_guests) AS total_guests FROM meal INNER JOIN reservation ON reservation.meal_id = meal.id GROUP BY meal.id HAVING total_guests < meal.Max_reservations",
        (error, results) => {
          if (error) {
            res.send(`Sorry, something went wrong. ${error}`);
          } else {
            res.send(results);
          }
        }
      );
    } else if (title) {
      pool.query(
        "SELECT * FROM meal WHERE title LIKE ?",
        `%${title}%`,
        (error, results) => {
          if (error) {
            res.send(`Sorry, something went wrong. ${error}`);
          } else if (results.length === 0) {
            res.send(
              `No meals contain ${title}. Try using a different word or ingredient`
            );
          } else {
            res.json(results);
          }
        }
      );
    } else if (createdAfter) {
      pool.query(
        "SELECT * FROM meal WHERE Created_date > ?",
        createdAfter,
        (error, results) => {
          if (error) {
            res.send(`Sorry, something went wrong. ${error}`);
          } else if (results.length === 0) {
            res.send(`No meals where created after ${createdAfter}`);
          } else {
            res.json(results);
          }
        }
      );
    } else if (limitNum) {
      pool.query("SELECT * from meal LIMIT ?", limitNum, (error, results) => {
        if (error) {
          res.send(`Sorry, something went wrong. ${error}`);
        } else {
          res.json(results);
        }
      });
    } else if (maxPrice) {
      pool.query(
        "SELECT * FROM meal WHERE price < ?",
        maxPrice,
        (error, results) => {
          if (error) {
            res.send(`Sorry, something went wrong. ${error}`);
          }
          if (results.length === 0) {
            res.send(`No meals were found for less than ${maxPrice}`);
          } else {
            res.send(results);
          }
        }
      );
    }
  } else {
    pool.query("SELECT * FROM meal", (error, results) => {
      if (error) {
        res.send("No meals were found, please check message error");
      } else {
        return res.send(results);
      }
    });
  }
});

//Adds a new meal
router.post("/", (req, res) => {
  const {
    title,
    description,
    location,
    when,
    maxReservations,
    price,
    createdDate
  } = req.body;

  // if (!title || !description || !location || !when || !maxReservations || !price || !createdDate) throw new Error ("Please, insert all the required fields")

  pool.query(
    "INSERT INTO meal SET Title = ?, `Description` = ?, Location = ?, `When` = ?, Max_reservations = ?, Price = ?, Created_date = ?",
    [title, description, location, when, maxReservations, price, createdDate],
    (error, results) => {
      if (error) {
        console.log(error);
        res.send("An error happened. Meal was not created");
      } else {
        res.json({ createdId: results.insertId });
      }
    }
  );
});

//Updates the meal by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    location,
    when,
    maxReservations,
    price,
    createdDate
  } = req.body;

  pool.query(
    "UPDATE meal SET Title = ?, `Description` = ?, Location = ?, `When` = ?, Max_reservations = ?, Price = ?, Created_date = ?  WHERE id = ?",
    [
      title,
      description,
      location,
      when,
      maxReservations,
      price,
      createdDate,
      id
    ],
    (error, results) => {
      if (error) {
        res.send("We couldn't update the meal, please contact the chef");
      } else {
        res.send({ results: `The meal with the id ${id} was updated` });
      }
    }
  );
});

// Deletes the meal by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  pool.query("DELETE FROM meal WHERE id = ?", id, (error, results) => {
    if (error) {
      res.send("Internal error");
    }
    if (results.affectedRows === 1) {
      res.send({ results: `The meal with the id ${id} was deleted` });
    } else {
      res.send({ results: `Object not found` });
    }
  });
});

module.exports = router;
