console.log("JS is working");var test="test";console.log("ТЕСТ");import"../pages/style.css";import petsList from"../constants/petsList.js";var PAGE=document.querySelector(".pages"),sliderButtonLeft=document.querySelector(".slider__button-left"),sliderButtonRight=document.querySelector(".slider__button-right"),couruselElement=document.querySelector(".courusel"),leftCardsElement=document.querySelector(".slider__cards-left"),rightCardsElement=document.querySelector(".slider__cards-right"),headerMenuButton=document.querySelector(".header__navigation-button"),burgerMenuElement=document.querySelector(".header__menu");function openHeaderMenu(){PAGE.classList.toggle("pages_no-scroll"),burgerMenuElement.classList.toggle("header__menu_open"),headerMenuButton.classList.toggle("header__navigation-button-active"),document.addEventListener("click",(function(e){e.target!==e.currentTarget&&(PAGE.classList.remove("pages_no-scroll"),burgerMenuElement.classList.remove("header__menu_open"),headerMenuButton.classList.remove("header__navigation-button-active"))}))}function createCardElement(e){var t=Math.floor(8*Math.random()),n=document.querySelector(".card-template").content.querySelector(".card").cloneNode(!0),r=n.querySelector(".card__image"),o=n.querySelector(".card__title");return r.src=e[t].img,o.textContent=e[t].name,n}function moveLeft(){couruselElement.classList.add("animation-move-left"),sliderButtonLeft.removeEventListener("click",moveLeft),sliderButtonRight.removeEventListener("click",moveRight)}function moveRight(){couruselElement.classList.add("animation-move-right"),sliderButtonRight.removeEventListener("click",moveRight),sliderButtonLeft.removeEventListener("click",moveLeft)}console.log(123),headerMenuButton.addEventListener("click",(function(e){e.stopPropagation(),openHeaderMenu()})),sliderButtonLeft.addEventListener("click",moveLeft),sliderButtonRight.addEventListener("click",moveRight),couruselElement.addEventListener("animationend",(function(e){var t=null;if("move-left"===e.animationName){t=leftCardsElement,couruselElement.classList.remove("animation-move-left");var n=leftCardsElement.innerHTML;document.querySelector(".slider__cards-center").innerHTML=n}else{t=rightCardsElement,couruselElement.classList.remove("animation-move-right");var r=rightCardsElement.innerHTML;document.querySelector(".slider__cards-center").innerHTML=r}t.innerHTML="";for(var o=0;o<3;o++){var i=createCardElement(petsList);t.append(i)}sliderButtonRight.addEventListener("click",moveRight),sliderButtonLeft.addEventListener("click",moveLeft)}));export default test;