const keyApi = "9829a96800b091a629aa8958c0e8b9c8";

const searchBtn = document.getElementById("btn");
searchBtn.addEventListener("click", () => {
  const city = document.getElementById("city").value;
  fetchData(city);
});

function fetchData(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const logIcon = document.getElementById("icon");
      const logoCode = data.weather[0].icon;
      const icon = `http://openweathermap.org/img/wn/${logoCode}@2x.png`;
      const infoToHTML = `<p>City: ${data.name}</p> 
        <p>Overview: ${data.weather[0].main}</p> 
        <p>Temperature: ${data.main.temp}</p> 
        <p>Wind speed: ${data.wind.speed}</p> 
        <p>Cloudiness: ${data.clouds.all}%</p> 
        <p>Sunrise: ${data.sys.sunrise}</p> 
        <p>Sunset: ${data.sys.sunset}</p>`;
      const render = document.getElementById("root");
      render.innerHTML = infoToHTML;
      logIcon.setAttribute("src", icon);
    })
    .catch((error) => {
      console.log(error);
    });
}
