const express = require("express");
const router = express.Router();
const pool = require("./../database");



// Returns all reservations	
router.get("/", (request, response) => {
    pool.query("SELECT * FROM reservation", (error, results) => {
      if (error) {
        response.send("No reservations were found, please check message error")
      } else {
       response.json(results);   
  }
  }) 
  });
  
  
  // Adds a new reservations	
  router.post("/", (request, response) => {
    const { Number_of_guests, Meal_id, Created_date } = request.body

    if (!Number_of_guests || !Meal_id || !Created_date) throw new Error ("Please, insert all the required fields")

    pool.query("INSERT INTO reservation SET ?", { Number_of_guests, Meal_id, Created_date }, (error, results) => {
      if (error) {
        response.send("No reservations were made, please check message error")
      } else {
        response.json({id:results.insertId}); 
    }
    })
  });
  
  // Returns reservations by id	
  router.get("/:id", (request, response) => {
    const { id } = request.params;  
    pool.query("SELECT * FROM reservation WHERE id = ?", id, (error, results) => {
      if (error) {
        response.send("No reservations were found, please check that the id is correct")
      }
      response.json(results);
    })
  });
  

  //Updates the reservations by id
  router.put("/:id", (request, response) => {
    const { id } = request.params;
    const { Number_of_guests, Meal_id, Created_date }  = request.body;   

  pool.query("UPDATE reservation SET ?  WHERE id = ?", [ { Number_of_guests, Meal_id, Created_date }, id], (error, results) => {
      if (error) {
        response.send("We couldn't update the reservations please contact the chef");
      } else {
        response.json(`The reservation with the Id:${id} was updated`)
    }
  }  
  )
  });
  
  //Deletes the reservations by id	
  router.delete("/:id", (request, response) => {
    const { id } = request.params;

    pool.query("DELETE FROM reservation WHERE id = ?", id, (error, results) =>  {
      if (error) {
        response.send("Something went wrong, the reservation was not delete")
      }
      response.json(`The reservations with the Id: ${id} was deleted`);
    });
  });
  
  module.exports = router;
  