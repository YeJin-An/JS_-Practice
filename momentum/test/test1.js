const age = parseInt(prompt("How old are you"));

if (isNaN(age)) {
  console.log("Please write a number");
} else {
  console.log("Thank you for writing your age.");
}

// The Document Object
document.title = "Hello HTML";

const title = document.getElementById("something");
something.innerText = "Got you";

// HTML in Javascript
console.dir(title);
console.log(title.id, title.className, title.innerText);

// Searching For Elements
const hellos = document.getElementById("hellos");
console.log(hellos);

const helloss = document.getElementsByClassName("hello");
console.log("arry를 준다는 것을 배웠다.");

const title0 = document.getElementsByTagName("hi");
console.log(title);

const title1 = document.querySelector(".hello h1");
const titlez = document.querySelector(".hello h1:first-child");
const title2 = document.querySelectorAll(".hello h1");
title1.innerText = "Hello";
console.log(title1);
console.log(title2);

const title3 = document.querySelector("#hello element");
const title4 = document.getElementById("hello element");
console.log(title3, title4);

// Events
const title5 = document.querySelector("div.hello:first-child h1");
console.log(title5);
console.dir(title5);
title5.style.color = "hotpink";
title5.innerText = "hello33";
