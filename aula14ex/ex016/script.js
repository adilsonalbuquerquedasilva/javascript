function contar(){
    let iniciotxt = document.getElementById('inicio').value;
    let fimtxt = document.getElementById('fim').value;
    let passotxt = document.getElementById('passo').value;
    console.log(Boolean(iniciotxt));

    // Converte os campos input de texto para número eatribui as variaveis
    let ninicio = Number(iniciotxt);
    let nfim = Number(fimtxt);
    let npasso = Math.abs(Number(passotxt));
    
    // Limpa e adiciona um prefixo
    const res = document.getElementById('res');
    res.innerHTML = "";
    
    // Verifica se os input estão vazios
    if(!iniciotxt || !fimtxt || !passotxt){
        alert('Preencha todos os campos');
        return;
    }
    
    // Verifica se os campos do input sao numeros
    if(isNaN(ninicio) || isNaN(nfim) || isNaN(npasso) || npasso === 0){
        alert('Preencha todos os campos, passo não pode ser 0');
        return;
    }

    if(ninicio < nfim){
        for(let i = ninicio; i <= nfim; i += npasso){
        res.innerHTML += `&#128073 ${i} `;
        }
    } else {
        for(let i = ninicio; i >= nfim; i -= npasso){
        res.innerHTML += `&#128073 ${i} `;
        }
    }
}