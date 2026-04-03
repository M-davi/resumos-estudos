// Estruturas de Repetição ajudam em vários casos onde é preciso revisitar uma lista várias vezes e fazer multiplos procedimentos

for (let index = 0 ; index < n ; index ++){
  console.log(index)
}

//primeira declaração é a criaçãod e um index, pode ser chamado de n. Segunda é a condição para o laço. Terceira é o que aocntece com o index ao final de uma sequencia.
//Existem outras formas de percorrer uma lista exemplo a aseguir;

const cars = ['ferrare','fiat','fusca','porshe'];

for(let n=0;n<cars.length;n++){
  console.log(cars[n])
}

//ou podemos usar 

for (let car of cars){ //car pode ser substituido por qualquer variável sendo ela a referÇemcia usada no laço.
  console.log(car)
}

//ou então

cars.forEach(function(car,index){ // aqui podemos usar o index e o let car of cars não pode.
  console.log(car);
  console.log(index);
})

//while loop será executado enquanto uam condição permanecer verdadeira.

let index = 0;
while (index < 9){
  console.log(index);
  index++
}
 // isando o for in em objects.
const person = {
  name:'joane',
  age:45,
}

for (propriedades in person){
  console.log(propriedades)
}
for (propriedades in person){
  console.log(person[propriedades]) // percorre a propriedades
}
