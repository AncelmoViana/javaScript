var idade = 100;

if (idade > 0 && idade < 125){
    console.log(`\nVocê tem ${idade} anos.`)

    if (idade < 16){
        console.log('Não vota');
    }
    else if(idade < 18 || idade > 65){
    
        console.log('Voto opcional');
    }
    else{
        console.log('Voto Obrigatório');
    }
}
else{
    console.log(' Idade ERRADA!\n Por favor tente novamente!')
}


