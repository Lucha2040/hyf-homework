const housePrices = [
  3000000,
  3500000,
  1300000,
  40000000,
  100000000,
  8000000,
  2100000,
];

function getAvg(a) {
  return Math.floor(
    a.reduce(function (a, b) {
      return a + b;
    }, 0) / a.length
  );
}

function getMedian(a) {
  const result = a.length / 2;
  a.sort(function (a, b) {
    return a - b;
  }); //organise
  if (a.length % 2 == 1) {
    return a[Math.floor(result)];
  } else {
    //I don't need to make a condition because but I should set values for more than 0
    return (a[result - 1] + a[result + 1]) / 2;
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
