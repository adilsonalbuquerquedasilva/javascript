function carregar(){
    const msg = document.getElementById('mensagem')
    const img = document.getElementById('imagem')
    const agora = new Date()
    const hora = agora.getHours()

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia, agora são ${hora} horas.`
        img.src = 'imagens/dia.png'
        document.body.style.background = '#e2cdf9'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} horas.`
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} horas.`
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
    }
}