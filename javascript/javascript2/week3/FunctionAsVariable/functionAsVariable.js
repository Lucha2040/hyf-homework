const firstFunc = () => {
  console.log(`I am the first function`);
};

function secondFunc() {
  setTimeout(() => {
    console.log(`I am the second function`);
  }, 5000);
}

function thirdFunc() {
  console.log(`I am the third function`);
}

const functionsArr = [firstFunc, secondFunc, thirdFunc];

function runFunctions(arr) {
  arr.forEach((func) => {
    func();
  });
}

runFunctions(functionsArr);

// Create an object that has a key whose value is a function. Try calling this function.
const objAnonymusFx = {
  funky: () => {
    console.log(`Funky Town!!!`);
  },
};

objAnonymusFx.funky();
