const modal = () => {

    const imgPeq = document.querySelectorAll(".js-imgPeq-card1-grau");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card1-grau");
            imgGra.src = img.src;
        });
    });

    const btnDetalhesCard1 = document.querySelector(".js-btn-card1-grauFem");
    const modalBox1 = document.querySelector(".js-modal");
    btnDetalhesCard1.addEventListener("click", (e) => {
        modalBox1.classList.add("ativo");
        e.preventDefault();

        
    });  

    console.log(modalBox1);

    // const btnFechar = document.querySelector(".btn-fechar");
    // btnFechar.addEventListener("click", (e) => {
    //     const modalBox1 = document.querySelector(".js-modal");
    //     modalBox1.classList.remove("ativo");
    //     console.log(modalBox1);
        
    // }); 

    
    
   
};

const modal2 = () => {

    const imgPeq = document.querySelectorAll(".js-imgPeq-card2-grau");
    imgPeq.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGra = document.querySelector(".js-imgGra-card2-grau");
            imgGra.src = img.src;
        });
    });

    const btnDetalhesCard2 = document.querySelector(".js-btn-card2-grauFem");
    
    btnDetalhesCard2.addEventListener("click", (e) => {
        const modalBox2 = document.querySelector(".js-modal-2");
        modalBox2.classList.add("ativo");
        e.preventDefault();

        
    });  

    console.log(modalBox1);

    // const btnFechar = document.querySelector(".btn-fechar");
    // btnFechar.addEventListener("click", (e) => {
    //     const modalBox1 = document.querySelector(".js-modal");
    //     modalBox1.classList.remove("ativo");
    //     console.log(modalBox1);
        
    // }); 

    
    
   
};

 
modal();    
modal2();    