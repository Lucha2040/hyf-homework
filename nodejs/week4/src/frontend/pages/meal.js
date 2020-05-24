const updateMeal = (id) => {
  const title = document.getElementById('title').value
  const price = document.getElementById('price').value
  fetch(`/api/meals/${id}`, {
    method: 'PUT', 
    body: {
      title, 
      price
    }
  })
  .then(res => res.json())
  .then(response => {
    console.log(response)
  })
}

window.handleMealRequest = params => {
  fetch(`/api/meals/${params.id}`)
    .then(res => res.json())
    .then(meal => {
  document.body.innerHTML = `
  <header class="mainHeader">
  <nav class="nav">
    <ul>
    <a href="/" data-navigo>Home</a>
    <a href="meals" data-navigo>Meals</a>
   </ul> 
  </nav>
    <h1>Mikhuy</h1> 
</header>
  
    
    <h1>${meal.Title} (#${params.id})</h1>
    <ul>
    <input value='${meal.Title}' id='title'> 
    <input value='${meal.Title}' id='price'> 
    <li>Price: $${meal.Price}</li>
    <li>Location: ${meal.Location}</li>
    <li>Description: ${meal.Description}</li>    
    <li><img src = "${meal.Title}.jpg" alt = "No imagen available" onerror="this.onerror=null; this.src='noimage.jpg'" alt="No image" width="25%""></li>
    </ul>




    <div class="footer">
    <p>Share the love!</p>
    <span class="socialmedia">
          <img  src="images/icons8-facebook-100.png" alt="facebook">
          <img  src="images/icons8-instagram-old-100.png" alt="instagram">
          <img  src="images/icons8-twitter-100.png" alt="twitter">
          <img  src="images/icons8-pinterest-100.png" alt="reallife"> 
      </span>
  </div>

`

})
router.updatePageLinks();
}


//    <button onClick="updateMeal(${meal.Id})">Update</button>
// <button onClick="reserveMeal(${meal.Id})">Reserve a spot</button>
    
