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

    const shippingLi = document.createElement("li");
    const shippingUl = document.createElement("ul");
    product.shipsTo.forEach((country) => {
      const countryLi = document.createElement("li");
      countryLi.innerHTML = country;
      shippingUl.appendChild(countryLi);
      shippingLi.appendChild(shippingUl);
    });
    productsUl.appendChild(shippingLi);
    productsLi.appendChild(productsUl);
    mainUl.appendChild(productsLi);
  });
}

let availableProducts = getAvailableProducts();
renderProducts(availableProducts);
console.log(availableProducts);
