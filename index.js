document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector('#hamburger');
    const menuCloseButton = document.querySelector('#menuClose')
    const menu = document.querySelector('.slideOutNav');

    hamburgerButton.addEventListener('click', (e) => {
        menu.classList.add('open');
    });
    menuCloseButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    });
})

const clickArrow = document.querySelector('.downArrow')
const linkClick = document.querySelectorAll('a')
const unfold = document.querySelector('.folder')

clickArrow.addEventListener('click', (e) => {
    unfold.classList.add('unfold');
})
linkClick.forEach(item => {
    item.addEventListener('click', event => {
        unfold.classList.add('unfold');
    })
})