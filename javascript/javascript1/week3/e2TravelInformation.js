const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};


function getInTheTARDIS(travelInformation) {
  return travelInformation.destinationDistance / travelInformation.speed;
}


function timeConverter (rawHours) {
const wholeHours = Math.floor(rawHours);
const rawMin = (rawHours - wholeHours)*60; 
const wholeMinutes = Math.floor(rawMin);
const rawSeconds = (rawMin - wholeMinutes)*60;
const wholeSeconds = Math.floor(rawSeconds)   
return `It's gonna take you ${wholeHours}:${wholeMinutes}:${wholeSeconds}`
}

const travelTime = getInTheTARDIS(travelInformation);
const stringToLog = timeConverter(travelTime)
console.log(stringToLog);



