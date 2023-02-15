const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const result = document.querySelector("h1");
const spin = document.querySelector(".spin");

spin.addEventListener("click", function () {
  window.location.reload();
});

document.addEventListener("DOMContentLoaded", showCard);

let imageArrays = [
  "./Images/dice1.png",
  "./Images/dice2.png",
  "./Images/dice3.png",
  "./Images/dice4.png",
  "./Images/dice5.png",
];

function showCard() {
  let randomNumber1 = Math.floor(Math.random() * imageArrays.length);
  let imageIndex1 = imageArrays[randomNumber1];
  image1.src = imageIndex1;
  image1.classList.add("animate");

  let randomNumber2 = Math.floor(Math.random() * imageArrays.length);
  let imageIndex2 = imageArrays[randomNumber2];

  image2.classList.add("animate");
  image2.src = imageIndex2;

  result.classList.add("display-text");

  if (imageIndex1 > imageIndex2) {
    result.innerText = "Player1 Wins!";
  } else if (imageIndex1 < imageIndex2) {
    result.innerText = "Player2 Wins!";
  } else {
    result.innerText = "It's a tie!";
  }
}
