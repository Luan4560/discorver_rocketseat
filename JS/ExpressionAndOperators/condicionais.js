// if else 

let temperature = 36.5
let highTemperature = temperature>= 37;
let mediumTemperature = temperature < 37.5 && temperature >= 37 

if(highTemperature) {
  console.log('Febre alta')
} else if (mediumTemperature) {
  console.log('Febre oderada')
} else {
  console.log('Saudável')
}

// Switch
function calculate(number1, operator, number2) {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2
      break;
        case '-':
      result = number1 - number2
      break;
        case '*':
      result = number1 * number2
      break;
        case '/':
      result = number1 / number2
      break;

      default: 
        console.log('Não implementado')
      break;
  }
  return result;
}
// console.log(calculate(4, '%', 8))

//Throw
  function sayMyName(name = '') {
    if(name === '') {
      throw new Error('Nome é necessário')
    }
    console.log('Depois do erro')
  }
  
//Try...catch
  try {
    sayMyName()
  }catch(err) {
    console.log(err)
  }
  console.log('Apos a funçao de erro')