const btn = document.querySelector(".menu__btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  console.log(btn.className === "menu__btn active");
  if (btn.className === "menu__btn active") {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "visible"
  }
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".hero .swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".hero .swiper-button-next",
    prevEl: ".hero .swiper-button-prev",
  },
});

const actual__swiper = new Swiper(".actual__swiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,

  navigation: {
    nextEl: ".actual__swiper-button-next",
    prevEl: ".actual__swiper-button-prev",
  },
});

// const div = document.querySelector(".actual__toggle");
// const h2 = document.querySelector(".actual__title");
// const h3 = document.querySelector(".actual__titlem");



// div.addEventListener("click", () => {
//   div.classList.toggle("active");
//   h2.classList.toggle('active');
//   h3.classList.toggle('active');
// });

const actualTitle = document.querySelectorAll(".actual__title");
const toggler = document.querySelector(".actual__toggle");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active")
  for(let i = 0; i < actualTitle.length; i++) {
    if(actualTitle[i].className.includes("active")) {
      actualTitle[i].classList.remove("active")
    } else {
      actualTitle[i].classList.add("active")
    }
  }
});
