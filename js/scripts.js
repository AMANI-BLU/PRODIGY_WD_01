var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled'); 
    } else {
        header.classList.remove('header-scrolled'); 
    }
});


    const navLinks = document.querySelectorAll('.navbar a');
    const footerLinks = document.querySelectorAll('.footer-links a');

    function setActiveLink(link) {
        navLinks.forEach(link => link.classList.remove('active')); 
        footerLinks.forEach(link => link.classList.remove('active')); 
        link.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            setActiveLink(this);
        });
    });

