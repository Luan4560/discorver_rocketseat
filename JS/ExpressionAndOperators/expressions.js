/*
  Expressões e Operadores

  - Expressions
  - Operators 
    Binary
    Unary
    Ternary
*/

let number = 1;

console.log(!true ? 'alo' : 'nada');

/*
  new
  *left-hand-side expression
  *criar um novo objeto
*/

let name = new String('Luan')
let age = new Number(26)
console.log(name, age)

/*
  Operadores unários
  typeof
  delete
*/

const person = {
  name: 'Luan',
  age: 26
}

delete person.age;
console.log(person)

// Operadores aritiméticos

// Multiplicação
  // console.log(3.2 * 5)
// Divisão
  // console.log(5 / 3.2)
// soma
  // console.log(10 + 10)
// Subtração
  // console.log(10 - 20)

// Resto da divisão
  // let remainder
  //   remainder = 11 % 9 ;
  //   console.log(remainder)
// Incremento
let Incremento
increment = 1;
// increment++
// console.log(increment)
// Decremento
increment--
// console.log(increment)
// Exponencial

// console.log(2 ** 5)

// Grouping operator ()
let total = (2 + 3) * 5 
// console.log(total)

// Operadores de comparação
// Irá compara valores e retornar um Boolean como resposta à comparação

let one = 1;
let two = 2;

/**
 *  == igual
 *  != diferente
 *  === estritamente igual
 *  !== estritamente diferente
 *  >  Maior
 *  >= Maio igual
 *  < Menor
 *  <= Menor igual
 */

 // Operadores de atribuição (Assignment)

 let x;

 
 //assigment
  x = 1;
  // addition assigment
  x += 2
  console.log(x)

  // Operadores lógicos (logical operators)

  // - 2 Valores booleano, quando verificados, resultará em verdadeiro ou falso

  // let pao = true;
  // let queijo = true;

  // AND &&
    // console.log(pao && queijo)

  // OR || 

    // console.log(pao || queijo)

  // Not !

    // console.log(!pao)

  // Operador Condicional (Ternário)

  // Dependendo da condição, nós receberemos valores diferentes

  // Condição então valor 1 se não valor 2
  // condition ? value1 : value2

  // Exemplos

  // Café da manhã Top 

  let pao = true;
  let queijo = false;
  const niceBreakeFast = pao || queijo ? 'Café top ' : 'Café ruim' 

  console.log(niceBreakeFast)
  // Maior de 18

  let newAge = 18
  const canDrive = newAge >= 18 ? 'Can drive' : "Can't drive";
  console.log(canDrive)

// Operador de String (String operator)

// comparison(comparação)
// console.log('a' === 'a')

// concatenation (concatenação)
// Retorna a união de duas Strings

let alpha = 'alpha'
console.log(alpha + 'bet' + 's')

/* Type conversion (tupecasting) vs Type coersion 

*/

console.log(Number('9' + 5))

/* FALSY
  Quand um valor é considerado false em contextos onde 
  um booleano é obrigatório (condicionais e loops)

  false
  0
  -0
  ""
  null
  undefined
  NaN

*/

console.log(NaN ? 'verdadeiro' : 'falso')

/* TRUTHY
  Quando um valor é considerado true em contextos onde 
  um booleano é obrigatório (condicionais e loops)

  true
  {}
  []
  1
  3.23
  "0"
  -1
  Infinity
  -Infiniy
*/