(()=>{"use strict";var e="";const a=e+"3364ec241999219237a3.png",i=e+"3a1d03480647f54f4a53.png",t=e+"c3ca2a7750d96d8951e9.png",n=[{name:"Jennifer",img:a,type:"Dog",breed:"Labrador",description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",age:"2 months",inoculations:["none"],diseases:["none"],parasites:["none"]},{name:"Sophia",img:a,type:"Dog",breed:"Shih tzu",description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",age:"1 month",inoculations:["parvovirus"],diseases:["none"],parasites:["none"]},{name:"Woody",img:i,type:"Dog",breed:"Golden Retriever",description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",age:"3 years 6 months",inoculations:["adenovirus","distemper"],diseases:["right back leg mobility reduced"],parasites:["none"]},{name:"Scarlett",img:i,type:"Dog",breed:"Jack Russell Terrier",description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",age:"3 months",inoculations:["parainfluenza"],diseases:["none"],parasites:["none"]},{name:"Katrine",img:t,type:"Cat",breed:"British Shorthair",description:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",age:"6 months",inoculations:["panleukopenia"],diseases:["none"],parasites:["none"]},{name:"Timmy",img:t,type:"Cat",breed:"British Shorthair",description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",age:"2 years 3 months",inoculations:["calicivirus","viral rhinotracheitis"],diseases:["kidney stones"],parasites:["none"]},{name:"Freddie",img:t,type:"Cat",breed:"British Shorthair",description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",age:"2 months",inoculations:["rabies"],diseases:["none"],parasites:["none"]},{name:"Charly",img:i,type:"Dog",breed:t,description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",age:"8 years",inoculations:["bordetella bronchiseptica","leptospirosis"],diseases:["deafness","blindness"],parasites:["lice","fleas"]}];var o=document.querySelector(".pages"),s=document.querySelector(".slider__button-left"),r=document.querySelector(".slider__button-right"),l=document.querySelector(".courusel"),d=document.querySelector(".slider__cards-left"),c=document.querySelector(".slider__cards-right"),h=document.querySelector(".header__navigation-button"),m=document.querySelector(".header__menu");function u(){l.classList.add("animation-move-left"),s.removeEventListener("click",u),r.removeEventListener("click",y)}function y(){l.classList.add("animation-move-right"),r.removeEventListener("click",y),s.removeEventListener("click",u)}h.addEventListener("click",(function(e){e.stopPropagation(),o.classList.toggle("pages_no-scroll"),m.classList.toggle("header__menu_open"),h.classList.toggle("header__navigation-button-active"),document.addEventListener("click",(function(e){e.target!==e.currentTarget&&(o.classList.remove("pages_no-scroll"),m.classList.remove("header__menu_open"),h.classList.remove("header__navigation-button-active"))}))})),s.addEventListener("click",u),r.addEventListener("click",y),l.addEventListener("animationend",(function(e){var a,i,t,o,h,m=null;if("move-left"===e.animationName){m=d,l.classList.remove("animation-move-left");var g=d.innerHTML;document.querySelector(".slider__cards-center").innerHTML=g}else{m=c,l.classList.remove("animation-move-right");var p=c.innerHTML;document.querySelector(".slider__cards-center").innerHTML=p}m.innerHTML="";for(var v=0;v<3;v++){var f=(a=n,void 0,t=void 0,o=void 0,h=void 0,i=Math.floor(8*Math.random()),o=(t=document.querySelector(".card-template").content.querySelector(".card").cloneNode(!0)).querySelector(".card__image"),h=t.querySelector(".card__title"),o.src=a[i].img,h.textContent=a[i].name,t);m.append(f)}r.addEventListener("click",y),s.addEventListener("click",u)}))})();
//# sourceMappingURL=main.js.map