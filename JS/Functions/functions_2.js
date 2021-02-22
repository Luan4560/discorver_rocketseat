//function expression
//function anonymous

const total = 0;
//function (parameters)
const sum = function(number1, number2) {
  const total = number1 + number2;
  return total;
}

let number1 = 32;
let number2 = 25
sum(number1, number2); // passing arguments

// console.log(`o número é 1 ${number1}`)
// console.log(`o número é 2 ${number2}`)
console.log(`a soma é : ${sum(number1, number2)}`)
console.log(total)

function makeJuice(fruit1, fruit2) {
  return fruit1 + fruit2;
}

const cup = makeJuice('banana', 'apple')

console.log(cup)