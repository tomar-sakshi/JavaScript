// Objects
// Key Value

// const user = {
//     name: "Sakshi",
//     age: 27,
//     email: "ch.sakshi005@gmail.com",
//     amount: 8000,
//     "home address": "Xyz colony"
// }

// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);
// console.log(typeof user);

// CRUD Operation: Create Read Update Delete

// console.log(user.age);

// Update
//  user.aadhar = 2345,
//  user.amount = 9000,


// Delete
// delete user.email;
//  console.log(user);



// const user = {
//   name: "Sakshi",
//   age: 27,
//   email: "ch.sakshi005@gmail.com",
//   amount: 8000,
//   "home address": "Xyz colony",
// };

// const user2 = user;
// user2.age = 90;

// console.log(user);
// ***** Important....

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// Loops

// for(let keys in user){
//     console.log(keys, user[keys]);
// }

// user.keys user["name"] user ["age"]


// const user = {
//   name: "Sakshi",
//   age: 27,
//   email: "ch.sakshi005@gmail.com",
//   amount: 8000,
//   "home address": "Xyz colony",
// };
  
// We can used for of loop for array

// const temnparr = Object.keys(user);
// console.log(temnparr)
// for(let keys of temnparr){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
    // console.log(values);
// }

// console.log(Object.entries(user)); // it return like this........
// [
//   ["name", "Sakshi"],
//   ["age", 27],
//   ["email", "ch.sakshi005@gmail.com"],
//   ["amount", 8000],
//   ["home address", "Xyz colony"],
// ];

// for(let [keys,values] of Object.entries(user)){
//      console.log(keys, values);
//  }
// const name = user.name;
// const age = user.age;

// object Destructing

//  const {name: userName ,age: userAge ,amount: userAmount} = user;

// const arr = [10,20,30,40,60];
// const [second,third] = arr;

// console.log(userName,userAge,userAmount);
// console.log(second,third);

// const user = {
//   name: "Sakshi",
//   age: 27,
//   email: "ch.sakshi005@gmail.com",
//   amount: 8000,
//   "home address": "Xyz colony",
//   greeting: function(){
//   console.log(`Strike is coming on 18 October ${this.name}`);
//   return 25;
//   }
// }

//  const user2 = {
//      name:"Sohan",
//      account:501
//  }

// user2.greeting = user.greeting;
// // console.log(user2);
//  user2.greeting();

// const va = user.greeting();
// console.log(va);

// Nested Object - Object ke andar object
// const user = {
//   name: "Sakshi",
//   age: 27,
//   email: "ch.sakshi005@gmail.com",
//   amount: 8000,
//   address: {
//     city: "Delhi",
//     state:"Uttar Pradesh"
//   }   
// };

// Shallow Copy
// const user2 = {...user};
// user2.name = "Mohan";
// user2.address.city = "Agra";
// console.log(user2);

// console.log(user.address.city);

// Deep Copy    

// const user2 = structuredClone(user);
// user2.address.city = "Agra";
// console.log(user);

// Keys -We are treated keys as strings and symbol.

// const sym = Symbol("id");
// const user = {
//     name: "Rohit",
//     age: 20,
//     0: 100,
//     2: "Sakshi",
//     [sym]:"Hello Ji"
// }

// const arr = [10,20,30,40];
// console.log(user[sym]);