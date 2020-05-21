console.log("Script loaded");

function renderProducts(arr) {
  const mainUl = document.querySelector("section.products ul");
  arr.forEach((product) => {
    const productsLi = document.createElement("li");
    const productsUl = document.createElement("ul");

    const nameLi = document.createElement("li");
    nameLi.innerHTML = product.name;
    productsUl.appendChild(nameLi);

    const priceLi = document.createElement("li");
    priceLi.innerHTML = product.price;
    productsUl.appendChild(priceLi);

    const ratingLi = document.createElement("li");
    ratingLi.innerHTML = product.rating;
    productsUl.appendChild(ratingLi);

    const shippingList = document.createElement("li");
    const shippingSubList = document.createElement("ul");
    product.shipsTo.forEach((country) => {
      const countryLi = document.createElement("li");
      countryLi.innerHTML = country;
      shippingSubList.appendChild(countryLi);
      shippingList.appendChild(shippingSubList);
    });
    productsUl.appendChild(shippingList);
    productsLi.appendChild(productsUl);
    mainUl.appendChild(productsLi);
  });
}

let availableProducts = getAvailableProducts();
renderProducts(availableProducts);
console.log(availableProducts);
