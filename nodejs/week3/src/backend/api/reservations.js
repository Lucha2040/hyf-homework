const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

// Returns all reservations	
router.get("/", (request, response) => {
    pool.query("SELECT * FROM reservation", function(error, results) {
      if (error) {
        console.log(error);
        response.send("No reservations were found, please check message error")
      } else {
      return response.json(results);
      
  } next();
  }
  ) 
  });
  
  
  // Adds a new reservations	
  router.post("/", (request, response) => {
    const { Number_of_guests, Meal_id, Created_date } = request.body;
    const data = { 
    Number_of_guests: Number_of_guests,
    Meal_id: Meal_id, 
    Created_date: Created_date
  }   
    pool.query("INSERT INTO reservation SET ?", data, function(error, results, fields) {
      if (error) {
        response.send("No reservations were made, please check message error")
      } else {
        response.json({...data, id:results.insertId}); 
    }
    })
  });
  
  // Returns reservations by id	
  router.get("/", (request, response) => {
    const id = request.body;  
    pool.query("SELECT * FROM reservation WHERE ?", id, function(error, results) {
      if (error) {
        console.log(error)
        response.send("No reservations were found, please check that the id is correct")
      }
      console.log(results)
      return response.json(results);
    })
  });
  
  //Updates the reservations by id	
  router.put("/", (request, response) => {
    const { Id, Number_of_guests, Meal_id, Created_date }  = request.body;
    const data = { 
        Id: Id, 
        Number_of_guests: Number_of_guests,
        Meal_id: Meal_id, 
        Created_date: Created_date
  }   
  pool.query("UPDATE reservations SET ?  WHERE ?", data, data.id, function (error, results) {
      if (error) {
        response.send("We couldn't update the reservations, please contact the chef");
  
      } else {
            return response.json(data)
    }
  }  
  )
  });
  
  //Deletes the reservations by id	
  router.delete("/", (request, response) => {
    const id = request.body; 
    pool.query("DELETE * FROM reservations WHERE ?", id, function(error, results) {
      if (error) {
        response.send("Something went wrong, the reservations was not delete")
      }
      response.json(request);
    });
  });
  
  module.exports = router;
  