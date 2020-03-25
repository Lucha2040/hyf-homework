const express = require("express");
const router = express.Router();
const pool = require("./../database");

// Returns all reviews
router.get("/", (req, res) => {
  pool.query("SELECT * FROM review", (error, results) => {
    if (error) {
      res.send(`No reviews were found, please check message error ${error}`);
    } else {
      res.json(results);
    }
  });
});

// Returns reviews by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  pool.query("SELECT * FROM review WHERE id = ?", id, (error, results) => {
    if (error) {
      res.send(`No reviews were found, please check message error ${error}`);
    } else if (results.length === 0) {
      res.send(`We could not find a review with the Id ${id}`);
    } else {
      res.json(results[0]);
    }
  });
});

// Adds a new reviews
router.post("/", (req, res) => {
  const { title, description, mealId, stars, createdDate } = req.body;

  if (!title || !description || !mealId || !stars || !createdDate)
    throw new Error("Please, insert all the required fields");

  pool.query(
    "INSERT INTO review SET Title = ?, Description = ?, Meal_id = ?, Stars = ?, Created_date = ? ",
    [title, description, mealId, stars, createdDate],
    (error, results) => {
      if (error) {
        res.send(`No reviews were made, please check message error ${error}`);
      } else {
        res.json({ id: results.insertId });
      }
    }
  );
});

//Updates the reviews by id	ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, mealId, stars, createdDate } = req.body;

  pool.query(
    "UPDATE review SET Title = ?, Description = ?, Meal_id = ?, Stars = ?, Created_date = ?  WHERE id = ?",
    [title, description, mealId, stars, createdDate, id],
    (error, results) => {
      if (error) {
        res.send(
          `We couldn't update the review, please check the error ${error}`
        );
      } else {
        res.json(`The review with the Id:${id} was updated`);
      }
    }
  );
});

//Deletes the reviews by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  pool.query("DELETE FROM review WHERE id = ?", id, (error, results) => {
    if (error) {
      res.send("Something went wrong, the review was not delete");
    } else if (results.affectedRows === 1) {
      res.send({ results: `The review with the id ${id} was deleted` });
    } else {
      res.send({ results: `Review not found` });
    }
  });
});

module.exports = router;
