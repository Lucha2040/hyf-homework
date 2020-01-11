const keyApi = "9829a96800b091a629aa8958c0e8b9c8"; 



function fetchData() {
  return fetch( `https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=${keyApi}`)
      .then(response => {return response.json()})
      .then(data => {
        console.log(data);
        const infoToHTML = 
        `<p>City: ${data.name}</p> 
        <p>Overview: ${data.weather[0].main}</p> 
        <p>Temperature: ${data.main.temp}</p> 
        <p>Wind speed: ${data.wind.speed}</p> 
        <p>Cloudiness: ${data.clouds.all}%</p> 
        <p>Sunrise: ${data.sys.sunrise}</p> 
        <p>Sunset: ${data.sys.sunset}</p>
        <img src: ${data.weather[0].icon}>`
        console.log(infoToHTML)
        const render = document.getElementById('root')
        render.innerHTML = infoToHTML
      })
      .catch(error => {
        console.log(error)
      });
    }

    
    
function handleSubmit(e) {
  e.preventDefault()
  const query = document.getElementById('query').value;
  console.log(query)
}
    document.getElementById('test-form')
    .addEventListener('submit', handleSubmit)

