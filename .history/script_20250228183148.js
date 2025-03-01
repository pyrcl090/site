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
let img11 = document.querySelector(".img11");
let img12 = document.querySelector(".img12");


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
let section11 = document.querySelector(".section11");
let section12 = document.querySelector(".section12");


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
    section11.classList.add("hide");
    section12.classList.add("hide"); 


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
    section11.classList.add("hide");
    section12.classList.add("hide"); 

})

img3.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "śledź";
    imgcaption.innerHTML = "<br>branding for polish customizeable tinned herring company.";
});
section3.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "śledź";
    imgcaption.innerHTML = "<br>branding for polish customizeable tinned herring company.";
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
    section11.classList.add("hide");
    section12.classList.add("hide"); 

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
    section11.classList.add("hide");
    section12.classList.add("hide"); 

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
    section11.classList.add("hide");
    section12.classList.add("hide"); 

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
    section11.classList.add("hide");
    section12.classList.add("hide");  

})

img7.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "project (e)";
    imgcaption.innerHTML = "<br>Asks participants to analyze examples of conservation-destruction relationships. A bilingual and biannual subscription delivered through a series of screenings accompanied by printed books, (e) utilizes the visual language of the tools it critiques.";
});

section7.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "project (e)";
    imgcaption.innerHTML = "<br>Asks participants to analyze examples of conservation-destruction relationships. A bilingual and biannual subscription delivered through a series of screenings accompanied by printed books, (e) utilizes the visual language of the tools it critiques.";
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
    section11.classList.add("hide");
    section12.classList.add("hide");  

})

img8.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "perishables";
    imgcaption.innerHTML = "<br>Is a book exploring bit rot and digital decay.";
});
section8.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "perishables";
    imgcaption.innerHTML = "<br>Is a book exploring bit rot and digital decay.";
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
    section11.classList.add("hide");
    section12.classList.add("hide"); 

})

img9.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "Phase 0 Issue 8";
    imgcaption.innerHTML = "<br>Phase Zero Issue 8 Launch flyer.";
});
section9.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "Phase 0 Issue 8";
    imgcaption.innerHTML = "<br>Phase Zero Issue 8 Launch flyer.";
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
    img9.scrollIntoView({behavior: 'smooth', block: 'start'});  
    section10.classList.add("hide");
    section11.classList.add("hide");
    section12.classList.add("hide"); 
})

img10.addEventListener("mouseover", function(){
    imgtxt.innerHTML = '<a href="https://alixpresents.com" target="_blank">alixpresents.com</a>';
    imgcaption.innerHTML = "<br>Phase Zero Issue 8 Launch flyer.";
});
section10.addEventListener("mouseover", function(){
    imgtxt.innerHTML = '<a href="https://alixpresents.com" target="_blank">alixpresents.com</a>';
    imgcaption.innerHTML = "<br>Phase Zero Issue 8 Launch flyer.";
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
    img10.scrollIntoView({behavior: 'smooth', block: 'start'}); 
    section11.classList.add("hide");
    section12.classList.add("hide"); 
})

img11.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "Phase 0 Issue 8";
    imgcaption.innerHTML = "<br>Phase Zero Issue 8 Launch flyer.";
});
section11.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "Phase 0 Issue 8";
    imgcaption.innerHTML = "<br>Phase Zero Issue 8 Launch flyer.";
});
img11.addEventListener("click", function(){
    section1.classList.add("hide");
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
    section5.classList.add("hide");
    section6.classList.add("hide");
    section7.classList.add("hide");
    section8.classList.add("hide");
    section9.classList.add("hide");
    section10.classList.add("hide");
    img11.scrollIntoView({behavior: 'smooth', block: 'start'}); 
    section12.classList.add("hide"); 
})

img12.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "Phase 0 Issue 8";
    imgcaption.innerHTML = "<br>Phase Zero Issue 8 Launch flyer.";
});
section12.addEventListener("mouseover", function(){
    imgtxt.innerHTML = "Phase 0 Issue 8";
    imgcaption.innerHTML = "<br>Phase Zero Issue 8 Launch flyer.";
});
img12.addEventListener("click", function(){
    section1.classList.add("hide");
    section2.classList.add("hide");
    section3.classList.add("hide");
    section4.classList.add("hide");
    section5.classList.add("hide");
    section6.classList.add("hide");
    section7.classList.add("hide");
    section8.classList.add("hide");
    section9.classList.add("hide");
    section10.classList.add("hide");
    section11.classList.add("hide");
    img12.scrollIntoView({behavior: 'smooth', block: 'start'}); 
})


