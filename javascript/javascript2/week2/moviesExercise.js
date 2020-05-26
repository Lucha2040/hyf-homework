
//1) Get movies with short title.
const shortMovies = movies.filter((movie) => movie.title.length < 5);
console.log(shortMovies);

//2) Get the movies with a long title
const longMovies = movies.filter((movie) => movie.title.length > 50);
console.log(longMovies);

//3)Get movies made between 1980-1989
const loveThe80s = movies.filter((movie) => {
  return movie.year <= 1989 && movie.year >= 1980;
});
console.log(loveThe80s.length);

// 4) Add an extra key tag based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const moviesWithTag = movies.map((movie) => {
  if (movie.rating >= 7) {
    movie.tag = "Good";
  } else if (movie.rating >= 4) {
    movie.tag = "Average";
  } else {
    movie.tag = "Bad";
  }
  return movie;
});
console.log(moviesWithTag);

// 5) Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const higherThan6 = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(higherThan6);

//6)Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
const specialWords = new RegExp("surfer|benjamin|alien", "gi");
const moviesSpecialWords = movies.filter((movie) =>
  movie.title.match(specialWords)
);
console.log(moviesSpecialWords.length);

// 7) Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
const moviesWithDuplicates = movies.filter((movie) =>
  movie.title.match(/\b(\w+)\b.*\b\1\b/gi)
);
console.log(moviesWithDuplicates);
