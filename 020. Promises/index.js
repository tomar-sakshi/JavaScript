//console.log("Hello World Start");

//code

// const p1 = fetch("https://api.github.com/users");

// fullfilled, reject

// const p2= p1.then((response)=>{ // then means promises
//      return response.json();
// })

// p2.then((data)=>{
//     console.log(data);
// })

// Create Promise

// const p1 = new Promise((resolve,reject)=>{
//   reject({
//     name: "Sakshi",
//     age: 28,
//   });
// })

// p1.then((response)=>{
//   console.log(response);
// }).catch((error)=>{
//   console.log(error);
// })

// promises chaining
// fetch("https://api.github.com/users")
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error("Data is not present in a server");
//     }
//     return response.json(); // json is a body ........and it sa object
//   })
//   .then((data) => {
//     // console.log(data);
//     const parent = document.getElementById("first");

//     for (let i = 0; i < data.length; i++) {
//       const image = document.createElement("img");
//       image.src = data[i].avatar_url;
//       image.style.height = "40px";
//       image.style.width = "40px";

//       parent.append(image);
//     }
//   })
//   .catch((error) => {
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
//   });

// Fullfilled Category -When server respond anytime whether server has data or not then it calculated in fullfilled category.
// Reject Category - Internet Down, Server Down, DNS Down.

// console.log("Hello World End");

// JSON......Javascript Object Notation

// const j1 = {
//     name: "Sakshi",
//     age: 28,
//     address: "SanjayNagar",
//     c: undefined,
// }

// //convert to json

// const jsonFormat = JSON.stringify(j1);
// console.log(jsonFormat);

// const jsonFormat = `{
// "name":"Sakshi",
// "age": 28,
// "address":"SanjayNagar"
// }`;

// java script object

// const JsObject = JSON.parse(jsonFormat);
// console.log(JsObject);

const orderDetail = {
  orderId: 12345,
  food: ["Pizza", "Burger", "Sandwiches", "Coke"],
  cost: 800,
  customer_name: "Sakshi",
  customer_location: "MohanNagar",
  restaurant_location: "Gzb",
};
function placedOrder(orderDetail) {
  console.log(`${orderDetail.cost} Payment is in Progress`);

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(Math.random()>0.9){
    console.log("Your payment is received and order get placed");
    orderDetail.status = true; 
    resolve(orderDetail);
      }
      else{
        reject("Payment is failed");
      }
  }, 3000);
  })
  
}

function preparingOrder(orderDetail) {
  console.log(`Your food preparation started of ${orderDetail.food}`);

  return new Promise((resolve,reject)=>{

   setTimeout(() => {
    if(Math.random()>0.05){
    console.log("Your order is now prepared");
    orderDetail.token = 12345;
    resolve(orderDetail);
    }
    else{
      reject("Food item is not present at restaurant");
    }
  }, 3000);
})
  }
 

function pickupOrder(orderDetail) {
  console.log(
    `Delivery boy is on way to pickup order from ${orderDetail.restaurant_location}`,
  );

     return new Promise((resolve,reject)=>{
      setTimeout(() => {
       if(Math.random()>0.55){ 
    console.log("I have picked up your order");
    orderDetail.received = true;
    resolve(orderDetail);
       }
       else{
        reject("Delivery boy unable to reach restaurant");
       }
  }, 3000);
})
     }

function deliverOrder(orderDetail) {
  console.log(
    `I am on the way to deliver your order ${orderDetail.customer_location}`,
  );
 
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log("Your Ordered is deliver successfully");
    orderDetail.delivery = true;
     resolve(orderDetail);
  }, 3000);
  })
}

placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
  console.log(orderDetail);
})
.catch((error)=>{
  console.log("Error: ", error);
}).
finally(()=>{
  console.log("I am doing cleanup");
})