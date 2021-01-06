const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})


closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

gsap.from('.nav_logo, .nav_toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav_item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

gsap.from('.home_title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home_description', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home_button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.home_img', {opacity: 0, duration: 1, delay:1.3, y: 30})