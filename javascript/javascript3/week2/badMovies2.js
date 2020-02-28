const movies = fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then(response => response.json())
  .then(data => console.log(data))


// movies.then(response => response.filter(badMovies))


  
const badMovies = movies => {
  return movies[i].rating < 4;
};

const badMovies2000 = movies => {
  return movies[i].year > 2000;
};

const badTitles = movies => {
  return movies[i].title;
};

// const finalBadOnes = movies.filter(badMovies)
// .filter(badMovies2000)
// .map(badTitles)