const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

// Inervals
// setInterval(sayHello, 5000); //긴갹미디 호출

// Timeouts and Dates
// const date = new Date();
// clock.innerText = `${date.getHours():${date.getMinutes()}:${date.getSeconds }}`
// setTimeout(sayHello, 5000); // 한번만 호출

// PadStart
// "1".padStart(2,"0");
// "1".padEnd(1,"0");
// const hours = String(date.getHours()).padStart(2,"0");
// clock.inerText = `${hours}:${minutes}:${seconds}`;

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 1
getClock();
setInterval(getClock, 1000);
