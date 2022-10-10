const modal = () => {

    const imgPeq = document.querySelectorAll(".js-imgPeq-card1-grau");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card1-grau");
            imgGra.src = img.src;
        });
    });

    const btnDetalhesCard1 = document.querySelector(".js-btn-card1-grauFem");
        btnDetalhesCard1.addEventListener("click", (e) => {
            const modalBox = document.querySelector(".js-modal");
            modalBox.classList.add("ativo");
            e.preventDefault();
        });  
    };


modal();    