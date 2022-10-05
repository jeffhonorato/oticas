let tempo = 4000;
let imagemIndex = 0;
let imagens = document.querySelectorAll(".banner__img");
let maxImagens = imagens.length;

function nextImagem() {


    imagens[imagemIndex].classList.remove("selected");

    imagemIndex++;

    if(imagemIndex >= maxImagens) {
        imagemIndex = 0;
    }

    imagens[imagemIndex].classList.add("selected");
}


function start() {
    setInterval(() => {
        // Troca de imagem
        nextImagem();
    }, tempo);
};


window.addEventListener("load", start);