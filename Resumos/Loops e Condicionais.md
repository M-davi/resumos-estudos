## Loops e Condicionais

**Data da próximas revisões**    
1 - 04/04/26  
2 - 07/04/26  
3 - 11/04/26  
4 - 18/04/26  

### Perguntas

### Erros

---

## Estruturas de Repetição
Estruturas de Repetição ajudam em vários casos onde é preciso revisitar uma lista várias vezes e fazer multiplos procedimentos

```
for (let index = 0 ; index < n ; index ++){
  console.log(index)
}
```
A primeira declaração é a criação de um **index**, pode ser chamado de **n**.  
Segunda é a condição para o laço. 
Terceira é o que acontece com o **index** ao final de uma sequencia.  
Existem outras formas de percorrer um array, segue exemplos a seguir:  

```
const cars = ['ferrare','fiat','fusca','porshe'];

for(let n=0 ;n<cars.length;n++){
  console.log(cars[n])
}
```  
Como também usar:  

```
for (let car of cars){  //Car pode ser substituido por qualquer variável sendo ela a referência do laço.
  console.log(car)
}
```  
Ou...  

```
cars.forEach(function(car,index){  //Aqui podemos usar o index e o let car of cars não pode.
  console.log(car);
  console.log(index);
})
```  
O comando **while** será executado enquanto uma condição permanecer verdadeira.  

```
let index = 0;
while (index < 9){
  console.log(index);
  index++
}
```  
Podemos também usar o **for in** em objects.  

```
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
```
### Exemplo básico de codicional 
```
const sum = 1 + 2;

if (sum === 2){
  console.log('É o numero 2');
} else if (sum === 3) {
  console.log('É o numero 3');
} else{
  console.log('Não está')
}
```
Uma simples estrutura de condicionais, nada muito complexo.  

**Operadors && (e) e || (or)**  
```

const sum1 = 2 + 2 ;
const sum2 = 3 + 3 ;

if (sum1 ===4 && sum2 === 6){ 
  console.log('Sum is number 4 e sum2 é 6');
}
```  

&& as duas condições pecisam ser verdadeira para true.
Já o || é o or, ou seja uma ou outra precisa ser verdadeira para entrar na condicional.

```
if (sum1 === 4 || sum2 === 9){
  console.log('Sum1 is 4 or sum2 is 6')
}
```
### Formas de escrever funções  
```
let number //inicar uma variável necessáriaetne não precisa ser atribuido um valor.

if (sum ===2 ){
  number = 2;
} else {
  number = 2;
}
console.log(number)
```  
**Mesma coisa que escrever essa função anterior :**  
```
 number = sum ===2 ? 2:4 // condição, depois o interrogação pra peguntr se é verdadeira, e  
   for verdadeira number vai assumir o primero valor(2 no caso), se for falsa vai assumir o segundo valor(4 no caso);
```
### Switch não tem mistério, segue como se usa.
```
const car = 'Mercedes'

switch (car){
  case 'Mercedes':
    console.log('Esse carro é Mercedes');
    break; //usado para para o bloco
  case 'Ferrari':
    console.log('É uma Ferrari');
    break;
  case 'Uno':
    console.log("Uma Uno");
    break;
}
```
**Bem simples  aexecução e de facil entendimento, cada case vai eprsentar uam posibilidade.**
