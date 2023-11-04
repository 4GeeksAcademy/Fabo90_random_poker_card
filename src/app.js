import "./style.css";

window.onload = () => {
  document.querySelector(".number").innerHTML = randomNumber();
  document.querySelector(".top").innerHTML = twoIcons;
  document.querySelector(".bottom").innerHTML = twoIcons;
  changeColorTop();
  changeColorBottom();
};

let randomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let index = Math.floor(Math.random() * numbers.length);
  return numbers[index];
};

let randomIcon = () => {
  let icons = ["♦", "♥", "♠", "♣"];
  let index = Math.floor(Math.random() * icons.length);
  return icons[index];
};
let twoIcons = randomIcon();

let changeColorTop = () => {
  if (twoIcons === "♦" || twoIcons === "♥") {
    return (document.querySelector(".top").style.color = "red");
  }
};

let changeColorBottom = () => {
  if (twoIcons === "♦" || twoIcons === "♥") {
    return (document.querySelector(".bottom").style.color = "red");
  }
};
