//Zomato Application

const orderDetail = {
    orderId: 12345,
    food: ["Pizza", "Burger", "Sandwiches", "Coke"],
    cost: 800,
    customer_name: "Sakshi",
    customer_location: "MohanNagar",
    restaurant_location: "Gzb",
}
function placedOrder(orderDetail, Callback){
    console.log(`${orderDetail.cost} Payment is in Progress`);

    setTimeout(()=>{
        console.log("Your payment is received and order get placed");
        orderDetail.status = true;
        Callback(orderDetail);
    },3000)
}


function preparingOrder(orderDetail  ,Callback){
    console.log(`Your food preparation started of ${orderDetail.food}`);

    setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.token = 12345;
        Callback(orderDetail);
    },3000);
}

function pickupOrder(orderDetail, Callback){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location}`);

    setTimeout(()=>{
        console.log("I have picked up your order");
        orderDetail.received = true;
        Callback(orderDetail);
    },3000);
}

function deliverOrder(orderDetail){
    console.log(`I am on the way to deliver your order ${orderDetail.customer_location}`);

    setTimeout(()=>{
        console.log("Your Ordered is deliver successfully");
        orderDetail.delivery = true;
    },3000);
}

placedOrder(orderDetail,(orderDetail)=>{
    preparingOrder(orderDetail,(orderDetail)=>{
        pickupOrder(orderDetail,(orderDetail)=>{
            deliverOrder(orderDetail);
        });
    });
});


