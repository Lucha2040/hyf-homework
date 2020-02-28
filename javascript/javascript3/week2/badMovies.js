//2)
function getInfo() {
  fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  )
    .then(response => response.json())
    .then(data => {
    badMov(data);
      badMovies2000(data);
      badMovTitle(data);
    });
}

function badMov (data) {
  const badMovies = [];
  const moviesArr = data;
  for (i = 0; i < moviesArr.length; i++) {
    if (moviesArr[i].rating < 4) {
      badMovies.push(moviesArr[i]);
    }
  }
  console.log(badMovies);
}

//2) Creat an array of bad movies since year 2000
function badMovies2000(data) {
  const badMovies2000 = [];
  const movies2000 = data;
  for (i = 0; i < movies2000.length; i++) {
    if (movies2000[i].rating < 4 && movies2000[i].year >= 2000) {
      badMovies2000.push(movies2000[i]);
    }
  }
  console.log(badMovies2000);
}

// 3) Create an array of the titles of the bad movies since year 2000
function badMovTitle (data) {
    const justTitles = [];
    const moviesTitle = data;
    for (i = 0; i < moviesTitle.length; i++) {
    if (moviesTitle[i].rating < 4 && moviesTitle[i].year >= 2000) {
      justTitles.push(moviesTitle[i].title);
    }
  }
  console.log(justTitles);
}

getInfo()