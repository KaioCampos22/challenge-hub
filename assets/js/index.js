
const menu = document.querySelector('nav')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')

menuIcon.addEventListener('click', () => {
    menu.classList.add('active');

})
closeIcon.addEventListener('click', () => {
    menu.classList.remove('active');
})
const btnMobile = document.getElementById('btn-mobile')
const bt1 = document.querySelector('.bt1')
const bt2 = document.querySelector('.bt2')
function toggleMenu(e) {
    if (e.type === 'touchstart') e.preventDefault()
    const nav = document.getElementById('nav-bar')
    nav.classList.toggle('active');
    const buttons = document.querySelector('.buttons')
    buttons.classList.toggle('active');
    const active = nav.classList.contains('active')
    e.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
        e.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        e.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
