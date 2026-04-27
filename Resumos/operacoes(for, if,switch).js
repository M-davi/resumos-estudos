const operacoes = [
  { tipo: 'deposito', valor: 100 },
  { tipo: 'saque', valor: 50 },
  { tipo: 'saque', valor: 100 }
];
/*
var saldo = 0;
for (let i = 0; i < operacoes.length ;i ++){
  const operacao = operacoes[i];
  switch(operacao.tipo){
    case 'deposito':
      saldo += operacao.valor;
      console.log(`Adicionado R$ ${operacao.valor.toFixed(2)} ao seu Saldo.`)
      break;
    case 'saque':
      if (saldo >= operacao.valor) {
        saldo -= operacao.valor;
        console.log(`Subtraido R$ ${operacao.valor.toFixed(2)} do seu saldo.`)
      }else{
        console.log(`Saque inválido: R$ ${operacao.valor.toFixed(2)}`)
      };
      break;
    default:
      console.log('Operação desconhecida', operacao.tipo)
      break;
  }
};*/
//console.log(`Saldo Final: R$ ${saldo.toFixed(2)}`);

function processarOperacoes(operacoes,saldoInicial){
    let saldo = saldoInicial;
    const historico = [];

    for (let i = 0; i < operacoes.length ;i ++){
    const operacao = operacoes[i];


    switch(operacao.tipo){
        case 'deposito':
            saldo += operacao.valor;
            //console.log(`Adicionado R$ ${operacao.valor.toFixed(2)} ao seu Saldo.`)
            historico.push({
                tipo:'deposito',
                valor:operacao.valor,
                status:'ok'
            })
            break;
        case 'saque':
            if (saldo >= operacao.valor) {
                saldo -= operacao.valor;
                console.log(`Subtraido R$ ${operacao.valor.toFixed(2)} do seu saldo.`)
                historico.push({
                    tipo:'saque',
                    valor:operacao.valor,
                    status:'ok'
                })
            }else{
                console.log(`Saque inválido: R$ ${operacao.valor.toFixed(2)}`)
                historico.push({
                    tipo:'saque',
                    valor:operacao.valor,
                    status:'falha'
                })
            };
            break;
        default:
            console.log('Operação desconhecida', operacao.tipo)
            historico.push({
                tipo:operacao.tipo,
                valor:operacao.valor,
                status:'desconhecido'
            })
            break;
        }
    };
    return {
        saldoFinal:saldo,
        historico
    }
}

const resultado = processarOperacoes(operacoes, 0);

console.log('Saldo final:', resultado.saldoFinal);
console.log('Histórico:', resultado.historico);
