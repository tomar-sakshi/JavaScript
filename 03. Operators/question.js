//Q1.  On a shopping website, calculate the total cost of a product when given the price per item (price = 150) and the quantity (quantity = 3).
// Also, calculate a 10% discount on the total cost and display the discounted price.

// Sol-
// const price = 150;
// const quantity = 3;

// const totalPrice  = price * quantity;
//            = 150 * 3; = 450;

// const discount = totalPrice * (10/100);
//            = 450 * (10/100) = 45;

// const discountPrice = totalPrice - discount;
//                = 450  - 45 = 405;

// console.log("price = ", price);
// console.log("quantity = ", quantity);
// console.log("totalPrice =  ", totalPrice);
// console.log("discount = ", discount);
// console.log("discountPrice = ", discountPrice);

// ======================================================================================================

// Q2. On a booking website, check if the user's age is valid for booking:
// Age should be at least 18.
// Write a condition to check and display a message: "Eligible for booking" if the user is 18 or older. "Not eligible for booking" otherwise.

// Sol-
// let age = 18;
// let  result = age >= 18 ? "Eligible for booking" : "Not eligible for booking";
// console.log(result); //Eligible for booking

// ======================================================================================================

//Q3.On a login page, verify the user's credentials: Check if username is not empty AND password is not empty (&& operator).
//If either is empty, display an error message: "Both fields are required."

// Sol-
// const username = "";
// const password = "";

// const message = username && password ?   "hello User" :"Both fields are required";
// console.log(message); // Both fields are required

// =======================================================================================================

//  Practice Questions    //
// 1. Get user to input two number using prompt and print their possible arithmetic results.
// Sol-
// const number1 = Number(prompt("Enter number one"));
// const number2 = Number(prompt("Enter number two"));
// const sum = number1 + number2;
// console.log(`num1 is ${number1} and num2 is ${number2} and their sum is ${sum} `);

// 2. Can you chain assignment operators?
// Ans - Yes, they can be chained 
// eg- 
// const a = 10;
// let b, c, d, e;
// b = c = d = e = a;

// 3. Get user to input a number using prompt and check whether even or odd using ternary operator.
// sol- 
// const number = Number(prompt("Enter Number"));
// const result = (number % 2) == 0 ? "even" : "odd";
// console.log(`The number is ${number} and it is ${result}`);

// 5. Check if a number is within a range between 10 and 20 (inclusive).


// 6. Write a program to find the largest number between 3 numbers using ternary operator.
// const num1 = 20;
// const num2 = 35;
// const num3 = 40;
// console.log(`Three numbers are ${num1}, ${num2}, ${num3}`);

// if(num1 > num2) { 
//     if(num1 > num3) {
//         console.log(`${num1} is largest`)
//     } 
//     else {
//         console.log(`${num3} is largest`)
//     }
// } 
// else {
//     if(num2 > num3) {
//         console.log(`${num2} is largest`)
//     }     
//     else {
//         console.log(`${num3} is largest`)
//     }
// }
