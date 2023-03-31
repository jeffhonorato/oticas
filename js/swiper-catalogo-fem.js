var swiper = new Swiper(".oculos-fem-grau", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "4",
    loop: "true",
    coverflowEffect: {
      rotate: 5,
      stretch: 1,
      depth: 90,
      modifier: 5,
      slideShadows: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });