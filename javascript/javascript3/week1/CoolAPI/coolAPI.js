function getAjoke() {
  let category = document.getElementById("category").value;
  return fetch(`https://sv443.net/jokeapi/v2/joke/${category}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderJoke(data);
    });
}

function renderJoke(data) {
  const setup = document.getElementById("setup");
  const delivery = document.getElementById("delivery");
  if (data.type == "twopart") {
    setup.innerText = data.setup;
    delivery.innerText = data.delivery;
  } else {
    setup.innerText = data.joke;
  }
}
