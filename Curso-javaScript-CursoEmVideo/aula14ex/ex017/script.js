

function gerar(){
    let txtnumero = document.getElementById('n1');
    let texto = document.getElementById('texto');

    let numero = Number(txtnumero.value)
    let s = 0;

   


  

    if(txtnumero.value.length == 0){
        alert('Campo Vazio! Tente Novamente!')
    }
    else{
        texto.innerHTML = '';
        for(i=1; i <= 10; i++){

            let item = document.createElement('option');
            
           
            item.text = `${numero} X ${i} = ${numero * i} `;
            texto.appendChild(item)
            
      

        }
    }

}