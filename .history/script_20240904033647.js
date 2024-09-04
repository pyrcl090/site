let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");
let img7 = document.querySelector(".img7");
let img8 = document.querySelector(".img8");
let img9 = document.querySelector(".img9");
let img10 = document.querySelector(".img10");

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
let section9 = document.querySelector(".section9");
let section10 = document.querySelector(".section10");

img1.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "la braderie";
    imgcaption.innerHTML = "<br>Poster for la braderie (yard sale) at pral.";
});
section1.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "la braderie";
    imgcaption.innerHTML = "<br>Poster for la braderie (yard sale) at pral.";
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
    section9.classList.add("hide"); 
    section10.classList.add("hide");
})

img2.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "rusałka";
    imgcaption.innerHTML = "<br>extreme 38° italic typeface based on polish folklore sirens by the same name.";
});
section2.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "rusałka";
    imgcaption.innerHTML = "<br>extreme 38° italic typeface based on polish folklore sirens by the same name.";
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
    section9.classList.add("hide"); 
    section10.classList.add("hide");
})

img3.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "śledź";
    imgcaption.innerHTML = "<br>branding for polish customizeable tinned herring company śledź.";
});
section3.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "śledź";
    imgcaption.innerHTML = "<br>branding for polish customizeable tinned herring company śledź.";
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
    section9.classList.add("hide"); 
    section10.classList.add("hide");
})

img4.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "pral FW24";
    imgcaption.innerHTML = "<br>merch design and assistant creative direction for pral. <br> Photography by Joaquim bayle + Robin Watine.";
});
section4.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "pral FW24";
    imgcaption.innerHTML = "<br>merch design and assistant creative direction for pral. <br> Photography by Joaquim bayle + Robin Watine.";
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
    section9.classList.add("hide"); 
    section10.classList.add("hide");
})

img5.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "yasashii ";
    imgcaption.innerHTML = "<br>Exhibition design for anagama ceramic pieces made by Clement Bossard during an apprenticeship with Toru Hatta in Japan.";
});
section5.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "yasashii";
    imgcaption.innerHTML = "<br>Exhibition design for anagama ceramic pieces made by Clement Bossard during an apprenticeship with Toru Hatta in Japan.";
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
    section9.classList.add("hide"); 
    section10.classList.add("hide");
})

img6.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "recettes générées";
    imgcaption.innerHTML = "<br>Recipe books are archives of taste, method, and history. With this generative recipe book, these factors become distorted changing the methods and outcomes of the traditional recipe book.";
});
section6.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "recettes générées";
    imgcaption.innerHTML = "<br>Recipe books are archives of taste, method, and history. With this generative recipe book, these factors become distorted changing the methods and outcomes of the traditional recipe book.";
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
    section9.classList.add("hide"); 
    section10.classList.add("hide");
})

img7.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "(e)";
    imgcaption.innerHTML = "";
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
    section9.classList.add("hide"); 
    section10.classList.add("hide");
})

img8.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "perishables";
    imgcaption.innerHTML = "";
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
    section9.classList.add("hide"); 
    section10.classList.add("hide");
})

img9.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "perishables";
    imgcaption.innerHTML = "";
});
img9.addEventListener("click", function(){
    section1.classList.add("hide");
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
    section5.classList.add("hide");
    section6.classList.add("hide");
    section7.classList.add("hide");
    section8.classList.add("hide");
    section9.classList.toggle("hide");
    section9.scrollIntoView({behavior: 'smooth', block: 'start'});  
})

img10.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "GE Employee Handbook";
    imgcaption.innerHTML = "Worked with Hyung Cho, 132 Studio, and <br>Photos courtesy of 132 studio and Hyung cho.";
});
img10.addEventListener("click", function(){
    section1.classList.add("hide");
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
    section5.classList.add("hide");
    section6.classList.add("hide");
    section7.classList.add("hide");
    section8.classList.add("hide");
    section9.classList.add("hide");
    section10.classList.toggle("hide");
    section10.scrollIntoView({behavior: 'smooth', block: 'start'});  
})


