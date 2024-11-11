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
// greeting(3,4)

// let num1 = 5
// ++num1 pre increment
// num1++ post increment
// --num1 pre decrement
// num1-- post decrement

// console.log(num1--);
// console.log(num1);

/* String Methods */

// let myString = 'Something'
// // shows us the length of the string
// let length = myString.length
// // make text capital '--> myString.toUpperCase
// // make text small letter '--> myString.toLowerCase
// let split = myString.toLowerCase().split('e')
// console.log(split);

/* If and Else Statements */

// let myString = 'Something'
// if (myString == 'Something'){
//     console.log('the string is equal to something');

// } else if(typeof myString == 'string'){
//     console.log('String is a string, but does not equal "Something"');

// }else{
//     console.log('unlucky')
// }


// let age = 16
// if(age > 17){
//     console.log('you qualify for your drivers license');

// } else if(age >= 16 && age < 18){
//     console.log('you qualify for your learners but not your drivers');

// } else{
//     console.log('youre too young buddy')
// }

// let nom = 5
// if(nom % 2 == 0){
//     console.log('your number is even :)');
    
// }else{
//     console.log('your number is odd :( ');
    
// }

// matthew wrote 3 exams and recieved, mathematics: 56%,
// Physics: 71%
// English: 55%
// Calculate the average and check whther or not if he got an average of grade A(100%>80%), grade B(79%>70%), grade C(69%>60%), grade D(59%>50%) or if he does not deserve a grade(´。＿。｀)
// let ave = (56+71+55)/3
// let grade
// if(ave>=80){
//     grade = 'A'
// }
// else if(ave>=70){
//     grade = 'B'
// }
// else if(ave>=60){
//     grade = 'C'
// }
// else if(ave>=50){
//     grade = 'D'
// }
// else{
//     grade = 'dop'
// }
// console.log(grade);

/* Switch statements (Variation 1) */

// 1 - 'Sunny'
// 2 - 'Cloudy'
// 3 - 'Raining'

let value = 1
switch (value){
    case 1:
        console.log('It is Sunny');   
        break;
    case 2:
        console.log('It is Cloudy');   
        break;
    case 3:
        console.log('It is Raining');   
        break;
    default:
        console.log('invalid');   
        break;
}

/* Switch Statements (Variation 2) */
let num = 8
switch (true) {
    case num % 2 ==0:
        console.log('Number is even');  
        break;

    default:
        console.log('Number is odd');
        break;
}

/* Ternary Operator */

num = 11
console.log(num>10 ? 'this is true' : 'this is false');

let studAtLC = true 
console.log(studAtLC == true ? 'youre a student' : 'youre not a student');
