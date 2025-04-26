function cliqueMenu() {
    var itens = document.getElementById('itens')
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function Tamanho() {
    var itens = document.getElementById('itens')
    if (window.innerWidth >= 780) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
    if (itens.style.display == 'none') {
        itens.style.display = 'block'
    }
}