const searchFor = "dogs";
const maxView = 10;
const apiKey = "6om4RdQYOfus5aHsF55R28uIQDtB3CRt";

const result = fetch(
  `http://api.giphy.com/v1/gifs/search?q=${searchFor}&api_key=${apiKey}&limit=${maxView}`
);
result
  .then(
    result =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(result);
        }, 3000);
      })).then((result) => console.log(result))
