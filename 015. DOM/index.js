const heading2 = document.createElement("h2");
heading2.innerHTML = "<strong>Strike is Coming</strong>";
heading2.textContent = "Strike is Coming";
heading2.id = "second";

// console.log(heading2);

// //select element

const heading1 = document.querySelector("#first");
heading1.after(heading2);
heading1.before(heading2);

// create newElement

const heading3 = document.createElement("h3");
heading3.textContent = "Diwali is Coming";
heading3.id = "third";
// heading3.className = "diwali";
// heading3.className += " holi";

heading3.classList.add("diwali");
heading3.classList.add("holi");
heading3.classList.remove("diwali");

// heading3.style.backgroundColor = "purple";
// heading3.style.fontSize = "40px";
// heading3.setAttribute("hello", "ji");

// heading2.after(heading3);
// heading1.before(heading3);
// console.log(heading3.getAttribute("hello"));

// create list - after ---- bad mein , before ------phle.
// append- add (something) to the end of a written document.  
// prepend- add (something) to the beginning of something else.

// const listItem1 = document.createElement("li");
// listItem1.textContent = "Milk";

// const listItem2 = document.createElement("li");
// listItem2.textContent = "Cake";

// const listItem3 = document.createElement("li");
// listItem3.textContent = "Curd";

// const listItem4 = document.createElement("li");
// listItem4.textContent = "Paneer";

// const listItem5 = document.createElement("li");
// listItem5.textContent = "Coffee";

// const listItem6 = document.createElement("li");
// listItem6.textContent = "Tea";

// const listItem7 = document.createElement("li");
// listItem7.textContent = "Fanta";

// const unorderListElement = document.getElementById("listing");

// unorderListElement.append(listItem1, listItem2, listItem4);
// unorderListElement.append(listItem2);
// unorderListElement.prepend(listItem3, listItem5, listItem6);

// console.log(unorderListElement.children[1].before(listItem7));
// console.log(unorderListElement.children[1].after(listItem7));

const arr = ["Milk", "Cake", "Curd", "Paneer", "Coffee", "Tea", "Fanta"];

const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

for (let food of arr) {
  const list = document.createElement("li");
  list.textContent = food;
  fragment.append(list); 
}


unorderElement.append(fragment);

// How to delete hello coder army....
// const h1 = document.getElementById("first");
// h1.remove();


 // Old Method........
const month = document.getElementById("five");
// console.log(month.children); 

const lister = document.createElement("li");
// lister.textContent = "Help";
lister.innerHTML = "<h2>Help</h2>";
month.prepend(lister);

// month.insertAdjacentElement("afterbegin", lister);