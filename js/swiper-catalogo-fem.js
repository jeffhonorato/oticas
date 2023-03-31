var swiper = new Swiper(".oculos-fem-grau", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    loop: "false",
    coverflowEffect: {
      rotate: 50,
      stretch: 1,
      depth: 100,
      modifier: 1,
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