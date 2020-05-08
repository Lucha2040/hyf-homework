const seriesDurations = [
    {
      title: 'Modern Family',
      days: 4,
      hours: 3,
      minutes: 59,
    },
    {
      title: 'Avatar: The Last Airbender',
      days: 1,
      hours: 1,
      minutes: 25,
    },
    {
      title: 'The Simpsons',
      days: 10,
      hours: 6,
      minutes: 24,
    }
  ]
  
const minuteConversion = seriesDurations.map((obj) => {
  const hoursToMinutes = (24 * 60);
  const totalInMin = obj.days * hoursToMinutes + obj.hours * 60 + obj.minutes
    return totalInMin}) 
    

const lifePercentage = minuteConversion.map((el) => {
    const lifeSpan = 420480; // This is 80 years in minutes. 
    const newPercent = (el/lifeSpan).toFixed(3) 
    return Number(newPercent) 
  });
 
function logPercent () {
  const totalPercent = lifePercentage.reduce((a, b) => a + b, 0)
for (i= 0; i < seriesDurations.length; i++) 
{
 console.log(`${seriesDurations[i]["title"]} took ${lifePercentage[i]} of my life`) 
}
console.log(`In total that is ${totalPercent.toFixed(3)} % of my life`)
}

logPercent();