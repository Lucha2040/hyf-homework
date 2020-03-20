const express = require("express");
const router = express.Router();
const pool = require("./../database");


// Returns all reviews	
router.get("/", (request, response) => {
    pool.query("SELECT * FROM review", (error, results) => {
      if (error) {
        response.send("No reviews were found, please check message error")
      } else {
      return response.json(results);   
  }
  }) 
  }); 
  
  // Returns reviews by id	
  router.get("/:id", (request, response) => {
    const { id } = request.params;  
    pool.query("SELECT * FROM review WHERE id = ?", id, (error, results) => {
       if (error) {
        response.send("Internal error")
      } else {
      return response.json(results[0]);
    }}
    )
  });
  


  // Adds a new reviews	
  router.post("/", (request, response) => {
    const { Title, Description, Meal_id, Stars, Created_date } = request.body;

    if (!Title || !Description || !Meal_id || !Stars || !Created_date) throw new Error ("Please, insert all the required fields")
    
    pool.query("INSERT INTO review SET ?", {Title, Description, Meal_id, Stars, Created_date} , (error, results) => {
      if (error) {
        response.send("No reviews were made, please check message error")
      } else {     
        response.json({id:results.insertId}); 
    }
    })
  });
  
  
  //Updates the reviews by id	ID
  router.put("/:id", (request, response) => {
    const { id } = request.params;
    const {  Title, Description, Meal_id, Stars, Created_date}  = request.body;
     
  pool.query("UPDATE review SET ?  WHERE id = ?", [{Title, Description, Meal_id, Stars, Created_date}, id], (error, results) => {
      if (error) {
        response.send("We couldn't update the review");
      } else {
          return response.json(`The review with the Id:${id} was updated`)
    }
  }  
  )
  });
  
  //Deletes the reviews by id	
  router.delete("/:id", (request, response) => {
    const { id } = request.params;
    pool.query("DELETE FROM review WHERE id = ?", id, (error, results) =>  {
      if (error) {
        response.send("Something went wrong, the reservation was not delete")
      }
      response.json(`The reservations with the Id: ${id} was deleted`);
    });
  }); 
  
  module.exports = router;
  