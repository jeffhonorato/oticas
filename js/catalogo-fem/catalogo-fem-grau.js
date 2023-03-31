const card1 = () => {
    const imgPeq1 = document.querySelectorAll(".js-cardGrau-imgP-1");
    const imgGra1 = document.querySelector(".js-cardGrau-imgG-1");
    
    imgPeq1.forEach((img) => {
        img.addEventListener("click", () => {
            imgGra1.src = img.src;
        });
    });
};



   


card1();