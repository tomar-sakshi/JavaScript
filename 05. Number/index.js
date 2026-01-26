// Number

// let a = 234;
// let b = 345.7865;
// let c = b.toFixed(1);//toFixed return string. Its returns new string.
// console.log(typeof c);//string

// console.log(b.toPrecision(6));// It will also return string. Precision means how much value we want .
// console.log(b.toString());

// let a = new Number(20);// when we are using new keyword it will return (typeof b) object.
// let b = new Number(20);
// console.log(a==b);// false......... A and B are object , if we are compare object both values are pointout and both references are same in object.
// let b = 20;

// console.log(typeof a);// object
//console.log(typeof b);//number

//  let obj1 = {
//     name: "Rohit"
//  }

//  let obj2 = obj1;// true

//  let obj2 = {
// name: "Rohit"
//  }           // false......... If we are compare object refercence meim compare karta hai kya hum dono ek ko he pointout kar rahe hai .Both reference point are different that why it false.

//  console.log(obj1==obj2);// false

// Objects refer to each other, they don't copy each other.
// Primitive data types are copied by value and object are copied by reference (address).

// console.log(Boolean(null));// false
// let a = 20;
// let b = a;
// console.log(a == b);// true

// console.log(Math.floor(5.9));//5
// console.log(Math.max(56,44,67,89890,59));//89890
// console.log(Math.min(56,34,12,2, 0, -20, 20));
// console.log(Math.abs(-8));
// console.log(Math.ceil(7.8));
// console.log(Math.floor(6.4));
// console.log(Math.random());
// [0,1] : It will generate value between 0 and 1, where 0 is included but 1 is not included

//Satebajii ek game banata:(0-99)
// let randomNoFloat = Math.random()*100;
// let randomNo = Math.floor(randomNoFloat);
// console.log(randomNo);
