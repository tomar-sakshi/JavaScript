const body = document.querySelector("body");

body.addEventListener("click", (e) => {
  console.log(e.clientX, e.clientY);

  const circleElement = document.createElement("div");
  circleElement.classList.add("circle");
  circleElement.textContent = "Hi";

  const color = ["red", "blue", "yellow", "violet", "pink", "purple"];
  circleElement.style.backgroundColor = color[Math.floor(Math.random() * 6)];

  circleElement.style.top = `${e.clientY}px`;
  circleElement.style.left = `${e.clientY}px`;

  body.append(circleElement);
  console.log(body);

  setTimeOut(() => {
    circleElement.remove();
  }, 5000);
});
