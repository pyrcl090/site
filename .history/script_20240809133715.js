let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");
let img7 = document.querySelector(".img7");
let img8 = document.querySelector(".img8");

let imgtxt = document.querySelector("#img_text");
let imgcaption = document.querySelector("#img_caption");
let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
let section3 = document.querySelector(".section3");
let section4 = document.querySelector(".section4");
let section5 = document.querySelector(".section5");
let section6 = document.querySelector(".section6");
let section7 = document.querySelector(".section7");
let section8 = document.querySelector(".section8");

img1.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "la braderie (POSTER)";
    imgcaption.innerHTML = "<br><br>Poster for la braderie (yard sale) at pral. ";
});
section1.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "la braderie (POSTER)";
    imgcaption.innerHTML = "<br><br>Poster for la braderie at pral in collaboration with Ticket d'Entrée. ";
});

img1.addEventListener("click", function(){
    section1.classList.toggle("hide");  
    section1.scrollIntoView({behavior: 'smooth', block: 'start' });  
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
    section5.classList.add("hide");
    section6.classList.add("hide");
    section7.classList.add("hide");
    section8.classList.add("hide");

    

})

img2.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "rusałka (TYPEFACE)";
    imgcaption.innerHTML = "<br><br>extreme 38° italic typeface based on polish folklore sirens by the same name";
});
section2.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "rusałka (TYPEFACE)";
    imgcaption.innerHTML = "<br><br>extreme 38° italic typeface based on polish folklore sirens by the same name";
});
img2.addEventListener("click", function(){
    section1.classList.add("hide");
    section2.classList.toggle("hide");
    section2.scrollIntoView({behavior: 'smooth', block: 'start'}); 
    section3.classList.add("hide");
    section4.classList.add("hide");
    section5.classList.add("hide");
    section6.classList.add("hide");
    section7.classList.add("hide");
    section8.classList.add("hide");
})

img3.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "śledź (BRANDING)";
    imgcaption.innerHTML = "<br><br>branding for polish customizeable tinned herring company śledź.";
});
section3.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "śledź (BRANDING)";
    imgcaption.innerHTML = "<br><br>branding for polish customizeable tinned herring company śledź.";
});
img3.addEventListener("click", function(){
    section1.classList.add("hide");
    section2.classList.add("hide");
    section3.classList.toggle("hide");
    section3.scrollIntoView({behavior: 'smooth', block: 'start'});  
    section4.classList.add("hide");
    section5.classList.add("hide");
    section6.classList.add("hide");
    section7.classList.add("hide");
    section8.classList.add("hide");
})

img4.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "pral (FW24)";
    imgcaption.innerHTML = "<br><br>merch design for pral <br> Photography: Joaquim bayle + Robin Watine";
});
section4.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "pral (FW24)";
    imgcaption.innerHTML = "<br><br>merch design for pral <br> Photography: Joaquim bayle + Robin Watine";
});
img4.addEventListener("click", function(){
    section1.classList.add("hide");
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.toggle("hide");
    section4.scrollIntoView({behavior: 'smooth', block: 'start'});  
    section5.classList.add("hide");
    section6.classList.add("hide");
    section7.classList.add("hide");
    section8.classList.add("hide");
})

img5.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "yasashii (EXHIBITION)";
    imgcaption.innerHTML = "<br><br>Exhibition design of 30 anagama ceramic pieces made by Clement Bossard during an apprenticeship with Toru Hatta in Japan.";
});
section5.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "yasashii (EXHIBITION)";
    imgcaption.innerHTML = "<br><br>Exhibition design of 30 anagama ceramic pieces made by Clement Bossard during an apprenticeship with Toru Hatta in Japan.";
});
img5.addEventListener("click", function(){
    section1.classList.add("hide");
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
    section5.classList.toggle("hide");
    section5.scrollIntoView({behavior: 'smooth', block: 'start'});  
    section6.classList.add("hide");
    section7.classList.add("hide");
    section8.classList.add("hide");
})

img6.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "recettes générées (BOOK)";
    imgcaption.innerHTML = "<br><br>merch design for pral";
});
section6.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "recettes générées (BOOK)";
    imgcaption.innerHTML = "<br><br>merch design for pral";
});
img6.addEventListener("click", function(){
    section1.classList.add("hide");
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
    section5.classList.add("hide");
    section6.classList.toggle("hide");
    section6.scrollIntoView({behavior: 'smooth', block: 'start'});  
    section7.classList.add("hide");
    section8.classList.add("hide");
})

img7.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "(e)3 (BOOKS)";
});
img7.addEventListener("click", function(){
    section1.classList.add("hide");
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
    section5.classList.add("hide");
    section6.classList.add("hide");
    section7.classList.toggle("hide");
    section7.scrollIntoView({behavior: 'smooth', block: 'start'});  
    section8.classList.add("hide");
})

img8.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "perishables (BOOK)";
});
img8.addEventListener("click", function(){
    section1.classList.add("hide");
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
    section5.classList.add("hide");
    section6.classList.add("hide");
    section7.classList.add("hide");
    section8.classList.toggle("hide");
    section8.scrollIntoView({behavior: 'smooth', block: 'start'});  
})


