const pais = document.getElementById('paises')
        const resultado = document.getElementById('res')
        function ident(){
            if(pais.value == "Brasil" || pais.value =='brasil'){
                resultado.innerHTML = `Você é Brasileiro, seu país de origem é ${pais.value}`
            }else{
                resultado.innerHTML = `Você é um estrangeiro, seu país de origem é ${pais.value}`
            }
        }