const modalCard1 = () => {

    const imgPeq = document.querySelectorAll(".js-imgPeq-card1-grau");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card1-grau");
            imgGra.src = img.src;
        });
    });


    const btnDetalhesCard1 = document.querySelector(".js-btn-detalhes-card1");
    const modalCard1 = document.querySelector(".modal__card--grau"); 
        btnDetalhesCard1.addEventListener("click", () => {
        modalCard1.classList.add("ativo");
           
        });

        console.log(btnDetalhesCard1)
        console.log(modalCard1)

       
};

   


modalCard1();