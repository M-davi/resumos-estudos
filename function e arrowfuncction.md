function sum(a,b=10){ // colocando esse igual na variável ele asume um valor padrão caso não seja informado no chamado da variável.
  return a + b
}

const sumValue = sum(2,4)
console.log(sumValue)

//arrowfunction
 const sumArrow = (a,b=6) => (a+b);
//ou podemos escrever assim, que é a mesma coisa
const sumArrow2 = (a,b=4) =>{
  return a+ b;
}; 
console.log(sumArrow2(2))

function quadratica (a,b){
  return a**b;
}
const rsult = quadratica(2,89 )
console.log(rsult)
