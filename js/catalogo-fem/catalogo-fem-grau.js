const card1 = () => {
    const imgPeq1 = document.querySelectorAll(".js-cardGrau-imgP-1");
    const imgGra1 = document.querySelector(".js-cardGrau-imgG-1");
    
    imgPeq1.forEach((img) => {
        img.addEventListener("click", () => {
            imgGra1.src = img.src;
        });
    });
};

const card2 = () => {
    const imgPeq1 = document.querySelectorAll(".js-cardGrau-imgP-2");
    const imgGra1 = document.querySelector(".js-cardGrau-imgG-2");
    
    imgPeq1.forEach((img) => {
        img.addEventListener("click", () => {
            imgGra1.src = img.src;
        });
    });
};


const card3 = () => {
    const imgPeq1 = document.querySelectorAll(".js-cardGrau-imgP-3");
    const imgGra1 = document.querySelector(".js-cardGrau-imgG-3");
    
    imgPeq1.forEach((img) => {
        img.addEventListener("click", () => {
            imgGra1.src = img.src;
        });
    });
};



   


card1();
card2();
card3();