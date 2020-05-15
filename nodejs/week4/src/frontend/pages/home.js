window.handleHomeRequest = () => {
  document.body.innerHTML = `
 
  <header>
  <nav>
  <ul>
    <a href="/" data-navigo>Home</a>
    <a href="meals" data-navigo>Meals</a>
  </ul> 
</nav>
  <img class="logo" src="logo.png" alt="My_Logo">
  <p>“Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.” ― Ruth Reichl<p>
  </header>

    
      <h2>Home</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

      <img src="homepage.jpg" alt="Homepage">

      <h2>Our meals...</h2>
      
      



  <div class="footer">
    <p>Share the love!</p>
    <span>
          <img class="socialmedia" src="icons8-facebook-circled-50.png" alt="facebook">
          <img class="socialmedia" src="icons8-instagram-old-50.png" alt="instagram">
          <img class="socialmedia" src="icons8-twitter-50.png" alt="twitter">
          <img class="socialmedia" src="icons8-heart-50.png" alt="reallife"> 
      </span>
  </div>
`;
  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
