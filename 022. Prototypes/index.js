// Prototypes and Class

// const obj = {
//         name: "Sakshi",
//         age: 28,
//         greet: function(){
//             console.log("Hello Ji")
//         }
// };

// console.log(obj.greet());
// console.log(obj.hasOwnProperty("names"));
// console.log(obj.toString());

// const arr = [10,40,50,60,38];   

// console.log(arr.length);

// const obj2 = {
//     account:40
// }

// obj2.__proto__ = obj;
// console.log(obj2.name);

// const obj1 = {
//         name: "Sakshi",
//         age: 28,
//         greet: function(){
//             console.log(`Hello ${this.name}`);
//         }
// };


// const obj2 = {
//   name: "Suryanshu",
//   age: 28,
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   }
// };



// const obj3 = {
//   name: "Mohit",
//   age: 30,
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   }
// };

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

sayHi(){
    console.log(`Hi ${this.name}`);
}
}

// const person1 = new Person("Sakshi",28);
// const person2 = new Person("Suryanshu", 10);

// console.log(person1);



// const obj1 = {
//         name: "Sakshi",
//         age: 28,
//         greet: function(){
        
//         }
// };

// console.log(obj1);

// class Customer extends Person {
//         constructor(name,age,account,balance){
//             super(name,age);
//             this.account = account;
//             this.balance = balance;
//         }

//         checkBalance(){
//             return this.balance;
//         }
// }

// const c1 = new Customer("Mohan",20,12,2026);

// console.log(c1.sayHi());

// const obj = {
//     name: "Rohit",  
//     age: 20
// }

// const obj2 = Object.create(obj);
// obj2.account = 10;

// console.log(obj2.account);