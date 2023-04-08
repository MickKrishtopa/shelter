import "../pages/style.css";
import petsList from "../constants/petsList.js";

const sliderButtonLeft = document.querySelector(".slider__button-left");
const sliderButtonRight = document.querySelector(".slider__button-right");
const couruselElement = document.querySelector(".courusel");
const leftCardsElement = document.querySelector(".slider__cards-left");
const rightCardsElement = document.querySelector(".slider__cards-right");

function createCardElement(data) {
  const ind = Math.floor(Math.random() * 12);
  const cardElement = document
    .querySelector(".card-template")
    .content.querySelector(".card")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = data[ind].img;
  cardTitle.textContent = data[ind].name;

  return cardElement;
}

sliderButtonLeft.addEventListener("click", moveLeft);
sliderButtonRight.addEventListener("click", moveRight);

function moveLeft() {
  couruselElement.classList.add("animation-move-left");
  sliderButtonLeft.removeEventListener("click", moveLeft);
  sliderButtonRight.removeEventListener("click", moveRight);
}

function moveRight() {
  couruselElement.classList.add("animation-move-right");
  sliderButtonRight.removeEventListener("click", moveRight);
  sliderButtonLeft.removeEventListener("click", moveLeft);
}

couruselElement.addEventListener("animationend", (animationEvent) => {
  let changedCards = null;
  if (animationEvent.animationName === "move-left") {
    // sliderButtonLeft.addEventListener("click", moveLeft);
    changedCards = leftCardsElement;
    couruselElement.classList.remove("animation-move-left");
    const leftCards = leftCardsElement.innerHTML;
    document.querySelector(".slider__cards-center").innerHTML = leftCards;
  } else {
    // sliderButtonRight.addEventListener("click", moveRight);
    changedCards = rightCardsElement;
    couruselElement.classList.remove("animation-move-right");
    const rightCards = rightCardsElement.innerHTML;
    document.querySelector(".slider__cards-center").innerHTML = rightCards;
  }

  changedCards.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const card = createCardElement(petsList);
    changedCards.append(card);
  }

  sliderButtonRight.addEventListener("click", moveRight);
  sliderButtonLeft.addEventListener("click", moveLeft);
});
