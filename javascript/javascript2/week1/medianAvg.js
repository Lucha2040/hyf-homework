const housePrices = [
  3000000,
  3500000,
  1300000,
  40000000,
  100000000,
  8000000,
  2100000,
];

function getAvg(arr) {
  return Math.floor(
    arr.reduce(function (a, b) {
      return a + b;
    }, 0) / arr.length
  );
}

function getMedian(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  arr.sort(function (a, b) {
    return a - b;
  });
  if (arr.length % 2 == 1) {
    return arr[middleIndex];
  }
}

const avgHouses = getAvg(housePrices);
const mediana = getMedian(housePrices);

const medianaInHTML = document.createElement("h1");
document.body.appendChild(medianaInHTML);
medianaInHTML.setAttribute("id", "medianaName");
medianaInHTML.innerText = `The mediana is ${mediana}`;

const avgInHTML = document.createElement("h1");
document.body.appendChild(avgInHTML);
avgInHTML.setAttribute("id", "avgName");
avgInHTML.innerText = `The average is ${avgHouses}`;

const arrInHTML = document.createElement("h1");
document.body.appendChild(arrInHTML);
arrInHTML.setAttribute("id", "avgName");
arrInHTML.innerText = `The prices of the house are  ${housePrices}`;
