let heading = document.querySelector('#heading');                                     //get heading, visible when site load
let shortHeading = document.querySelector('#short-heading');                          //get short heading, visible on scrool
let nav = document.querySelector('header nav');                                       //get nav-bar
let body = document.querySelector('main');                                            //get main

window.addEventListener("scroll", () => {                                             //events on scroll
  if(window.innerWidth >= 1300){
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
      heading.classList.add('none');                                                  //big heading dissapears, short heading apears
      shortHeading.classList.remove('none');
      nav.style.padding = '0%';
      body.style.marginTop = '15%'
  } 
  else {
      heading.classList.remove('none');
      shortHeading.classList.add('none');
      nav.style.padding= '3%';
      body.style.marginTop = '24%'
  }
  } else if(window.innerWidth > 1001){
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        heading.classList.add('none');
        shortHeading.classList.remove('none');
        nav.style.padding = '0%';
        body.style.marginTop = '15%'
    } 
    else {
        heading.classList.remove('none');
        shortHeading.classList.add('none');
        nav.style.padding= '3%';
        body.style.marginTop = '30%'
    }
  }
});

let slideIndex = 0;                                                  //images slideshow, every appears 3s
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); 
}
