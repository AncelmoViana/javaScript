
function fatorial(n){
    let res;
    for(i=n-1; i>=1; i--){
        res = n * i;
        console.log(`${n} X ${i} = ${res}`);
        n = res;
    }

}
console.log(fatorial(5));




