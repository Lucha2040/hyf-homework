// Exercise 1: What´s my age again? - Blink182
function calculate(){
let yearOfBirth = 1987;
let yearFuture =  document.getElementById("year").value;
let age = yearFuture - yearOfBirth
return "You will be " + age + " years old in " + yearFuture
}
// Note: This is the only exercise I did in the Study Group. I know we were just suppossed to do the JS but it was super fun to do it with Atila!

// Exercise 2: All dogs goes to heaven 
function calculate2() {
let dogYearOfBirth = 2005;
let dogYearFuture = document.getElementById("wofyear").value;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true; //Please, note that I couldn't connect this with the HTML. If you change it, it's gonna work. But I couldn't figure out how to connect something like an input radio with boolean values (and I need to keep on studying XD)
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


// ATENTION: please check download the solution I use for the exercise 3 thinking with Arrays. But because then I couldn't figure out the HTML and it's connections, I choose the other option. But I thought the arrays logic was pretty interesting.
// function calculate3() {
//     let volumeInMeters = [8 * 10 * 10, 5 * 11 * 8]; 
//     let gardenSizeInM2 = [100, 70];
//     let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
//     let houseBuyer = document.getElementById("houseBuy").value;
    
//     if (houseBuyer = true) {
//         housePrice = (volumeInMeters[0]) * 2.5 * 1000 + (gardenSizeInM2[0]) * 300
//     } else {
//         housePrice = (volumeInMeters[1]) *2.5 * 1000 + (gardenSizeInM2[1]) *300
//     return "The cost of your house would be " + housePrice
//     }
    

