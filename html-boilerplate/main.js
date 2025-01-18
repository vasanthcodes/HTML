const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const div=document.createElement("p")
div.style.color="red";
div.classList.add("smthg")
div.textContent="Hey! I'm red"
container.appendChild(div)

const h3=document.createElement("h3")
h3.style.color="blue"
h3.classList.add("h3ig")
h3.textContent="I'm a blue h3"
container.appendChild(h3)