const burgerMenu = document.getElementsByClassName('burger-menu-icon')[0];
const navList = document.getElementsByClassName('header-nav')[0];
const logo = document.getElementsByClassName('left-side')[0];


burgerMenu.addEventListener('click', () => {
    navList.classList.add('active');
    logo.classList.add('inactive');
});

