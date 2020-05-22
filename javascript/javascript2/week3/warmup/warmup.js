// 1.
setTimeout(() => {
  alert("Called after 2.5 seconds");
}, 2500);

// 2.
const getDelay = (delay, stringToLog) => {
  setTimeout(() => {
    alert(`${stringToLog} logged after ${delay}`);
  }, delay * 1000);
};

// Create a button in html, use the function
let btnClickMe = document.getElementById("delayerBTN");
btnClickMe.addEventListener("click", () => getDelay(5, "Hej Hallo Welcome"));

// Create two functions and assign them to two different variables. Earth, Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function.

const logEarth = () => {
  console.log("Earth Pachamama planet");
};

const logSaturn = () => {
  console.log("Saturn sat in the sand");
};

function planetLog(planet) {
  planet();
}

planetLog(logEarth);
planetLog(logSaturn);

//Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api

const successHandling = (pos) => {
  const location = pos.coords;
  const locText = document.getElementById("textLocation");
  locText.innerHTML = `This is the latitude ${location.latitude} and this is the longitude ${location.longitude}`;
  console.log(
    `This is the latitude ${location.latitude} and this is the longitude ${location.longitude}`
  );
};
const errorHandling = (err) => {
  return `Error ${err.code}: ${err.message}`;
};

const myLocationBtn = document.getElementById("getLocation");
myLocationBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(successHandling, errorHandling);
});

// Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

const runAfterDelay = (delay, callbk) => {
  setTimeout(() => {
    console.log(`Should be logged after ${delay}`);
    callbk();
  }, delay * 1000);
};

runAfterDelay(10, logSaturn);
runAfterDelay(8, getDelay);

// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"

const dblclick = document
  .getElementById("body")
  .addEventListener("dblclick", logDoubleClick);

function logDoubleClick() {
  const pForDoubleClick = document.getElementById("doubleClick");
  console.log(`Double click!`);
  pForDoubleClick.innerHTML = `Double click!`;
}

// Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke) {
  const logFunnyJoke = () => {
    console.log(`You don't master JavaScript. JavaScript masters you`);
  };
  const logBadJoke = () => {
    console.log(`!false
            (It’s funny because it’s true.)`);
  };

  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

jokeCreator(true);
jokeCreator(false);
