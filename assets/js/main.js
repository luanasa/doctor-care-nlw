window.addEventListener('scroll', onScroll) //correcting scroll error on body

onScroll()
function onScroll() {
   
   showNavOnScroll()
   showBackToTopButtonOnScroll()

}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll') //adding scroll class on html
    } else {
        navigation.classList.remove('scroll') // removing scroll class on html
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 500) {
        backToTopButton.classList.add('show') //adding show class on html
    } else {
        backToTopButton.classList.remove('show') // removing show class on html
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about content');