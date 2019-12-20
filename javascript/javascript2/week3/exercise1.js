// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(function () {alert ("Called after 2.5 seconds"); }, 2500); 
setTimeout(); 


// 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function getDelay (delay, stringToLog) {
setTimeout (function () {alert (stringToLog); }, (delay*1000));
}


// Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked. 

function delayByClick() {
    getDelay(5, "Called after 5 seconds"); 
}

let btnClickMe = document.getElementById("#delayerBTN"); 
btnClickMe.addEventListener('click', delayByClick); 

// Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.

const logEarth = () => {
    console.log("Earth Pachamama planet");
}

const logSaturn = () => {
    console.log("Saturn sat in the sand"); 
}


function planetLog (planet) {
    planet ()
}

planetLog(logEarth); 
planetLog(logSaturn); 