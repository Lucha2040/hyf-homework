
function formatCreditCardNumber(num) {
if (isNaN(num)) {
    return "Please, insert only numbers from 0 to 9, without special characters"
} else {
const numberToString = num.toString();
const firstPart = numberToString.slice(0, 4);
const secondPart = numberToString.slice(4, 8);
const thirdPart = numberToString.slice(8, 12);
const fourthPart = numberToString.slice(12, 16);
return `${firstPart} ${secondPart} ${thirdPart} ${fourthPart}`
}
}

const formattedCreditCardObject = formatCreditCardNumber(1234567891234457);
const falseNumber = formatCreditCardNumber("jkfllk");
console.log(formattedCreditCardObject);
console.log(falseNumber)





