
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

fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(10);
fizzBuzz(56);
fizzBuzz(28)
