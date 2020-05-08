// Exercise 1: What´s my age again? - Blink182
function calculate() {
  let yearOfBirth = 1987;
  let yearFuture = document.getElementById("year").value;
  let age = yearFuture - yearOfBirth;
  return "You will be " + age + " years old in " + yearFuture;
}

// Exercise 2: All dogs goes to heaven
function calculate2() {
  let dogYearOfBirth = 2005;
  let dogYearFuture = document.getElementById("wofyear").value;
  let dogYear = dogYearFuture - dogYearOfBirth;
  let shouldShowResultInDogYears = document.getElementById("getDogAge").checked;

  if (shouldShowResultInDogYears) {
    return (
      "Your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture
    );
  } else {
    return (
      "Your dog wil be " + dogYear + " human years old in " + dogYearFuture
    );
  }
}

// // Exercise 3: Housey pricey

function priceCalculator(user, wide, deep, high, gardenSizeInM2, payment) {
  const volumeInMeters = wide * deep * high;
  const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
  if (housePrice < payment) {
    console.log(
      `${user} you are paying too much, you are paying ${
        payment - housePrice
      } times more than the actual price!!!`
    );
  } else if (payment == housePrice) {
    console.log("Great price!");
  } else {
    console.log(`You got a great offer. You are paying too little`);
  }
}

priceCalculator("Peter", 8, 10, 10, 100, 2500000);
priceCalculator("Julia", 5, 11, 8, 70, 1000000);
