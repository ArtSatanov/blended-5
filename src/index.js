// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css'
// import { base, list, frameworks, libs } from './data/hbsData'
// import baseElement from './templates/base.hbs'
// import listElement from './templates/list.hbs'
// import frameworksElement from './templates/frameworks.hbs'
// import libElement from './templates/libs.hbs'
// const mainEl = baseElement(base);
// const listEl = listElement(list);
// const frameworksEl = frameworksElement(frameworks);
// const libEl = libElement(libs);

// const rootEl = document.querySelector("#root");

// rootEl.insertAdjacentHTML('beforeend', mainEl);
// rootEl.insertAdjacentHTML('beforeend', listEl);
// rootEl.insertAdjacentHTML('beforeend', frameworksEl);
// rootEl.insertAdjacentHTML('beforeend', libEl);

const form = document.querySelector('#form');
const list = document.querySelector('.list');

form.addEventListener('submit', getFormInputData);

function getFormInputData(e) {
   e.preventDefault();
   const formData = form.question.value;
   const markup = document.createElement('li');
   markup.textContent = formData;
   list.appendChild(markup);
   const item = [];

   const itemLi = JSON.parse(localStorage.getItem(item) || []);
   item.push(formData);
   item.push(itemLi);
   addToLocalStorage(item);
   form.requestFullscreen()
}

function addToLocalStorage(item) {
   localStorage.setItem('toDoList', JSON.stringify(item));
}