//--LEFT NAVBAR CONTENTS
const LEFT_NAVBAR_CONTENTS = [
  "HOME",
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "SQL",
  "PYTHON",
  "JAVA",
  "PHP",
  "C++",
  "C#",
  "REACT",
];
const LEFT_NAVBAR_ICONS = [
  "./src/icons/home.png",
  "./src/icons/html.png",
  "./src/icons/css.png",
  "./src/icons/js.png",
  "./src/icons/sql.png",
  "./src/icons/python.png",
  "./src/icons/java.png",
  "./src/icons/php.png",
  "./src/icons/c++.png",
  "./src/icons/cSharp.png",
  "./src/icons/react.png",
];
let navbarContainer = document.querySelector(".navbarContainer");
for (let i = 0; i < LEFT_NAVBAR_CONTENTS.length; i++) {
  let li = document.createElement("li");
  let label = document.createElement("div");
  let img = document.createElement("img");
  li.setAttribute("class", "leftNavbarContents");
  label.innerText = LEFT_NAVBAR_CONTENTS[i];
  label.setAttribute("class", "label");
  img.setAttribute("src", LEFT_NAVBAR_ICONS[i]);
  navbarContainer.append(li);
  li.append(label);
  li.append(img);
}

//--TOOGLE LEFT NAVBAR CONTENTS
let leftNavbarContents = document.querySelectorAll(".leftNavbarContents");
leftNavbarContents[0].classList.add("activeContent");
for (let i = 0; i < leftNavbarContents.length; i++) {
  leftNavbarContents[i].addEventListener("click", () => {
    for (let j = 0; j < leftNavbarContents.length; j++) {
      leftNavbarContents[j].classList.remove("activeContent");
    }
    leftNavbarContents[i].classList.add("activeContent");
  });
}
