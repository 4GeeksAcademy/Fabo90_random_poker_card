import "./style.css";

window.onload = () => {
  const number = document.querySelector("#number");
  const topSuit = document.querySelector("#top");
  const bottomSuit = document.querySelector("#bottom");
  const CardBtn = document.querySelector("#button1");
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
    if (index === 0 || index === 1) {
      topSuit.style.color = "red";
      bottomSuit.style.color = "red";
      return icons[index];
    } else if (index === 2 || index === 3) {
      topSuit.style.color = "black";
      bottomSuit.style.color = "black";
      return icons[index];
    }
  };
  let twoIcons = randomIcon();
  number.innerHTML = randomNumber();
  topSuit.innerHTML = twoIcons;
  bottomSuit.innerHTML = twoIcons;
  CardBtn.addEventListener("click", () => {
    twoIcons = randomIcon();
    number.innerHTML = randomNumber();
    topSuit.innerHTML = twoIcons;
    bottomSuit.innerHTML = twoIcons;
  });
  setInterval(() => {
    twoIcons = randomIcon();
    number.innerHTML = randomNumber();
    topSuit.innerHTML = twoIcons;
    bottomSuit.innerHTML = twoIcons;
  }, 4000);
};
