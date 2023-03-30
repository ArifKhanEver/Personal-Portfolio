const slidesContainer = document.querySelector('.slides-container');
const slidesSection = document.querySelector('.slides');
const lengthOfSlides = document.querySelectorAll('.slide').length /2;
const prevBtn = document.querySelector('.button-prev');
const nextBtn = document.querySelector('.button-next');

let slideWidth = slidesSection.offsetWidth + 32;
let currentSlide = 0;

function moveToSlide(slideIndex) {
    slidesSection.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    currentSlide = slideIndex;

    if(currentSlide === 0) {
        prevBtn.style.backgroundColor = "hsl(214, 100%, 65%)"
    }
    else if(currentSlide === lengthOfSlides-1) {
        nextBtn.style.backgroundColor = "hsl(214, 100%, 65%)"
        
    }
    else {
        nextBtn.style.backgroundColor = "hsl(214, 97%, 58%)"
        prevBtn.style.backgroundColor = "hsl(214, 97%, 58%)"
    }
}

prevBtn.addEventListener('click', ()=> {
    if(currentSlide === 0) {
        return
    }
    else {
        moveToSlide(currentSlide -1)
        console.log(currentSlide)

    }
})

nextBtn.addEventListener('click', ()=> {
    if(currentSlide === lengthOfSlides-1) {
        return
    }
    else {
        moveToSlide(currentSlide + 1)
        console.log(currentSlide)

    }
})


