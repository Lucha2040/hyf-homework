window.handleMealsRequest = () => {
  const deleteMeal = (id) => {
    fetch(`/api/meals/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(response => {
      console.log(response)
    })
  }
  fetch(`/api/meals`)
    .then(res => res.json())
    .then(meals => {
  document.body.innerHTML = `
  <header>
      <ul>
        <a href="/" data-navigo>Home</a>
        <a href="meals" data-navigo>Meals</a>
      </ul> 
    </header>
  
    <h1>Meals</h1>

      <ul>
        ${meals.map(meal => {
          return `
          <li> 
          <ul>Meal: ${meal.Title}</ul>
          <img src = "${meal.Title}.jpg" alt = "No imagen available" oneerror=null; this.src="noimage.png";>
          <li>Price: ${meal.Price}</li>
          <li>Location: ${meal.Location}</li>
          <li>Description: ${meal.Description}</li>
          <a href='meal/${meal.Id}'>More about ${meal.Title}</a> 
          </br>
0        </li>
        `}).join('')}
      </ul>;
      `
})
.catch(err => console.error(err))

// if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
}
