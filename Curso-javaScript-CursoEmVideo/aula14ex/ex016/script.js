function contar(){
    let tinicio = document.getElementById('inicio');
    let tfim = document.getElementById('fim');
    let tpasso = document.getElementById('passo');
    let resultado = document.getElementById('resultado');

    let inicio = Number(tinicio.value);
    let fim = Number(tfim.value);
    let passo = Number(tpasso.value);

  

    if(tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0){
        resultado.innerHTML = 'Impossivel contar!'
    }
    else if(passo == 0){

        alert('Passo Inválido! Considerando passo 1');

        passo = 1;
        contando();
    }
    else if(fim < inicio){
        alert('Valor de inicio maior que valor de fim! Tente novamente');
    }
    else{
        contando()
         

    }



    function contando(){
        for(let c = inicio; c <= fim; c += passo){
            resultado.innerHTML += `${c} \u{1f449}`;

         }
         resultado.innerHTML += `\u{1f3c1}`
    }

    

    

}

