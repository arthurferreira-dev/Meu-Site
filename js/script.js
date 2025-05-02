function cliqueMenu() {
    var itens = document.getElementById('itens')
    var icon = document.getElementById('menu-burger')

    if (itens.style.display == 'block') {
        itens.style.display = 'none'
        icon.className = 'fa-solid fa-bars'
    } else {
        itens.style.display = 'block'
        icon.className = 'fa-solid fa-xmark'
    }
}

function Tamanho() {
    var itens = document.getElementById('itens')
    if (window.innerWidth >= 760) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
    if (itens.style.display == 'none') {
        itens.style.display = 'block'
    }
}