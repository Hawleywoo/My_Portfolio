const hamburger = document.querySelector('.hamburger')
const hamburgerOne = document.querySelector('.hamburger__one')
const hamburgerTwo = document.querySelector('.hamburger__two')
const hamburgerThree = document.querySelector('.hamburger__three')
const nav = document.querySelector('.nav')
const navBack = document.querySelector('.nav__background')
const navMenu = document.querySelector('.nav__menu')

hamburger.addEventListener('click', () => {
    hamburgerOne.classList.toggle('hamburger__one--open')
    hamburgerTwo.classList.toggle('hamburger__two--open')
    hamburgerThree.classList.toggle('hamburger__three--open')

    nav.classList.toggle('nav--open')
    navMenu.classList.toggle('nav__menu--open')
    navBack.classList.toggle('nav__background--open')
})