// 1. Write a JavaScript function to calculate the sum of two numbers.

// const num1 = Number(prompt("enter first number"))
// const num2 = Number(prompt("enter second number"))

// function calcSum(num1, num2) {
//   console.log(num1 + num2);
// }

// calcSum(num1, num2)

// 2. Write a JavaScript function to check if a given string is a palindrome.

// const text = String(prompt("enter text"));
// let arr = text.split("")

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]== arr[(arr.length - i)]) {
//     console.log('the text is a palindrome');
//   } else {
//     console.log('the text is not a palindrome');
//   }
// }

// 3. Write a JavaScript program to reverse a given string.

// const text = String(prompt("enter text"));
// let arr = text.split("")
// let newArr = arr.reverse().join("")
// console.log(newArr);

// 4. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// const num1 = Number(prompt("enter first number"));
// const num2 = Number(prompt("enter second number"));
// const num3 = Number(prompt("enter third number"));
// const num4 = Number(prompt("enter fourth number"));
// const num5 = Number(prompt("enter fifth number"));

// let arr = [num1, num2, num3, num4, num5];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]%2 == 0 ) {
//     newArr.push(arr[i])
//   }
// }

// console.log(newArr);

// 5. Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.

// let arr1 = [1, 2, 3, { name: "mohamed", age: 21 }, 5, 6];
// let arr2 = [];

// function copyArray(params) {

//   arr2 = JSON.parse(JSON.stringify(params));
//   arr2[3].name = "7mbozo"
//   console.log(arr2 , arr1);
// }

// copyArray(arr1)

// 6. Implement a function to reverse a string without using the built-in reverse () method.

// const text = String(prompt("enter text"));
// let arr = text.split("")
// let newArr = [];

// for (let i = arr.length-1 ; i >= 0; i--) {
//   newArr.push(arr[i])
// }
// let finalArr = newArr.join("")
// console.log(finalArr);

// 7. Implement a function to find the sum of all the numbers in an array.

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let totalNum = 0;
// for (let i = 0; i < arr.length; i++) {
//   totalNum+= arr[i];
// }

// console.log(totalNum);

// 8. Write a function that accepts a number and returns its factorial (e.g. factorial of 5 is 5 x 4 x 3 x 2 x 1).

// let num = Number(prompt("enter a number"));

// function calcFactorial(num) {
//   let finalNum = 1
//   for (let i = 1; i <= num; i++) {
//     finalNum = finalNum * i;
//   }
//   console.log(finalNum);
// }

// calcFactorial(num);

// 9. Implement a function that returns the average value of numbers in an array.

// let arr = [1, 2, 3, 4, 5];

// function calcAvg(paramArr) {
//   let newArr = [...paramArr];
//   let arrSum = 0
//   for (let i = 0; i < newArr.length; i++) {
//     arrSum+=newArr[i]
//   }
//   let avg = arrSum / newArr.length;
//   console.log(avg);
// }

// calcAvg(arr)

// 10. Implement a function that finds the index of a specific element in an array.

// let num = Number(prompt("enter a number"));
// let arr = [1, 2, 3, 4, 5];

// function findIndex(num) {
//   if (arr.indexOf(num) === -1) {
//     console.log("the element is not in the array");
//   } else {
//     console.log(arr.indexOf(num));
//   }
// }

// findIndex(num);

// 11. How would you check if a number is an integer?

// let inputNum = prompt("enter a number");

// function isInteger(params) {
//   // if (Number.isInteger(params)) {
//   //   console.log(`the input (${params}) is an integer`);
//   // } else {
//   //   console.log(`the input (${params}) is not an integer`);
//   // }
//   if (params / 1 == params) {
//     console.log(`the input (${params}) is an integer`);
//   } else {
//     console.log(`the input (${params}) is not an integer`);
//   }
// }

// isInteger(inputNum);

// 12. Create a function that takes the age in years and returns the age in days.

// let ageInYears = prompt('Enter age in years');
// let ageInDaysNum
// function ageInDays(params) {
//   ageInDaysNum = params*365;
//   console.log(ageInDaysNum);
// }

// ageInDays(ageInYears)

// 13. Explain what a callback function is and provide a simple example.

/*
the callback function is a function you can write in some methods and cases to do something with it
Example:
*/

// fetch('//dummyjson.com/test')
// .then((res) => {console.log(res);})
// .then((err) => {console.log(err);});//this is a callback function you can write in some