

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  /////The currency convertor not available yet. 
  // convertToCurrency(currency) {
  //   fetch("https://api.exchangeratesapi.io/latest?base=DKK")
  //     .then(response => response.json())
  //     .then(currency => console.log(currency));
  // }
}
class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter(item => {
      return item.name !== product.name;
    });
  }

   /////////Search Product not available yet. 
  // searchProduct(productName) {
  //   this.products.find(item => {
  //     if (item.name == productName.name) {
  //       return item;
  //     }
  //   })
  //   console.log(searchArr)
  // }

  getTotal() {
    const totalPrice = this.products.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    const pTotalPrice = document.createElement("p");
    root.appendChild(pTotalPrice);
    pTotalPrice.textContent = `The total price is ${totalPrice}`;
  }

  renderCart() {
    let listOfProducts = "";
    this.products.forEach(item => {
      listOfProducts += ` Product: ${item.name}. Price: ${item.price} `;
    });
    const p = document.createElement("P");
    p.textContent = listOfProducts;
    return p;
  }
  getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(user => renderUser(user))
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
console.log(shoppingCart);

//Please, activate the follow ones to try the method:
// shoppingCart.removeProduct(bog);



//Rendering the data
const root = document.getElementById("root");
root.appendChild(shoppingCart.renderCart());


const userDiv = document.getElementById("userDiv");
userDiv.appendChild(shoppingCart.getUser(), shoppingCart.getTotal());


function renderUser(data) {
  const user = document.createElement("p");
  userDiv.appendChild(user);
  user.textContent = `Items ordered by ${data.name}`;
  return user
}