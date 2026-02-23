// Function

//  function greeting(){
//     console.log("Hello Javascript, We are back on 17 june");
//     return 20;
//  }

//  greeting();

//  function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
//  }

// addNumber(3,4);

// rest Operator

// function addNumber(...num){
//    let sum=0;

//    for(let n of num){
//        sum+=n;
//    }
//    console.log(sum);
// }


// addNumber(6,8);
// addNumber(5,6,7);
// addNumber(5,6,9,8);
// addNumber(10,30,4,2);

// console.log(greeting()); 

// Spread operator

// const arr = [10,20,30,40,50 ];
// const arr2 =[30,40,50,60]

// const [first,second,...num] = arr;
// console.log(first,second, num);

// const ans = [arr,arr2]; 
// console.log(ans);

// function: expression

// console.log(addNumber(3,4));
// function addNumber (num1,num2){
//    return num1+num2;
// }

// const addNumber =function(num1,num2){
//    return num1+num2;
// }
// console.log(addNumber(3,4));

// Arrow function

// const addNumber = (num1,num2)=> {
//       return num1+num2;
// }

// let arr = [10,6,9,2,55,23];

// arr.sort((a,b)=>a-b);
// console.log(arr);

// const addNumber = (num1,num2)=> num1+num2;

// If we have single parameter, no need of this().
// const squareNumber = num =>num*num;


// console.log(addNumber(3,4));
// console.log(squareNumber(8));

// Arrow function return object......
 
// const greeting = ()=> {
//    return {
//       name: "Sakshi",
//       age: 28,
//    }
// }
// console.log(greeting());


// const greeting = ()=> ({name:"Sakshi", age: 28})
// console.log(greeting());

// IIFE

// (function greeting (){
//    console.log("Hello ji");
// })();

// (()=>{
//    console.log("Hiiii")
// })();

// Callback Function

// function greet(){
//    console.log("Hello ji kaise ho");
//  }

//  function dance(){
//    console.log("I am dancing");
//  }
//  function meet(callback){
//    console.log("I am going to somewhere");
//  callback();
//    // Code hota jisko mujhe excute karna hota
//   console.log("Javascript");

//  }

// meet(greet);
// meet(dance);

// function blinkitOrderPlaced(){
//    console.log("We have stared packing your order ");
// }

// function zomatoOrderPlaced(){
//    console.log("We have started preparing your food");
// }

// function payment(amount,callback){
//    console.log(`${amount} payment has initilized`)
//    console.log("Payment has received");
//    callback();
//     //GST: Government
//    // Rider ko kitna payment dena
//    //company ko kitna profit
// }
// payment(500,zomatoOrderPlaced);
// payment(300,blinkitOrderPlaced);
