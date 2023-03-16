const carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = document.querySelectorAll('.carousel-slide-img')


const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImg.length - 1)return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0)return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImg[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if(carouselImg[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});


function showMenu(){
    var x = document.getElementById("nav-menu");
    if(x.className === "nav1"){
        x.className += "responsive";
    }else {
        x.className = "nav1";
    }
}


const menu = document.querySelector('#menuBar');
const menuLinks = document.querySelector('.dropdown');

menu.addEventListener('click', function() {
    menu.classList.toggle("fa-xmark");
    menu.classList.toggle('is-active');
    menu.classList.toggle("fa-bars");
    menuLinks.classList.toggle('active');
});

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.moreHeader').classList.add('fadeinLeft');
        }
    })
})

observer.observe(document.querySelector('.more-wrap'));