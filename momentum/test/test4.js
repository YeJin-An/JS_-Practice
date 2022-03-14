// const loginButton = document.querySelector("button");
// loginForm is HTML element

// Input Values
// function onLoginBtnClick() {
//   console.log("hello", loginInput.value);
// }
// loginButton.addEventListener("click", onLoginBtnClick);

// Form Submission

// 1
// function onLoginSubmit1() {
//   const username = loginInput.value;
//   if (username === "") {
//     console.log("Please write your name");
//   } else if (username.length > 15) {
//     alert("Your name is too log");
//   } else {
//     console.log("hello", username);
//   }
// }
// loginForm.addEventListener("submit", onLoginSubmit1);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KE = "username";

function onLoginSubmit2(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KE, loginInput.value);
  paintGreetings();
}
loginForm.addEventListener("submit", onLoginSubmit2);

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}
link.addEventListener("click", handleLinkClick);

const username = localStorage.getItem(USERNAME_KE);

function paintGreetings() {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (username === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit2);
} else {
  paintGreetings();
}

// Getting Username
// 1. <h1 class='hidden'></h1>
// 2. greeting = innerText = `Hello ${username}!`
// 3. greeting = classList.remove("hidden")

// Saving Username __ API??
// localStorage .removeItem, .getItem, .setItem

// Loading Username __ API 2??
// const savedUsername = localStorage.getItem(username)
// if else 로직작성
// function() 작성 -> 모듈 작성
// 같은 변수가 3개이상 시 , {const greeting = 값 입력}

// Super Recap
// 아규먼트 삭제 하기
// 함수 형태 지켜주기!!
