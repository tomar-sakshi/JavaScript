// Async await

// Async function always return a promise.
//  async function greet(){
// return "Sakshi";

//     return new Promise((resolve,reject)=>{
//         reject("Sakshi");
//     })
// }
// const response = greet();
// console.log(response);
// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error:",error);
// })

// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data));

// async function github () {

//     try {
//     const response = await fetch("https://api.github.com/users");
//     if(!response.ok){
//         throw new Error("Data is not present")
//     }
//     const data = await response.json();
//     // console.log(data);

//     const parent = document.getElementById("first");

//     for(let user of data){

//         const element = document.createElement("div");
//         element.classList.add("user");

//         const image = document.createElement("img");
//         image.src = user.avatar_url;

//         const userName = document.createElement("h2");
//         userName.textContent = user.login

//           const anchor = document.createElement("a");
//           anchor.href = user.html_url;
//           anchor.textContent = "Visit Profile";

//           element.append(image,userName,anchor);
//           parent.append(element);
//     }
// }
// catch(error){
//     console.log("error");
// }
// }

// github();
// console.log("Hello ji kaise ho");

// const orderDetail = {
//   orderId: 12345,
//   food: ["Pizza", "Burger", "Sandwiches", "Coke"],
//   cost: 800,
//   customer_name: "Sakshi",
//   customer_location: "MohanNagar",
//   restaurant_location: "Gzb",
// };
// function placedOrder(orderDetail) {
//   console.log(`${orderDetail.cost} Payment is in Progress`);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.9) {
//         console.log("Your payment is received and order get placed");
//         orderDetail.status = true;
//         resolve(orderDetail);
//       } else {
//         reject("Payment is failed");
//       }
//     }, 3000);
//   });
// }

// function preparingOrder(orderDetail) {
//   console.log(`Your food preparation started of ${orderDetail.food}`);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.05) {
//         console.log("Your order is now prepared");
//         orderDetail.token = 12345;
//         resolve(orderDetail);
//       } else {
//         reject("Food item is not present at restaurant");
//       }
//     }, 3000);
//   });
// }

// function pickupOrder(orderDetail) {
//   console.log(
//     `Delivery boy is on way to pickup order from ${orderDetail.restaurant_location}`,
//   );

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.55) {
//         console.log("I have picked up your order");
//         orderDetail.received = true;
//         resolve(orderDetail);
//       } else {
//         reject("Delivery boy unable to reach restaurant");
//       }
//     }, 3000);
//   });
// }

// function deliverOrder(orderDetail) {
//   console.log(
//     `I am on the way to deliver your order ${orderDetail.customer_location}`,
//   );

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Your Ordered is deliver successfully");
//       orderDetail.delivery = true;
//       resolve(orderDetail);
//     }, 3000);
//   });
// }

//  async function ordering(){

//     try{
//     const response1 = await placedOrder(orderDetail);
//     const response2 =await preparingOrder(response1);
//     const response3 = await pickupOrder(response2);
//     const response4 = await deliverOrder(response3);

//     console.log(response4);
//  }
//  catch(error){
//     console.log("Error:", error);
//  }
// }

//  ordering();

// 
async function userDetail(params){
    // const comment = await fetch("userComment");
    // const photos = await fetch("userPhoto");
    // const chat = await fetch("chat");

    const [comment,photos,chat] = await Promises.all([Fetch("userComment"),fetch("photo"),fetch("chat")]);
}