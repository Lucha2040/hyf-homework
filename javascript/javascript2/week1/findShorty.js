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
  