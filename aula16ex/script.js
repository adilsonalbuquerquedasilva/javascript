const num = document.getElementById('inum');
const lista = document.getElementById('listaform');
const res = document.getElementById('res');
let valores = [];
    
function isnumber(n){
    if (Number(n) <= 100 && Number(n) >= 1){
        return true
    } else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
         return true
    } else{
        return false
    }
}

function adicionar(){
    if(isnumber(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Digite um número ente 1 e 100')
    }
    num.value = ''
    num.focus()    
}

function finalizar(){
    let maior = valores[0]
    let menor = valores[0]
    let tot = valores.length
    let soma = 0
    let media = 0
    for (let i in valores){
        soma += valores[i]
        if(valores[i] > maior){
            maior = valores[i]
        }
        if(valores[i] < menor){
            menor = valores[i]
        }
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Total de números inseridos ${tot}</p>`
    res.innerHTML += `<p>O maior valor é ${maior}</p>`
    res.innerHTML += `<p>O menor valor é ${menor}</p>`
    res.innerHTML += `<p>A soma é ${soma}</p>`
    res.innerHTML += `<p>A media é ${media}</p>`
}