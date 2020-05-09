
const positiveList = [
    "happy",
    "super",
    "awesome",
    "great",
    "delightful",
    "cool",
    "fabulous",
    "beautiful",
    "brilliant",
    "fun"
  ];
  const negativeList = [
    "angry",
    "bad",
    "evil",
    "awful",
    "ugly",
    "upset",
    "sad",
    "boring",
    "hate",
    "hard"
  ];
  
  function getSentimentScore(feelingsArr) {
    const feelingsConverted = feelingsArr.toLowerCase();
    const wordByword = feelingsConverted.split(" ");
    const positiveResult = [];
    const negativeResult = [];
    for (i = 0; i < wordByword.length; i++) {
      if (positiveList.includes(wordByword[i])) {
        positiveResult.push(wordByword[i]);
      } else if (negativeList.includes(wordByword[i])) {
        negativeResult.push(wordByword[i]);
      }
    }
    let score = positiveResult.length - negativeResult.length;
    const finalResult = { score, positiveResult, negativeResult };
    console.log(finalResult);
  }
  
  
  getSentimentScore("I am super happy today"); //Positive Test
  getSentimentScore("I am sad and angry. Life is hard"); // Negative Test
  getSentimentScore("Mixed feelings today: angry awesome beautiful"); // Mixed emotions test
  