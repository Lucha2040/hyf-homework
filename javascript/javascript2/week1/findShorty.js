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
  
  const spanishWords = [
    "hola",
    "Argentina",
    "café",
    "o",
    "gato",
    "perro",
    "y",
    "empanadas",
    "asado",
    "cerveza",
  ];
  

function wordsLengths(arr) {  
  const getShortest = Math.min(...arr.map((el) => el.length));
  return arr.filter((el) => {return el.length === getShortest})
}
  
wordsLengths(danishWords) 
wordsLengths(spanishWords)