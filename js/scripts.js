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

// Toggle the navbar on menu icon click
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the 'active' class
});

// Change navbar color on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled'); // Add class on scroll
    } else {
        header.classList.remove('header-scrolled'); // Remove class when back at top
    }
});
