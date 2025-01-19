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

const mainh=document.querySelector(".somthg")

const div2=document.createElement("div")
div2.setAttribute("class","div")
div2.setAttribute("style","background-color:pink;border-color:pink;border-width:20px;")
mainh.appendChild(div2)

const hh1=document.createElement("h1")
hh1.textContent="Im in a div"
div2.appendChild(hh1)

let p=document.createElement("p")
p.textContent="ME TOO!"
div2.appendChild(p)


