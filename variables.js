//Variables 

/* Strings */
// let name = "Juan"
// const name = "Juan"
// var name = "Juan"

/* Numbers */
// let number = 10.5
// number = 11

/* Booleans */
// let value = true/false

/* Undefined */
// let name

/* Null */
// let value = null

// let name = true
// let num = 5
// console.log(`my name is ${name}`);
// console.log('my name is' +name +num);

// let myArray = ['anything',2,true,]
// console.log(myArray[1]); //indexing

// camelCase ->  myArray(always used in JS)
// Pascal ->     MyArray
// kebabcas ->   my-array(only used in view)

// object literal -declare (make) an object

let table = {
    material:"wood",
    no_of_legs: 4,
    occupied: true,
}
// bracket notation
console.log(table['material'])
// dot notation
console.log(table.material);
// deconstructing
let {material, occupied,no_of_legs} = table//wood
console.log(material, occupied, no_of_legs);
//let {occupied} = table//true
//console.log(occupied);

// functions
// () -> parentheses
// [] -> brackets
// {} -> braces
function greeting(a,b){
    // a&b are parameters
    console.log('Hello, World!'+[a+b]);
}
// 3&4 are arguments
greeting(3,4)

let num1 = 5
// ++num1 pre increment
// num1++ post increment
// --num1 pre decrement
// num1-- post decrement

console.log(num1--);
console.log(num1);

