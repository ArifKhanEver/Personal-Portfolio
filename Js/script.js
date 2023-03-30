const btn = document.querySelector(".hamburger");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const ovrly = document.querySelector(".lorem");
const mobile = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const header = document.querySelector('header')
const hero = document.querySelector('.hero__section')
const btnResume = document.querySelector ('.buttonR')
const about = document.querySelector('.about')
const testimonial = document.querySelector('.testimonial')
const scrol = document.querySelector('.scroll__section')
const projects = document.querySelector('.projects')
const contacts = document.querySelector('.contact')
const toggle = document.querySelector('.toggle')
const round = document.querySelector('.round')
const circle = document.querySelector('.circle')
const sunMoon = document.querySelectorAll('.sunMoon')
const ul = document.querySelector('#menu')
const svgCircle = document.querySelectorAll('circle')

const allIDs = [circle, round, header, ul, body, hero, btnResume, scrol, about, testimonial, projects, contacts]

btn.addEventListener('click', function() {
    if(open.classList.contains("close")) {
        open.classList.remove("close")
        close.classList.add("close");
        ovrly.classList.remove("overlay");
        mobile.classList.add("close");
        body.classList.remove("noScroll");
    } else {
        open.classList.add("close");
        close.classList.remove("close");
        ovrly.classList.add("overlay");
        mobile.classList.remove("close");
        body.classList.add("noScroll");
    }
});

toggle.addEventListener('click',()=> {
    if(circle.classList.contains('active')) {
        sunMoon.forEach(e => e.classList.remove('active'))
        allIDs.forEach(e => e.classList.remove('active'))
        svgCircle.forEach( e=> e.style.fill = "black" )
    }else {
        sunMoon.forEach(e => e.classList.add('active'))
        allIDs.forEach(e => e.classList.add('active'))
        svgCircle.forEach( e=> e.style.fill = "white" )
    }
})


// Collapse Button

var imageCollapsibles = document.querySelectorAll('.image-collapsible');

for (var i = 0; i < imageCollapsibles.length; i++) {
    var images = imageCollapsibles[i].querySelectorAll('.image a');
    var seeMoreLink = imageCollapsibles[i].querySelector('.see-more');
    var arrow = imageCollapsibles[i].querySelector('.see-more svg');
    var numVisible = 6; // adjust this number to show more or fewer images by default
    //hiding extra images
    for(var j = numVisible; j < images.length; j++) {
        images[j].classList.add('hidden')
    }
    
    seeMoreLink.addEventListener('click', function(e){
        e.preventDefault();

        if(this.classList.contains('collapsed')) {
            this.querySelector('span').innerHTML = 'See more';
            this.classList.remove('collapsed');
            arrow.classList.remove('rotate')
            // show all images
            for(var j = numVisible; j < images.length; j++) {
                images[j].classList.add('hidden')
            }
        } else {
            this.querySelector('span').innerHTML = "See less";
            this.classList.add('collapsed')
            arrow.classList.add('rotate')
            // hiding extra images
            for(var j = numVisible; j < images.length; j++){
                images[j].classList.remove('hidden')
            }
        }
    });
}


// location Map

function toggleMap() {
    var mapDiv = document.querySelector('#map');
    mapDiv.style.display = (mapDiv.style.display == 'none')? "block" : "none";
}

function closeMap() {
    var mapDiv = document.querySelector('#map').style.display= "none";
}
