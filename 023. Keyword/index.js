// this call apply bind
// this: class object method
//strict mode vs non strict mode
//'use strict'
// global object: in window it is called window, and in node js It is called global.
// globalThis points to global object of the envirnment.
// normal function: non strict mode, this will point to global object,
// in strict mode: It will point to undefined


// var a = 20;
// var b = 40;

// console.log(a,b);

// function greet(name1,name2){
//     console.log(name1,name2);
// }

// greet("Sakshi","Suryanshu");


// document.getElementById("first"); 
//  console.log(globalthis);

// Learn about this keyword
// ............this keyword is global scope: Nodejs point empty object, in browser it will point to global object.......


// 'use strict'
// console.log(this);

// Function
// 100 user: greet function: 100*memory, code copy paste.

'use strict'
function greet(){
    console.log(`hi ${this.name}`);
}


function incrementAge(value,name){
    this.age+=value;
    this.name = name;
    console.log(this.age)
    console.log(this.name)
}
const user = {
        name: "Sakshi",
        age: 28,
        greet: function(){
            // console.log(this);
            console.log(this.name);
        }
}

 // this == user // this keyword is point out for user


const user2 = {
    name:"Tanu",
    age: 27
}

// greet.call(user);
// greet.call(user2);  

incrementAge.call(user2,10,"Yash");

// user2.greet = user.greet;// we are created new method jiske ke under user.greet ko dal dena
// user2.greet();// Call and invoiced


// 'use strict'
// function greet() { 
//     console.log(this);  
// }

// greet();
// in non strict mode jab greet ko kiske invoiced nhi kiya that time this wala is global object ko target kara gaya.