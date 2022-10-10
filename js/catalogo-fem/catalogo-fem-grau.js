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
        const modalBox1 = document.querySelector(".js-modal");
        modalBox1.classList.add("ativo");
        e.preventDefault();        
    });  

    console.log(btnDetalhesCard1)

    const btnFechar = document.querySelector(".btn-fechar");
    btnFechar.addEventListener("click", (e) => {
        const modalBox1 = document.querySelector(".js-modal");
        modalBox1.classList.remove("ativo");    
    }); 
};


 
modal();    
 