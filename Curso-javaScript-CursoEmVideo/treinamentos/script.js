function verificar(){
    var n = document.getElementById('n');
    var numero = Number(n.value);

    var texto = document.getElementById('texto');

    //funcoes
    function par(){
        texto.innerText =(`O número ${numero} é Par`);
    }
    function impar(){
        texto.innerText = (`O número ${numero} é Impar`)
    }



    if(numero % 2 == 0){
        par();
    }
    else{
        impar();
    }

    

    
   
    
}

