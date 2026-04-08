//Exercicio 01
var numero = 0
if(numero > 0){
  console.log( 'Positivo');
} else if(numero <0){
  console.log('Negativo')
}else{
  console.log('Zero')
}

//Exercicio 02
var idade = 15;
if (idade < 12){
  console.log('crianca');
}else if( idade>= 12 && idade <= 17){
  console.log('adoilescente');
}else{
  console.log('Adulto')
}

//Exercicio 03

var dia = 7;

switch(dia){
  case 1:
    console.log('Segunda');
    break;
  case 2:
    console.log('terca');
    break;
  case 3:
    console.log('quarta');
    break;
  case 4:
    console.log('quinta');
    break;
  case 5:
    console.log('sexta ');
    break;
  case 6:
    console.log('sabado');
    break;
  case 7:
    console.log('domingo');
    break;
}

//Exercicio 04
var cargo = ''
switch(cargo){
  case 'admin':
    console.log('Acesso total')
    break;
  case 'user':
    console.log(`Acesso limitado`)
    break;
  case 'guest':
    console.log('Acesso minimo');
    break;
  default:
    console.log('Acesso negado');
    break;
}
