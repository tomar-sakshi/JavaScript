console.log("Hello World Start");


//code

// const p1 = fetch("https://api.github.com/users");


// fullfilled, reject

// const p2= p1.then((response)=>{ // then means promises
//      return response.json();
// })

// p2.then((data)=>{
//     console.log(data);
// })


// promises chaining
fetch("https://api.github.com/users")
.then((response)=>{
    return response.json(); // json is a body ........and it sa object
})
.then((data)=>{
    // console.log(data);
    const parent = document.getElementById("first");

    for(let i=0;i<data.length;i++){
    const image = document.createElement('img');
    image.src = data[i].avatar_url;
    image.style.height = "40px";
    image.style.width = "40px";

    parent.append(image);
    } 
})


console.log("Hello World End");