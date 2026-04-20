const burgerBtn = document.getElementById('burger-button');
const closeBtn = document.getElementById('close-button');
const mobileNav = document.querySelector('.mobile-burger-nav');

burgerBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.classList.add('menu-open');
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    document.body.classList.remove('menu-open');
});