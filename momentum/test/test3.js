// CSS in Javascript part Three

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // 1
  // if (h1.className === "active") {
  //   h1.className = "";
  // } else {
  //   h1.className = "active";
  // }

  // 2
  // const clickedClass = "clicked";
  // if (h1.className === clickedClass) {
  //   h1.className = "";
  // } else {
  //   h1.className = clickedClass;
  // }

  // 3 toggle
  // const clickedClass = "clicked";
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }

  // 4
  h1.classList.toggle("clicked");
}

h1, addEventListener("click", handleTitleClick);
