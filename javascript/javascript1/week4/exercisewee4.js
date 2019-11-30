// Exercise 1: FIZZBUZZ

function fizzBuzz(firstNum) {
  if (firstNum % 3 == 0 && firstNum % 5 == 0) {
    console.log("FizzBuzz");
  } else if (firstNum % 3 == 0) {
    console.log("Fizz");
  } else if (firstNum % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(firstNum);
  }
}

// This proves the conditions in order
fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(10);
fizzBuzz(56);
////////////////////////////////////////////////////////////////////////////////////

// EXERCISE 2: SENTIMENT ANALIZER

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
getSentimentScore("I am sad and angry and hard"); // Negative Test
getSentimentScore("Mixed feelings today: angry awesome beautiful"); // Mixed emotions test

// How "includes" works explained with loops. I will leave this here because is uselful for me to understand how the loop makes others functions
// function comparingWith4() {
//     for (i = 0; i < wordByword.length; i++) {
//         if (wordByword[i] == positiveList[i]) {
//             return "It's a match!"
//         }
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////

// Voice assistant

const name = [];
const toDoList = [];
const favoriteDish = [];
const calendar = [];
const nameGrettings = ["hello", "my name is"];

function getReply(command) {
  const lowerCommand = command.toLowerCase();
  const checkedCommand = lowerCommand.split(" ");
  for (i = 0; i < checkedCommand.length; i++) {
    if (nameGrettings.includes(checkedCommand[i])) {
      name.push(checkedCommand[checkedCommand.length - 1]);
      console.log("Nice to meet you " + name);
    } else if (checkedCommand.includes("what's my name")) {
      if (name == undefined) {
        console.log("You haven't introduce yourself yet.");
      } else {
        console.log("Your name is " + name);
      }
    }
  }
}

getReply("what date is today");

const addToDo = ["add", "to my To do list"];
const removeToDo = ["remove", "from my To do list"];
function replyToDoList(command) {
  const lowerCommand = command.toLowerCase();
  const checkedCommand = lowerCommand.split(" ");
  for (i = 0; i < checkedCommand.length; i++) {
    if (addToDo.includes(checkedCommand[i])) {
      toDoList.push(checkedCommand[1]);
      console.log(checkedCommand[1] + " added to your To do list");
    }
    // else if (removeToDo.includes(checkedCommand[i]))
    //     toDoList.splice(todolist(toDoList[i]), 1);
    //     console.log(toDoList[i] + " has been removed")
  }
  if (lowerCommand == "what's on my to do") {
    console.log(toDoList);
  }
}

//So I'd manage to make this work but i can't remove the tasks.
replyToDoList("Add fishing to my To do list");
replyToDoList("Add singing to my To do list");
replyToDoList("Add training to my To do list");
replyToDoList("what's on my to do");
