// console.log("Hello, TypeScript");

// function calculateTax(amount: number, format: boolean): string | number {
//     const calcAmount = amount * 1.2;
//     return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
// }
/** */

// function calculateTax(amount, discount?) {
//     return (amount * 1.2) - (discount || 0);
// }

// function calculateTax(amount: number, discount: number = 0, ...extraFees: number[]): number {
//     return (amount * 1.2) - discount + extraFees.reduce((total, val) => total + val, 0);
// }

// let taxValue = calculateTax(100);
// console.log(`Total Amount: ${taxValue}`);
/** */

// enum Feature {Waterproof, Insulated};

// type Product = {
//     name: string,
//     price?: number,
//     hasFeature?(Feature): boolean
// }

// let hat = {name: "Hat", price: 100};
// let gloves = {name: "Gloves", price: 75};
// let umbrella = {name: "Umbrella", price: 30, 
//             hasFeature: (feature) => feature === Feature.Waterproof};

// let darkShades: Product = {name: "Sunglasses", price: 54, finish: "flat"};

// let products: Product[] = [hat, gloves, umbrella, darkShades];

// products.forEach(
//     prod => console.log(`${prod.name}: ${prod.price} ` + 
//         `Waterproof: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`)
// );
/** */

// abstract class Person {
//     constructor(public id: string, public name: string,
//         public city: string){}

//     getDetails(): string {
//         return `${this.name}, ${this.getSpecificDetails()}`;
//     }

//     abstract getSpecificDetails(): string;
// }

// class Employee extends Person {
//     // readonly id: string;
//     // name: string;
//     // #dept: string; // # means private
//     // city: string;

//     constructor(readonly id: string, public name: string, 
//         private dept: string, public city: string) {
//             super(id, name, city);
//         }

//     getSpecificDetails(): string {
//         return `works in ${this.dept}`;
//     }
// }

// // let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
// // salesEmployee.writeDept();

// let data: Person[] = [
//     // new Person("bsmith", "Bob Smith", "London"),
//     new Employee("fvega", "Fidel Vega", "Sales", "Paris")
// ];

// data.forEach(item => {
//     console.log(`Person: ${item.name}, ${item.city}`);
//     if (item instanceof Employee) {
//         item.getDetails();
//     }
// });

// interface Product {
//     name: string;
//     price: number;
// }

// class ProductGroup {
//     constructor(...initialProducts: [string, Product][]) {
//         initialProducts.forEach(p => this[p[0]] = p[1]);
//     }

//     // says you can assing any new var you want as long as it's key is a string and it's value is a product
//     [propertyName: string]: Product;
// }
/** */

// import {City, Person, Product} from "./dataTypes";

// let people = [
//     new Person("Bob Smith", "London"),
//     new Person("Dora Peters", "New York")
// ];
// let products = [
//     new Product("Running Shoes", 100),
//     new Product("Hat", 25)
// ];
// let cities = [
//     new City("London", 8136000),
//     new City("Paris", 2141000)
// ];

// class DataCollection<T> {
//     private items: T[] = [];

//     constructor(initialItems: T[]) {
//         this.items.push(...initialItems);
//     }

//     add(newItem: T) {
//         this.items.push(newItem);
//     }

//     // getNames(): string[] {
//     //     return this.items.map(item => item.name);
//     // }

//     getItem(index: number): T {
//         return this.items[index];
//     }
// }

// class DataCollection<T extends (Person | Product)> {
//     private items: T[] = [];

//     constructor(initialItems: T[]) {
//         this.items.push(...initialItems);
//     }

//     add(newItem: T) {
//         this.items.push(newItem);
//     }

//     getNames(): string[] {
//         return this.items.map(item => item.name);
//     }

//     getItem(index: number): T {
//         return this.items[index];
//     }
// }

// class DataCollection<T extends { name: string }> {
//     private items: T[] = [];

//     constructor(initialItems: T[]) {
//         this.items.push(...initialItems);
//     }

//     add(newItem: T) {
//         this.items.push(newItem);
//     }

//     getNames(): string[] {
//         return this.items.map(item => item.name);
//     }

//     getItem(index: number): T {
//         return this.items[index];
//     }
// }

// // [...people, ...products].forEach(item => console.log(`Item: ${item.name}`));

// let peopleData = new DataCollection<Person>(people);
// console.log(`Names: ${peopleData.getNames().join(", ")}`);
// let firstPerson = peopleData.getItem(0);
// console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);

// let productData = new DataCollection<Product>(products);
// let firstProduct = productData.getItem(0);
// console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);
// console.log(`Names: ${productData.getNames().join(", ")}`);
/** */

import { City, Person, Product, Employee } from "./dataTypes";

let products = [
    new Product("Running Shoes", 100),
    new Product("Hat", 25)
];

type shapeType = {name: string};

class Collection<T extends shapeType> {
    private items: Set<T>;

    constructor(initialItems: T[] = []) {
        this.items = new Set<T>(initialItems);
    }

    add(...newItems: T[]): void {
        newItems.forEach(newItem => this.items.add(newItem));
    }

    get(name: string): T {
        return [...this.items.values()].find(item => item.name === name);
    }

    get count(): number {
        return this.items.size;
    }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`there are ${productCollection.count} products`);
let p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);
