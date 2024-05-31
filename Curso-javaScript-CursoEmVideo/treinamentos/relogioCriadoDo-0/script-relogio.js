function relogio(){
    var txtsegundo = document.getElementById('segundo');
    var txtmilisegundo = document.getElementById('milisegundo');


    var segundo = 0;
    var milissegundo = 0;
    txtsegundo.innerHTML = segundo;
   
       
    while(milissegundo < 60){
        milissegundo++;
        txtmilisegundo.innerHTML = milissegundo;

    }
}
setInterval(relogio, 1000);

