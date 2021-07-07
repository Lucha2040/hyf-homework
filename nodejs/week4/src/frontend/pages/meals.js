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
  <header class="mainHeader">
  <nav class="nav">
    <ul>
    <a href="/" data-navigo>Home</a>
    <a href="meals" data-navigo>Meals</a>
   </ul> 
  </nav>
    <h1>Mikhuy</h1> 
</header>
  
    <h1>Meals</h1>
<div class="meals">
      <ul class="meals">
        ${meals.map(meal => {
          return `
          <li><img class="img-container" src = "${meal.Title}.jpg" alt = "No imagen available" onerror="this.onerror=null; this.src='noimage.jpg'" alt="No image" width="25%"></li>
          <ul class="meals">
          <li class="title">${meal.Title}</li>
          <li>Price: $${meal.Price}</li>
          <li>Location: ${meal.Location}</li>
          <li>Description: ${meal.Description}</li>
          <li><a href='meal/${meal.Id}'>More about ${meal.Title}</a></li>
          </ul>
        `}).join('')}
      </ul>
</div>
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
.catch(err => console.error(err))

// if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
}
