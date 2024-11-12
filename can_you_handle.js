// 1. Given an array of numbers, use .forEach() to loop and print all the numbers individually in the array.
const numbers = [1, 2, 3, 4];
function nums(n) {
    console.log(n);
}
numbers.forEach(nums)

// 2.   Create an array with called coolCars and give it the following value: ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']
let coolCars = ['BMW', 'Bugati', 'Ferrari', 'McLacren', 'Mercedes']
//Now to manipulate the arrays. ;)

// 3. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
const index = 3
const substitute = 'Lamborghini'
coolCars[index] = substitute;
console.log(coolCars);
// 4. Use a for loop to loop through the array, and console.log every value inside of the array.
for (let c = 0; c < coolCars.length; c++){
    console.log(coolCars[c]);
}
// 5. Reverse the array and console.log the reversed array.
console.log(coolCars.reverse())
// 6. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]

