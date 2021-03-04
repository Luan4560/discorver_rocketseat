/* ### Celsius em fahrenheit

   Crie uma função que receba uma string em celsius
   ou fahrenheit e faça a transformação de uma unidade
   para outra

   C = (f - 32) * 5 / 9

   F = C * 9 / 5 + 32
*/

function convert (temperature) {
  const celciusExists = temperature.toUpperCase().includes('C')
  const fareinheitExists = temperature.toUpperCase().includes('F')

  if(!celciusExists && !fareinheitExists) {
    throw new Error ('Não identificado')
  }

  let updatedDegree = Number(temperature.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => (fahrenheit - 32 ) * 5 / 9;
  let temperatureSign = 'C'

  if(celciusExists) {
     updatedDegree = Number(temperature.toUpperCase().replace("C", ""));
     formula = celsius => celsius * 9 / 5 + 32;
     temperatureSign = 'F'
  }

  return formula(updatedDegree) + temperatureSign;
}

try {
  console.log(convert('10C'))
  console.log(convert('50F'))
  console.log(convert('50z'))
}catch(err) {
  console.log(err.message)
}