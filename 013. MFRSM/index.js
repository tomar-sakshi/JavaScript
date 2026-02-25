// const arr = [10,20,30,10,90,40,20];
// let sum = 0;

// arr.forEach((number)=>{
//     sum+=number;
// })
// console.log(sum);

// let obj = {
//     name:"Rohit",
//     deposit: function(amount){
//         console.log(amount);
//     }
// }
// obj.deposit(100);
// Filter

// const arr = [10,29,40,55,43,23,65];  

// true:select, false: not selected
// const newArr = arr.filter((number)=>number>30);
// console.log(newArr);

// const arr = [10, 29, 40, 55, 43, 23, 65];  
//  Array.prototype.filtering = function(compare){
// const ans = [];
// for(let num of this){
// if(compare(num)){
//     ans.push(num);
// }
// }
// return ans;
//  }

//  const newArr= arr.filtering((num)=>num>30);
//  console.log(newArr);

//  const a = [80,30,40,60,32,78]
//  const answer = a.filtering((num)=>num>30);
//  console.log(answer);

// map

// const arr = [10,20,30,23,45,67];

// const newArr = arr.map((num)=> num*3);
// console.log(newArr);


const products = [
     // Electronics
    {id: 1, name: "Laptop", category: "Electronies", price: 1200, inStock: true },
    {id: 2, name: "Headphones", category: "Electronies", price: 200, inStock: true },
    {id: 3, name: "Smartphone", category: "Electronies", price: 800, inStock: false },
    {id: 4, name: "Monitor", category:"Electronies", price: 300, inStock: true },
    {id: 5, name: "Keyboard", category:"Electronies", price: 75, inStock: true },
]
// const newProduct = products.filter((product)=>product.price>50).sort((a,b)=>b.price-a.price).map((product)=>({name:product.name, price:product.price}))
//  console.log(newProduct);

// const ans = products.map((product)=>({name:product.name, price:product.price}))
// console.log(ans);

// Reduce
// accumalator = sum=0,
// accumalator =1200
//  const totalPrice =products.reduce((accumulator,currentValue)=>{
//     if(currentValue.inStock)
//     return accumulator+currentValue.price;
//     else
//     return accumulator  
// },0)
// console.log(totalPrice);

// Data structure: set  
// const arr = [ 10,20,30,40,50,60,30,20];
 // console.log(arr);

// const s1 = new Set(arr);
// s1.add(11);

// console.log(s1.has(20));

// s1.delete(10);
// s1.clear();
// console.log(s1);

// const email = ["ro@gm", "ro@gm","mo@gm","ro@gm"];
// const s1 = new Set(email);
// console.log(s1);

// const uniqueEmail = [...new Set(email)];//... means Spread Operators
// console.log(uniqueEmail);

// const s1 = new Set(email);

// for(let num of s1){
//     console.log(num);
// }

// map;

// const m1 = new Map([
//     ["Rohit",40],
//     [2,"Rohit"],
//     [true, 11],
//     [[10,30,11],"Mohit"]
// ]);


// m1.set({name: "Sakshi",age:20,}, false)
// // console.log(m1.size);

// for(let [keys,value] of m1){
//     console.log(keys,value);
// }






