import Laptop from "./laptop.js"
// constructor function
const Student = function(name ){
    // you dont return on a constructor function
    // this means a specific 
    // this key word creates a new object property
    this.name = name;
    // this.greet = function(){
    //     console.log(`Hello, my name is ${this.name} `);
    // }
    this.laptop = null;
}
// all students inherit this, it doesnt show when the general object is called
Student.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name} `);
}
const alice = new Student("Alice");
const bob = new Student("Bob");
console.log("alice: ", alice);

// instance of means is ALICE a STUDENT object

console.log(alice instanceof Student);

// when accessing a method you need to invoke it with brackets
console.log(alice);
console.log(bob);


Student.prototype.buyLaptop = function (laptop){
    this.laptop = laptop;
}

alice.buyLaptop(new Laptop("Apple", "MacBook Pro", "MacOS"));