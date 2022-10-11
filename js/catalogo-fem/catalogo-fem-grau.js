const imgPeq = document.querySelectorAll(".js-imgPeq-card1-grau");
const imgGra = document.querySelector(".js-imgGra-card1-grau");

    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            imgGra.src = img.src;
        });
    });