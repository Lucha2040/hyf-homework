const myDiv = document.getElementById("root");
const ul = document.createElement("ul");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter((item) => {
      return item.name !== product.name;
    });
  }

  searchProduct(productName) {
    const result = this.products.filter((product) =>
      product.name.toLowerCase().includes(productName.toLowerCase())
    );
    console.log(result);
  }

  getTotal() {
    const totalPrice = this.products.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    const pTotalPrice = document.createElement("p");
    root.appendChild(pTotalPrice);
    pTotalPrice.textContent = `The total price is ${totalPrice}`;
  }

  renderCart() {
    this.products.forEach((item) => {
      const product = document.createElement("li");
      product.innerHTML = ` Product: ${item.name}`;
      ul.appendChild(product);
      const price = document.createElement("li");
      price.innerHTML = `Price: ${item.price}`;
      ul.appendChild(price);
    });
    myDiv.appendChild(ul);
  }

  getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((user) => renderUser(user));
  }
}

//Create some products.
const flatscreen = new Product("Flat-screen", 5000);
const mælkskummer = new Product("Mælkskummer", 300);
const ps4 = new Product("Play-station 4", 2400);
const bog = new Product("The invincible summer", 100);
const bord = new Product("Spisebord", 1500);
const sko = new Product("Sikkerhedsko", 600);
const kuglepen = new Product("Kuglepen", 20);

const productsArr = [];
const searchArr = [];
const shoppingCart = new ShoppingCart(productsArr);
//Adding them to the Cart
shoppingCart.addProduct(mælkskummer);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(ps4);
shoppingCart.addProduct(bog);
shoppingCart.addProduct(bord);
shoppingCart.addProduct(sko);
shoppingCart.addProduct(kuglepen);

//Remove element
shoppingCart.removeProduct(bog);

//Search product
shoppingCart.searchProduct("kuglepen");
shoppingCart.searchProduct("bog");

//Rendering the data
shoppingCart.renderCart();
const userDiv = document.getElementById("userDiv");
userDiv.appendChild(shoppingCart.getUser(), shoppingCart.getTotal());

function renderUser(data) {
  const user = document.createElement("p");
  userDiv.appendChild(user);
  user.innerText = `Items ordered by ${data.name}`;
}
