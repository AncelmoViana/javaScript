
var txtsegundo = document.getElementById('segundo');
var txtmilissegundo = document.getElementById('milissegundo');

var segundo = 0;


    
   
     
for(i=0; i<60; i++){
    segundo = i;
    txtsegundo.innerHTML += segundo; 
    segundo = 0;
    Window.setInterval(i, 1000);
}

   



