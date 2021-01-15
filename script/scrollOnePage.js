// scroll suave feito com JS puro
const menuItems = document.querySelectorAll('nav a[href^="#"]') // apenas as referencias que comecam com #

menuItems.forEach(item => {
    item.addEventListener('click', scrollToId)
})

function scrollToId (event) {
    event.preventDefault()
    const to = getScroll(event.target)
    scrollToPosition(to)
}

function scrollToPosition (to) {
    window.scroll({
        top: to,
        behavior: "smooth", // so funciona em alguns browsers
    })
}

function getScroll (element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}