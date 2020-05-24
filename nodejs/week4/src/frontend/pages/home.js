window.handleHomeRequest = () => {
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

<div class="homeContainer">   

<h2>About</h2>
<p id="phrase">“Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.” ― Ruth Reichl<p>

      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

      <img src="images/homepage.jpg" alt="Homepage">
</div>

  <div class="footer">
    <h3>Share the love!</h3>
    <span class="socialmedia">
          <img  src="images/icons8-facebook-100.png" alt="facebook">
          <img  src="images/icons8-instagram-old-100.png" alt="instagram">
          <img  src="images/icons8-twitter-100.png" alt="twitter">
          <img  src="images/icons8-pinterest-100.png" alt="reallife"> 
      </span>
  </div>
`;
  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
