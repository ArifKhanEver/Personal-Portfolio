const btn = document.querySelector(".hamburger");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const ovrly = document.querySelector(".lorem");
const mobile = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const header = document.querySelector('header')
const hero = document.querySelector('.hero__section')
const about = document.querySelector('.about')
const services = document.querySelector('.services')
const scrol = document.querySelector('.scroll__section')
const skills = document.querySelector('.skills')
const projects = document.querySelector('.projects')
const contacts = document.querySelector('.contact')
const toggle = document.querySelector('.toggle')
const round = document.querySelector('.round')
const circle = document.querySelector('.circle')
const sunMoon = document.querySelectorAll('.sunMoon')
const ul = document.querySelector('#menu')

const allIDs = [circle, round, header, ul, body, hero, scrol, about, services, skills, projects, contact]

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
        // circle.classList.remove('active')
        // round.classList.remove('active')
        // header.classList.remove('active')
        // ul.classList.remove('active')
        // body.classList.remove('active')
        // hero.classList.remove('active')
        // scrol.classList.remove('active')
        // about.classList.remove('active')
        // services.classList.remove('active')
        sunMoon.forEach(e=> e.classList.remove('active'))
        allIDs.forEach(e => e.classList.remove('active'))
    }else {
        // circle.classList.add('active')
        // round.classList.add('active')
        // header.classList.add('active')
        // ul.classList.add('active')
        // body.classList.add('active')
        // hero.classList.add('active')
        // scrol.classList.add('active')
        // about.classList.add('active')
        // services.classList.add('active')
        sunMoon.forEach(e=> e.classList.add('active'))
        allIDs.forEach(e => e.classList.add('active'))

    }

    // if(true) {
    //     sunMoon.forEach(e=> {
    //         if (e.classList.contains('inactive')) {
    //             e.classList.remove('inactive')
    //         }else{
    //             e.classList.add('inactive')
    //         }
    //     })
    // }
})