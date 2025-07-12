const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Rock-Climbing-in-Clarks-Canyon-California-US.jpg") {
    myImage.setAttribute("src", "images/skateboard-skateboarder-grind-skateboarding.jpg");
  } else {
    myImage.setAttribute("src", "images/Rock-Climbing-in-Clarks-Canyon-California-US.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `See Climbing, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `See Climbing, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

