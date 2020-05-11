function getInfo() {
  fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  )
    .then((response) => response.json())
    .then((data) => {
      badMov(data);
      badMovies2000(data);
      badMovTitle(data);
    });
}

//1(Create an array of bad movies
function badMov(data) {
  const badMovies = data.filter((movie) => movie.rating < 4);
  console.log(badMovies);
}

//2) Creat an array of bad movies since year 2000
function badMovies2000(data) {
  const badMovies2000 = data.filter((movie) => {
    return movie.rating < 4 && movie.year >= 2000;
  });
  console.log(badMovies2000);
}

// 3) Create an array of the titles of the bad movies since year 2000
function badMovTitle(data) {
  const badMovTitle = data.filter((movie) => {
    return movie.rating < 4 && movie.year >= 2000;
  });
  const badTitles = badMovTitle.map((movie) => movie.title);

  console.log(badTitles);
}

getInfo();
