function Name() {
    let txt = document.getElementById('title')
    let btn = document.getElementById('name-btn')
    let name = prompt('Olá, qual é seu nome?')

    btn.style.display = 'block'
    txt.style.textAlign = 'center'
    txt.style.marginTop = '6px'
    txt.style.marginBottom = '6px'

    if (name == '') { //Sem Nome
        txt.innerHTML = `Olá convidado, seja bem-vindo.`
        btn.style.display = 'none'
    } else if (name == 'Multgames' || name == 'Multhingss') { //Nome Multhingss
        txt.innerHTML = `Olá Multhingss, tudo certo?`
        btn.style.display = 'none'
    } else { //Nome Padrão
        txt.innerHTML = `Olá ${name}, seja bem-vindo(a).`
        btn.style.display = 'none'
    }
}