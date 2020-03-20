const express = require("express");
const router = express.Router();
const pool = require("./../database");


//Only specific number of meals	
router.get("/", (req, res) => {
  const {limit} = req.query;
  const limitNum = Number(limit) 
if (!limit) throw new Error("An error happened")

pool.query("SELECT * from meal LIMIT ?", limitNum, (error, results) => {
if(error) {
  console.log(error)
  res.send("An error happened") 
} else {
  console.log(results)
  res.json(results)
}
})
})


// Get meals that has a price smaller than maxPrice
router.get("/", (req, res) => {
  const {maxPrice} = req.query;
  if (maxPrice > 0) {
  pool.query("SELECT * FROM meal WHERE price < ?", maxPrice, (error, results) => {
    if (error) {
      console.log(error)
      res.send(`No meals were found for less than ${maxPrice}`)
    } 
    if (results.length === 0) {
      res.send(`No meals were found for less than ${maxPrice}`)
    }
    else {
      console.log(results)
      return res.send({results})
    }
  })
  }
}) 


// Returns meal by id 
router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (!id) throw new Error("Please, insert a valid ID")  

  pool.query("SELECT * FROM meal WHERE id = ?", id, (error, results) => {
    if (error) {
      res.send(error)
    } else {
   res.send(results[0]);
  }
});
})

// Returns all meals	
router.get("/", (req, res) => {
  pool.query("SELECT * FROM meal", (error, results) => {
    if (error) {
      res.send("No meals were found, please check message error")
    } else {
   return res.send(results);   
}}) 
});



//Get meals that still has available reservations	
router.get("/", (req, res) => {
  const { availableReservations } = req.query;
   
  if(availableReservations) {
    pool.query("SELECT * FROM meal WHERE max_reservations > 0", (error, results) => { 
    if(error) {
      res.send("Sorry, we have no reservations available")
    } else {
     res.send(results)
    }
  })
}
})
 

//Get meals that partially match a title.	
router.get("/", (req, res) => {
  const {title} = req.query; 
  console.log(title)
  if(!title) throw new Error(`Please, insert a valid title`)
  if(title) {
    pool.query("SELECT * FROM meal WHERE title LIKE ?", `%${title}%`,  (error, results) => {
      if(error) {
        console.log(error)
        res.send("No meals matched the inserted criteria")
      } else {
        console.log(results)
        res.json({results})
      }
    })
  }
})

// Get meals that has been created after the date	
router.get("/", (req, res) => {
  const {createdAfter} = req.query; 
  if (!createdAfter) throw new Error("Please, inset a valid date")
  
  pool.query("SELECT * FROM meal WHERE Created_date > ?", createdAfter, (error, results) => {
    if(error) {
      console.log(error)
      res.send(`No meals where created after ${createdAfter}`)
    } else {
      console.log(results)
      res.json(results)
    }
  })
})






// //Adds a new meal	
router.post("/", (req, res) => {
  const { title, description, location, when, max_reservations, price, created_date } = req.body

if (!title || !description || !location || !when || !max_reservations || !price || !created_date) throw new Error ("Please, insert all the required fields")

  pool.query("INSERT INTO meal SET ?", { title, description, location, when, max_reservations, price, created_date }, (error, results) => {
    if(error) {
      console.log(error)
      res.send("An error happened. Meal was not created")
  } else {
      res.json({createdId: results.insertId}); 
    }
})
});




//Updates the meal by id	
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const {title, description, location, when, max_reservations, price, created_date } = req.body;

pool.query("UPDATE meal SET ?  WHERE id = ?", [{title, description, location, when, max_reservations, price, created_date }, id],  (error, results) => {
    if (error) {
      res.send("We couldn't update the meal, please contact the chef")
    } 
    else {
      res.send({results: `The meal with the id ${id} was updated`})
}  
})
});


// Deletes the meal by id	
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  pool.query("DELETE FROM meal WHERE id = ?", id, (error, results) => {
    if (error) {
      console.log(error)
      throw new Error('Internal error')
    }
    if (results.affectedRows === 1) { 
      res.send({results: `The meal with the id ${id} was deleted`});
    } 
    else {
      res.send({results: `Object not found`});
    }
  });
});




module.exports = router;
