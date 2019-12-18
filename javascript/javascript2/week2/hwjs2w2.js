let numbers = [1, 2, 3, 4]; 

function getOdd (i) {
    return i % 2 !== 0; 
}
function getDoubleOdd (i) {
    return i * 2;
}
let newNumbers = numbers.filter(getOdd); 
let finalArray = newNumbers.map(getDoubleOdd); 


  const finalResult = document.createElement("h1");
  document.body.appendChild(finalResult);
  finalResult.setAttribute('id', 'finalResult');
  finalResult.innerText = `The doubled numbers are ${finalArray}`;

///////////////////////////////////////////////////////////////////////////////////

