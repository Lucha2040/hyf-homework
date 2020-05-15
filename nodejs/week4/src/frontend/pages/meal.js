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
  <header>
      <ul>
        <a href="/" data-navigo>Home</a>
        <a href="meals" data-navigo>Meals</a>
      </ul> 
    </header>
    
    <h1>${meal.Title} (#${params.id})</h1>
    <input value='${meal.Title}' id='title'> 
    <input value='${meal.Title}' id='price'> 
    <li>Price: ${meal.Price}</li>
    <li>Location: ${meal.Location}</li>
    <li>Description: ${meal.Description}</li>    
    <img src = "${meal.Title}.jpg" alt = "No imagen available">
    <button onClick="updateMeal(${meal.Id})">Update</button>
    <button onClick="reserveMeal(${meal.Id})">Reserve a spot</button>
    

    `

})
router.updatePageLinks();
}


