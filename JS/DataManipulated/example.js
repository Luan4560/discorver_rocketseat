let string  = "123";
console.log(Number(string));
let number = 3.2121312;
console.log(String(number))


// Contar caracteres

let word = 'Paralelepipedo';
console.log(word.length)

// Transformar um numbero quebrado com duas casas decimais
//e trocar ponto por vírgua.
console.log(Number(number.toFixed(2).replace(".", ",")))

//Traformar letras e maiuculas e minusculas

console.log(word.toUpperCase())
console.log(word.toLocaleLowerCase())

// Verificar se a strig tem uma palavra especifica
let phrase = 'Eu quero viver o Amor'
console.log(phrase.includes('Amor'))

// Separe um texto que contem espaços, em um novo array onde 
// cada texto é uma posição do array. Depois disso, transforme 
// o array em um texto e onde eram espaços, coloque_

let newPhrase = "Eu quero ser um bom dev"
let myArray = newPhrase.split(" ");
let phraseWithUnderscore = myArray.join('_');
console.log(phraseWithUnderscore);

// Criar um array com construtor
let newArray = new Array('a', 'b', 'c');
console.log(newArray);

// Contar elementos do array
console.log(newArray.length);

// Transformar uma cadeia de caracteres em elementos de um array 
console.log(Array.from(word));