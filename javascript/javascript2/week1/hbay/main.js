console.log('Script loaded');

// console.log(getAvailableProducts());

const testProductNames = ['Table', 'Chair', 'Backpack', 'Printer', 'Lamp', 'Sofa', 'Pillow', 'Bed', 'Towel set', 'Carpet'];
console.log(testProductNames)
function renderProducts() {
const li = document.createElement("li"); 
const parentUl = document.querySelector(".products_ul"); 
li.appendChild(parentUl); 
li.innerHTML = testProductNames
}


renderProducts()