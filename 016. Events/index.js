// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is Coming";
// }

const element = document.getElementById("first");
// element.onclick = function handleClick() {
//   element.textContent = "Strike is Coming";
// element.style.backgroundColor="pink";
// };

// Override karna
// element.onclick = function handleClick() {
//   element.textContent = "I am the best";
// };

// element.addEventListener("click", () => {
//   element.textContent = "Strike is Coming";
// });

// // we can use multiply EventListener.....

// element.addEventListener("click", () => {
//   element.style.backgroundColor = "brown";
// });

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am clicked";
// })

// const parent = document.getElementById("parent");
//  console.log(parent.children);

// function handleClick(e){
//     e.target.textContext = "I am Clicked";
//     parent.removeEventListener("click", handleClick);
// }

// parent.addEventListener('click',handleClick);


// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click', ()=>{
//         child.textContent ="I am Clicked";
//     })
// }

// Event Bubbling

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log(e.target);
//     console.log("Grandparent is clicked");
// });

// const parent = document.getElementById("parent");
// parent.addEventListener('click', (e) => {
//     console.log(e);
//   console.log("Parent is clicked");
// });

// const child = document.getElementById("child");
// child.addEventListener('click', (e) => {
//     console.log(e);
    // e.stopPropagation();
//   console.log("Child is clicked");
// });

// capture phase on hai ya off 

// On Capture Phase: Top se down aaoge: Us time pe event ko trigger kr diya jaayega.
// Off Capture Phase: Event hai usko down to Up (Bubbling Phase bolte hai, tab trigger kiya jaayega)