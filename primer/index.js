// run with: npx nodemon index.js
// with modules? npx nodemon --require esm index.js

// let hatPrice = 100;
// console.log(`Hat price: ${hatPrice}`);
// let bootsPrice = "100";
// console.log(`Boots price: ${bootsPrice}`);

// if (hatPrice == bootsPrice) {
//     console.log("Prices are the same");
// } else {
//     console.log("Prices are different")
// }

// let totalPrice = hatPrice + bootsPrice;
// console.log(`Total Price: ${totalPrice}`);

// let myVariable = "Ryan";
// console.log(`Type: ${typeof myVariable}`);
// myVariable = 100;
// console.log(`Type: ${typeof myVariable}`);

// console.log(`Null Type: ${typeof null}`);

// //

// function sumPrices(...numbers) {
//     // return numbers.reduce(function(total, val) {
//     //     return total + (Number.isNaN(Number(val)) ? 0: Number(val));
//     // }, 0);
//     // same as above with arrow
//     return numbers.reduce((total, val) =>
//         total + (Number.isNaN(Number(val)) ? 0: Number(val)));
// }

// totalPrice = sumPrices(100, 200);
// console.log(`Total Price: ${totalPrice}`);
// totalPrice = sumPrices(100, '200');
// console.log(`Total Price: ${totalPrice}`);
// totalPrice = sumPrices(100, '200', 'hello');
// console.log(`Total Price: ${totalPrice}`);

// let ProductProto = {
//     toString: function() {
//         return `toString: Name: ${this.name}, Price: ${this.price}`;
//     }
// }

// let hat = {
//     name: "Hat",
//     price: 100,
//     getPriceIncTax() {
//         return Number(this.price) * 1.2;
//     }
// };

// let boots = {
//     name: "Boots",
//     price: 100,
//     getPriceIncTax() {
//         return Number(this.price) * 1.2;
//     }
// }

// Object.setPrototypeOf(hat, ProductProto);
// Object.setPrototypeOf(boots, ProductProto);

// let hatPrototype = Object.getPrototypeOf(hat);
// hatPrototype.toString = function() {
//     return `toString: Name: ${this.name}, Price: ${this.price}`;
// }
// console.log(`Hat Prototype: ${hatPrototype}`);

// let bootsPrototype = Object.getPrototypeOf(boots);
// console.log(`Boots Prototype: ${bootsPrototype}`);

// console.log(`Common prototype: ${hatPrototype === bootsPrototype}`);

// console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);

// **
// let Product = function(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Product.prototype.toString = function() {
//     return `toString: Name: ${this.name}, Price: ${this.price}`;
// }

// Product.process = (...products) =>
//     products.forEach(p => console.log(p.toString()));

// Product.process(new Product("Hat", 100, 1.2), new Product("Boots", 100));

// let TaxedProduct = function(name, price, taxRate) {
//     Product.call(this, name, price);
//     this.taxRate = taxRate;
// }
// Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

// TaxedProduct.prototype.getPriceIncTax = function() {
//     return Number(this.price) * this.taxRate;
// }

// TaxedProduct.prototype.toTaxString = function () {
//     return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
// }

// TaxedProduct.prototype.toString = function() {
//     let chainResult = Product.prototype.toString.call(this);
//     return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
// }

// let hat = new TaxedProduct("Hat", 100, 1.2);
// let boots = new Product("Boots", 100);


// console.log(`${hat.toString()}`);
// console.log(`${boots.toString()}`);

// console.log(`hat and TaxedProduct: ${hat instanceof TaxedProduct}`);
// console.log(`hat and Product: ${hat instanceof Product}`);
// console.log(`boots and TaxedProduct: ${boots instanceof TaxedProduct}`)
// console.log(`boots and Product: ${boots instanceof Product}`);

// **
// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     toString() {
//         return `toString: Name ${this.name}, Price: ${this.price}`;
//     }
// }

// let hat = new Product("Hat", 100);
// let boots = new Product("Boots", 100);

// console.log(hat.toString());
// console.log(boots.toString());

//**
import calcTaxandSum, { calculateTax } from "./tax";

class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}

let product = new Product("Hat", 100);
let taxedPrice = calculateTax(product.price);
console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);

let products = [new Product("Gloves", 23), new Product("Boots", 100)];
let totalPrice = calcTaxandSum(...products.map(p => p.price));
console.log(`Total Price: ${totalPrice.toFixed(2)}`);