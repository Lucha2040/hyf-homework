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
  const getLength = arr.map((el) => el.length)
  const getShortest = Math.min.apply(null, getLength)
  const shorty = arr.filter((el) => {return el.length === getShortest})
  return shorty
}
  
wordsLengths(danishWords) 
wordsLengths(spanishWords)