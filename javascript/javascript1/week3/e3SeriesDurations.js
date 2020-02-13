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
  const hoursToMinutes = (24 * 60);
  const movie1 = (seriesDurations[0]["days"]) * hoursToMinutes + (seriesDurations[0]["hours"]) * 60 + seriesDurations[0]["minutes"];
  const movie2 = (seriesDurations[1]["days"]) * hoursToMinutes + (seriesDurations[1]["hours"]) * 60 + seriesDurations[1]["minutes"];
  const movie3 = (seriesDurations[2]["days"]) * hoursToMinutes + (seriesDurations[2]["hours"]) * 60 + seriesDurations[2]["minutes"];
  
  
  function lifePercentage(a) {
    const lifeSpanNoZeros = 420480; // This is 80 years in minutes. 
    return (a / lifeSpanNoZeros)
  }
  const totalSum = lifePercentage(movie1) + lifePercentage(movie2) + lifePercentage(movie3);
// 2 things: I know I should have done a loop for this, but I will like to hand in the homework on time (and it is a bit late already) and, for some reason, I couldn't add toFixed to the function because that was affecting the result in totalSum later. 
console.log(seriesDurations[0]["title"] + " took " + lifePercentage(movie1).toFixed(3) + "% of my life");
console.log(seriesDurations[1]["title"] + " took " + lifePercentage(movie2).toFixed(3) + "% of my life");
console.log(seriesDurations[2]["title"] + " took " + lifePercentage(movie3).toFixed(3) + "% of my life");
console.log("In total that is " + totalSum.toFixed(3) + "% of my life")  