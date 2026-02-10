// Arrays

// let marks1 = 100;
// let marks2 = 80;
// let marks3 = 60;
// let marks4 = 50;
// let marks5 = 80;

// let marks = [100,80,60,50,80];
// console.log(marks);
// console.log(marks.length);

// let arr = [100,80,"Sakshi",true,20,30];// Heteroganeous data types is type which we can stored diffrent diffrent data types.
// console.log(arr[2]);
// console.log(typeof arr);

// arr[0] = 90;
// console.log(arr);

//push method = Adds one or more elements in the end of an array.

// let arr = [100, 80, "Sakshi", true, 20, 30];

// arr.push(80);
// arr.push("Suryanshu");
// console.log(arr);

// pop method = Removes the last elements from an array.


// arr.pop();
// console.log(arr);  

// unshift method = Adds one or more elements in the starting of an array.

// arr.unshift(40);
// arr.unshift(20);
// console.log(arr);

// shift method = Removes the first elements from an array.

// arr.shift();
// console.log(arr);

// Looping Over an Array (Iteration)
//To perform an action on every item in the list, you use a loop.

// The Classic `for` Loop = This is the most fundamental way to iterate. You create a counter variable (i) that tracks the index.
//  let arr = [20,30,40,50,60];

//  for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
//  }  

 //The for...of Loop (The Modern, Simpler Way) = This is the preferred method when you only care about the value of each item and not its index. It's cleaner and less error-prone.

//  let arr = [20, 30, 40, 50, 60];
//  for(let num of arr){
//     console.log(num);
//  }

// let arr = [10,20,33,44,22,55,77];
// let arr2 = arr;

// arr2.push(90);
// console.log(arr);

// Primitive data types are copied by value and object are copied by reference (address).

// const arr = [10,22,44,66,77];
// arr = [80,90,33,40];// we cannot give new array .........not changed
// arr[2] = 30;// changed
// console.log(arr);

// slice array -This method creates a new array by copying a portion of an existing array. It does not change the original.

// const arr = [10,20,30,40,50,60];
// const arr2 = arr.slice(2,5);
// console.log(arr);

//Splice array = This is a powerful mutating method that can add, remove, or replace elements anywhere in the array.
// const arr3 = arr.splice(1,4,"Sakshi",26);
// console.log(arr);

// Spreading Operators

// const arr = [10,30,50,60,20];
// const arr2 = ["Sakshi",11, true];
// const arr4 = [false,50,35];


// arr.push(arr2);
// const arr3 = arr.concat(arr2,arr4);
// console.log(arr3)

// Spread Operator

// const arr3= [...arr,...arr2,...arr4];
// console.log(arr3);

// const names = ["Sakshi","Suryanshu","Khushi","Ujjwal","Sakshi","Tanu","Kajal","Aditi"];
//console.log(names.toString());
// console.log(names.join(" "));
// console.log(names.lastIndexOf("Sakshi"));
// console.log(names.includes("Sakshi"));// It gives true and false.

// names.sort();// It return alphabets order........A,B,C,D..........in case of small a ...we have to check ascii table.
// names.reverse(); //It return reverse alphabets order.......z,t,s,s,
// console.log(names);

// const a =["10","24","40","50","60","70"];
// const arr =["Sakshi",40,50,30,"Tanu"];

// arr.sort();
// console.log(arr);

// const arr = [10,5,20,3,30,2,40,50,60];

// ascending order
// arr.sort((a,b)=> a-b);

// descending order

// arr.sort((a,b) => b-a);
// console.log(arr);

// * For Negative(-) -Firstly comes a and then b.
//for Postive(+) - Firstly comes b and then c.


// Flattening Array..........

// const arr = [10,20,30,[30,2,5,[8,67],55],60];

// const a = arr.flat(2);
// console.log(a);
// console.log(arr[3][3][1]);

// const a =   [10,20,30,"Rohit",9.6,true];
// a.name = "Mohan";
// console.log(a)