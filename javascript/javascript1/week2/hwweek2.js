// Note: I took this homework to the study  group to ask for some guidance but I tried to come with my own solutions to all the exercise (except for student manager, that we review together in class and I wouldn't had a brain to think all that by myself

function getFullName(firstname, surname, useFormalName) {
    if (firstname === " " || surname === " ") {
        console.log("Please complete all the information required")
    } else if (useFormalName) {
        console.log("Lord " + firstname + " " + surname)
    } else {
        console.log(firstname + " " + surname)
    }
}

let fullname1 = getFullName("Maria", "Pava", false)
let fullname2 = getFullName("Andreas", "Schultz", true)
let fullname3 = getFullName(" ", "Nielsen", false)

/////////////////////////////////////////////////////////////////////////////////////

//Note: I started working with the review we did in class but ended up coming with a solution that didn't request me to use the if statement. But technically this works.
function getEventWeekDays(daysUntil) {
    let week = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    let today = new Date().getDay();
    let index = ((daysUntil + today) % week.length);
    console.log(index);
    console.log(week[index]);
}
getEventWeekDays(10)

/////////////////////////////////////////////////////////////////////////////////////

function dressForToday(temperature) {
    if (temperature >= 25) {
        return "Shorts/skirt and t-shirts. Or a dress. It's  Summer!";
    } else if (15 <= temperature && temperature < 25) {
        return "Jeans/warm tights, long sleeve shirt and a jacket. Autumm is near.";
    } else (temperature < 15)
    return "Jeans, long sleeve, sweater and a jacket. Michelin Style!";
}

let clothesToWear = dressForToday(10);
console.log(clothesToWear)
//////////////////////////////////////////////////////////////////////

let class07Students = [];

function addStudentToClass(studentName) {
    if (!studentName) {
        return;
    }
    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
    } else if (studentName.toLowerCase() === 'queen') {
        class07Students.push(studentName.toLowerCase());
    } else if (class07Students.length < 6) {
        let lowercaseName = studentName.toLowerCase();
        class07Students.push(lowercaseName);
    } else {
        console.log("Cannot add more students to class 07");
    }
}

addStudentToClass("Maria");
addStudentToClass("Juana");
addStudentToClass("Esteban");
addStudentToClass("Andreas");
addStudentToClass("Niels")
addStudentToClass("Pia");
addStudentToClass("Queen"); // Queen always get a spot 
addStudentToClass("pia");  //Case of repeating name
addStudentToClass("Camilla"); //Case for maximun student
console.log(class07Students);

console.log(class07Students.length); // This should have been a function called  getNumberOfStudents() but for me it didn´t make sense to make a function to log the number of student when I could get it with a property. 

///////////////////////////////////////////////////////////////////////////////////

const boughtCandyPrice = [];

function addCandy (candyType, weight) {
    if (candyType == "sweet") {
       boughtCandyPrice.push(weight * 0.5); 
    } else if (candyType == "chocolate") {
        boughtCandyPrice.push(weight * 0.7);
    } else if (candyType == "toffee") {
        boughtCandyPrice.push(weight * 1.1); 
    } else if (candyType == "chewing gum") {
        boughtCandyPrice.push(weight * 0.03) 
    }
}
 
//Trails to add to the array 
addCandy("sweet", 10);
addCandy("chocolate", 10)
addCandy("toffee", 10)
addCandy("chewing gum", 30)

console.log(boughtCandyPrice);

const amountToSpend = Math.random() * 100; 
for (i = 0, sum = 0; i < boughtCandyPrice.length; sum += boughtCandyPrice[i++]);
// I investigate this from https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers. 
function canBuyMoreCandy() {
    if (amountToSpend > sum) {
        console.log("You can buy more, so please do!");
    } else {
        console.log("Enough candy for you!");
    }
}

canBuyMoreCandy()
//I had to try with small grams because above that it was always amountToSpend < sum.