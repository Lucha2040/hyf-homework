const danishWords = [
  "slot",
  "skolen",
  "minderig",
  "venskab",
  "harmelig",
  "kransekage",
  "rengøring",
  "fyr",
  "øl",
  "egentlig",
];
const wordsBySize = [];

function getShorty(a) {
//First we do an organized array with the length of the words  
  for (i = 0; i < a.length; i++) {
    let wordSize = a[i].length;
    wordsBySize.push(wordSize);
    wordsBySize.sort(function(a, b){return a - b}); //this part organizes min to max.
    }
//Now we search for the first word of our organized array that matches our shorty word
  for (i = 0; i < a.length; i++) {
    if (wordsBySize[0] === a[i].length) {
        return a[i]
    }
  }
}

console.log(getShorty(danishWords)) // Øl length = 2 

/////////////////////////////////////////////////////////////////////////////////

const housePrices = [  
    3000000,
    3500000,
    1300000,
    40000000,
    100000000,
    8000000,
    2100000,
];


function getAvg (a) {
    return Math.floor(a.reduce(function(a,b){return a + b }, 0)/ a.length);
}

console.log(getAvg(housePrices)); // The function works

function getMedian (a) {
    a.sort(function(a, b){return a - b}); //let's organise the array
    if (a.length % 2 == 1) {
        return a[Math.floor(a.length/2)]
    } else {  //I don't need to make a condition because but I should set values for more than 0
    return (a[(a.length/2) - 1] + a[(a.length/2) + 1])/2; 
    }
}
console.log(getMedian(housePrices)); // This works
  
  const mediana = getMedian(housePrices);

  const medianaInHTML = document.createElement("h1");
  document.body.appendChild(medianaInHTML);
  medianaInHTML.setAttribute('id', 'medianaName');
  medianaInHTML.innerText = `The mediana is ${mediana}`;


   
  const avgHouses = getAvg(housePrices);

  const avgInHTML = document.createElement("h1");
  document.body.appendChild(avgInHTML);
  avgInHTML.setAttribute('id', 'avgName');
  avgInHTML.innerText = `The average is ${avgHouses}`;

  const arrInHTML = document.createElement("h1");
  document.body.appendChild(arrInHTML);
  arrInHTML.setAttribute('id', 'avgName');
  arrInHTML.innerText = `The prices of the house are  ${housePrices}`;
  
//////////////////////////////////////////////////////////////////////////

//Ok, I could do 1 array with 2 subArrays but I realized too late 
const spiritAnimal = ['Archaeopteryx', 'Brachiosaurus', 'Diplodocus', 'Protoceratops', 'Stegosaurus', 'Triceratops', 'Tyrannosaurus', 'Velociraptor', 'Ankylosaurus', 'Pterodactylus'];

const spiritEssence = ['Golden', 'Silver', 'Fearless', 'Liberating', 'Slayer', 'Sublime', 'Utmost', 'Fluffy', 'Communist', 'Exentric'];


function getSpiritA () {
  let userName = document.getElementById("userName").value;
    if (userName == null || userName == undefined) {
        return "Please, insert your denomination of birth"
    } else {
    return userName + ": The " + spiritEssence[Math.floor(Math.random()*10)]  + " " + spiritAnimal[Math.floor(Math.random()*10)];
    }
}

console.log(getSpiritA()); 

//////////////////////////////////////////////////////////////////////////