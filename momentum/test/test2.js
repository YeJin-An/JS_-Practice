// Events
// 유저의 행동을 Linsten -> 이벤트(Events) [순서]
const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick() {
  // 1
  // if (h1.style.color === "blue") {
  //   h1.style.color = "lightgreen";
  // } else {
  //   h1.style.color = "hotpink";
  // }

  let newColor;
  const currentColor = h1.style.color;
  if (currentColor === "hotpink") {
    newColor = "lightgreen";
  } else {
    newColor = "hotpink";
  }
  h1.style.color = newColor;
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindowOffice() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// [h1 html element mbn-> javascript elements]
// web api  javascript HTML Heading Element

// More Events

// 1. window
// h1.oneClick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("office", handleWindowOffice);
window.addEventListener("online", handleWindowOnline);
