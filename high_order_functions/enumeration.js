const numbers = [1,2,3,4,5];


const printElement = (arrayElement) =>{
    console.log(arrayElement);
}
// call back gets called for each an element in an array

numbers.forEach(printElement);


console.log("numbers:",numbers);

// MAPPING
const doubleNumbers = numbers.map((number) =>{
return number*2
})
console.log("doubleNumbers:", doubleNumbers);

//FILTERING

// has to be a boolean
const evenNumbers = numbers.filter((number) =>{
    return number % 2 == 0;
})

console.log("evenNumbers:", evenNumbers);

// Reduce Method

