
const menu = document.querySelector('#menuBar');
const menuLinks = document.querySelector('.dropdown');

    menu.addEventListener('click', function() {
        menu.classList.toggle("fa-xmark");
        // menu.classList.toggle('is-active');
        menu.classList.toggle("fa-bars");
        menuLinks.classList.toggle('active');
    });


let slides = document.getElementsByClassName('carousel-item')

var slideIndex = 1;
slide()
autoSlide()

function autoSlide(){
    setInterval(() => {
        slide(slideIndex)
        slideIndex = (slideIndex + 1) % 6
    }, 5000);   
}

function slide(n) {
    let i;
    
    if (n > slides.length){
      slideIndex = 1;
    }
  
    if (n < 1){
      slideIndex = slides.length
    }
  
    for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none"
    }
    
    slides[slideIndex-1].style.display = 'block'
    
}
  
