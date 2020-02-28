const apiKey = '6om4RdQYOfus5aHsF55R28uIQDtB3CRt';

function renderData(data) {
  const root = document.getElementById("root");
  const list = document.createElement('ul');
  root.childNodes.forEach(child => {
    root.removeChild(child);
  });
  root.appendChild(list);
    data.forEach(img => {
  const renderImg = document.createElement('img');
  renderImg.src= img.images.preview_gif.url;
  const item = document.createElement('li');
  item.appendChild(renderImg); 
  list.appendChild(item);
  });
}


function fetchData() {
    const inputGif = document.getElementById('gifReq');
    const getGif = inputGif.value;
    let totalGif = document.getElementById('totalGif')
    let maxView = totalGif.value;
fetch(`http://api.giphy.com/v1/gifs/search?q=${getGif}&api_key=${apiKey}&limit=${maxView}`)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    renderData(response.data)
  })
}
