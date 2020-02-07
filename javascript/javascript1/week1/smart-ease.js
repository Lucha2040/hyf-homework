// Exercise 1: What´s my age again? - Blink182
function calculate(){
let yearOfBirth = 1987;
let yearFuture =  document.getElementById("year").value;
let age = yearFuture - yearOfBirth
return "You will be " + age + " years old in " + yearFuture
}


// Exercise 2: All dogs goes to heaven 
function calculate2() {
let dogYearOfBirth = 2005;
let dogYearFuture = document.getElementById("wofyear").value;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = document.getElementById('getDogAge').checked;

if (shouldShowResultInDogYears) {
    return "Your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture
} else {
    return "Your dog wil be " + dogYear + " human years old in " + dogYearFuture
}
}

// // Exercise 3: House of Pain (this exercise took extra time)
function calculate3() {
let housePrice1 = 8 * 10 * 10 * 2.5 * 1000 + 100 * 300;
return "Te price of the house according to Peter is " + housePrice1
}
function calculate4() {
let housePrice2 = 5 * 11 * 8 * 2.5 * 1000 + 70 * 300;
return "The cost of your house would be " + housePrice2
}
