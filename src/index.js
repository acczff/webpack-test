import { getBlogPosts } from "./data";
import "./style.css";
import heroImage from "./assets/images/hero.jpeg";
import { getDate } from "./utils/date";

const blogs = getBlogPosts();
const ul = document.createElement("ul");
blogs.forEach((blog) => {
    const li = document.createElement("li");
    li.innerText = blog;
    ul.appendChild(li);
});

document.body.appendChild(ul);

const image = document.createElement("img");
image.src = heroImage;
document.body.prepend(image);

const h1 = document.createElement("h1");
const name = getDate();
h1.innerHTML = name;
document.body.prepend(h1);