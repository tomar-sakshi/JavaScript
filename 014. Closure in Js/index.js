// Scope and Closure, HDF
// Global......Acccessible to everyone.
// Functional.......Accessible only to that function
// Block Level Scope.......Accessible only to that block

// let a = 10;
// const b = 20;

// if(true){
//   let d = 30;
// }
// console.log(d);

// function greet(){
//     let c = 30;
// }

// // console.log(c);
// greet();

// let global = 30;

// function greet(){
//     let global = 40;

//     function meet(){
//     console.log(global);
// }

// meet();
// }

// greet();

// function createCounter(){

//     function increment(){
//         console.log("I am increment function");
//     }
//      return increment;
// }

// const count = createCounter();
// count();

// function createCounter() {

//     let count = 0;
//   function increment() {
//     count++;
//     return count;
//   }
//   return increment;
// }

// // console.log(count);

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let balance = 500;


// balance+="Rohit";
//  balance-=500;
// console.log(balance);

let balance = 500;

let user = {
    deposit: function(amount){
        if(typeof amount ==="number"&& amount>0){
        balance+=amount;
        return balance;
    }
},
       withdraw: function(amount){
       if(typeof amount ==="number"&& amount>0 && balance>=amount){
        balance=amount;
        return balance;
}
},
   getBalance: function(){
    return balance;
   }

   return user;
}

//  balance+="Sakshi";
// user.balance="Sakshi";
// console.log(user.getBalance());
// console.log(user.deposit("2sa00"));
//  console.log(user.deposit(1000));

// method ko access(function)
// balance :usko directly access na

// Function create

// let a = 3;

// let b, c, d, e;

// b = c = d = e = a

// console.log(a, b, c, d, e)
