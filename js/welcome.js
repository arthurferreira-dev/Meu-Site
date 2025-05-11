function Name() {
    let txt = document.getElementById('title')
    let name = prompt('Olá, qual é seu nome?')

    txt.style.textAlign = 'center'
    txt.style.marginTop = '6px'
    txt.style.marginBottom = '6px'

    if (name == '') { //Sem Nome
        txt.innerHTML = `Olá convidado, seja bem-vindo.`
    } else if (name == 'Multgames' || name == 'Multhingss') { //Nome Multhingss
        txt.innerHTML = `Olá Multhingss, tudo certo?`
    } else { //Nome Padrão
        txt.innerHTML = `Olá ${name}, seja bem-vindo(a).`
    }
}