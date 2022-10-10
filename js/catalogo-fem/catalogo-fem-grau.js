const imgPeq = document.querySelectorAll(".js-imgPeq-card1-grau");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card1-grau");
            imgGra.src = img.src;
        })
    })

