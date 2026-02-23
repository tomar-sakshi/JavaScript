// Execution Context
// Memory Allocation
// a = undefined
// b = undefined 
// addNUmber = fnCode
// sumResult1 = undefined
//  sumResult2 = undefined

// Execution phase
// console.log(a);
// var a = 10;
// var b = 20;
// console.log(a);

// var sumResult1 = addNumber(a,b);
// console.log(sumResult1);

// function addNumber(num1,num2){
//     var sum = num1+num2;
//     return sum;
// }

// var sumResult1 = addNumber(a,b);
// var sumResult2 = addNumber(6,7);
// console.log(sumResult1,sumResult2);

// let const
// Memory Allocation
// a = <uninitialised>(Temporal dead zone)
// b = <uninitialised>(Temporal dead zone)
// Excution Phase

// console.log(a); 
let a = 10;
const b = 20;

const addNumber = function(num1,num2){
    const sum =num1+num2;
    return sum;
}
const result = addNumber(a,b);
console.log(result);