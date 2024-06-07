let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        this.peso += p
    }
}
var num =5;
num **=2;
console.log(num)
amigo.engordar(5);
console.log(`${amigo.nome} pesa ${amigo.peso}`);