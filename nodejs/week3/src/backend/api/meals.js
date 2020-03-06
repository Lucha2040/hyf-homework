const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

// Returns all meals	
router.get("/", (request, response) => {
  pool.query("SELECT * FROM meal", function(error, results) {
    if (error) {
      console.log(error);
      response.send("No meals were found, please check message error")
    } else {
    return response.json(results);
    
} next();
}
) 
});


// Adds a new meal	
router.post("/", (request, response) => {
  const {title, description, location, when, max_reservations, price, created_date } = request.body;
  const data = { 
  title: title,
  description: description, 
  location: location, 
  when: when, 
  max_reservations: max_reservations, 
  price: price, 
  created_date: created_date
}   
  pool.query("INSERT INTO meal SET ?", data, function(error, results, fields) {
    if (error) {
      response.send("No meals were found, please check message error")
    } else {
      response.json({...data, id:results.insertId}); //this line merges the data with the ID
    }
  })
});

// Returns meal by id	
router.get("/", (request, response) => {
  const id = request.body;  
  pool.query("SELECT * FROM meal WHERE ?", id, function(error, results) {
    if (error) {
      console.log(error)
      response.send("No meals were found, please check that the id is correct")
    }
    console.log(results)
    return response.json(results);
  })
});

//Updates the meal by id	
router.put("/", (request, response) => {
  const {id, title, description, location, when, max_reservations, price, created_date } = request.body;
  const data = { 
  id: id,
  title: title,
  description: description, 
  location: location, 
  when: when, 
  max_reservations: max_reservations, 
  price: price, 
  created_date: created_date
}   
pool.query("UPDATE meal SET ?  WHERE ?", data, data.id, function (error, results) {
    if (error) {
      response.send("We couldn't update the meal, please contact the chef");

    } else {
          return response.json(data)
  }
}  
)
});

//Deletes the meal by id	
router.delete("/", (request, response) => {
  const id = request.body; 
  pool.query("DELETE * FROM meal WHERE ?", id, function(error, results) {
    if (error) {
      response.send("Something went wrong, the meal was not delete")
    }
    response.json(request);
  });
});

module.exports = router;
