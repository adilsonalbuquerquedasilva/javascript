function tabuada(){
    const numtxt = document.getElementsByName('num')[1];
    const numn = Number(numtxt.value)
    const selecformtxt = document.getElementById('selecform');
    selecformtxt.innerHTML = "";

    if(numtxt.value.length === 0 || isNaN(numn)){
        alert('Preencha o campo');
        return
    } else{
        let c = 1;
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${numn} x ${c} = ${numn * c}`;
            selecformtxt.appendChild(item)
            c++
        }
    }
}