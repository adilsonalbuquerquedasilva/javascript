
function verificar(){
    const agora = new Date()
    const ano = agora.getFullYear()
    const msg = document.getElementById('mensagem')
    const fano = document.getElementById('txtano')
    const fsexo = document.getElementsByName('sexo')
    const idade = ano - Number(fano.value)
    const img = document.createElement('img')
    img.setAttribute('id', 'foto')
    let genero = ""

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Digite um ano valido')
    } else if (fsexo[0].checked) {
        genero = "Homem"
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'imagens/criançaM.png')
        } else if(idade < 21){
            img.setAttribute('src', 'imagens/jovemM.png')
        } else if (idade < 50){
            img.setAttribute('src', 'imagens/adultoM.png')
        } else {
            img.setAttribute('src', 'imagens/idosoM.png')
        }
    } else if (fsexo[1].checked){
        genero = "Mulher"
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'imagens/criançaF.png')
        } else if(idade < 21){
            img.setAttribute('src', 'imagens/jovemF.png')
        } else if (idade < 50){
            img.setAttribute('src', 'imagens/adultoF.png')
        } else {
            img.setAttribute('src', 'imagens/idosoF.png')
        }
    }
    msg.innerHTML = `Detectamos ${genero} com ${idade} anos`
    msg.appendChild(img)
}