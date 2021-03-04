/*
  ## Sistem de gastos familiar

  Crie um objeto que possuirá 2 propriedade, ambas do tipo 
  array: 
       * receitas: []
       * despesas: []
       
  Agora, crie uma função que irá calcular o total
  de receitas e despesaar e irá mostrar uma mensagem
  se a família está com saldo positivo ou negativo
  seguido do valor do saldo;
*/

let myFinances = {
  receitas: [3000, 600],
  despesas: [500, 800],
}

function sum(array) {
  let total = 0;

  for(let value of array) {
    total += value;
  }

  return total
} 

function calculate () {
  const calculoReceitas = sum(myFinances.receitas)
  const calculoDespesas = sum(myFinances.despesas)

  const myMoney = calculoReceitas - calculoDespesas

  const saldoPositivo = myMoney > 0;

  let textoBalanco = "negativo"

  if(saldoPositivo) {
    textoBalanco = 'Positivo'
  }

  console.log(`Seu saldo é ${textoBalanco}: ${myMoney.toFixed(2)}R$`)
}

calculate()
