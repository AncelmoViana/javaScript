function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');


    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert("erro")
    }
    else{
        var fsex = document.getElementsByName('radsex');

        var idade = ano - Number(fano.value);
        

        var genero = '';

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        img.style.borderRadius = '50%';
        img.style.width = '300px';
        img.style.height = '250px';
        img.style.padding = '10px';

        


        if(fsex[0].checked){
            genero = 'Homem';
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/HomemBebe.jpg')

            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/HomemJovem.jpg' );

            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/HomemAduto.jpg');

            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/HomemIdoso.jpg');

            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/MulherBebe.jpg' );

            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/MulherJovem.jpg');

            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/MulherAdulta.jpg');


            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/MulherIdosa.jpg');

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detecamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
        
    }
}