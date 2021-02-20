// Váriaveis e tipos de dados
// declaration
// var name

// assignment / atribuição
// name = " Luan"

// Tipo de dado na variável

// console.log(name);

// agrupamento de declarações

// let age, isHuman

// age = 18;
// isHuman = true

// console.log(name, age, isHuman);
// console.log(`He's name is ${name}, he is human ? ${isHuman ? 'yes it is!' : 'not is not!'} ` )

// 1; Declare uma variavel de nome weight
  let weight  ;
// 2. Que tipo de dado é a variável acima? 
  console.log(`O tipo dessa variavel é ${typeof weight}`)


/*
3. Declare uma variável e atribua valores para cada um dos dados:
  * name: String;
  * age: Number (integer)
  * stars: Number (integer)
  *  isSubscribed: Boolean
  * 

*/

  let name = 'Luan';
  let age = 24;
  let  stars = 25.5;
  let isSubscribed=  true;


/*
  4. A variável student abaixo é de que tipo de dados ?

  4.1 Atribua a ela as mesmas propriedades e valores 

  4.2 Mostre no console a seguinte mensagem: 

    <name> de idade <age> pesa <weight> kg.    
*/
  let student = { 
    name: 'Luan',
    age: 26,
    weight: 60.0,
  }


  console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

  /*
    5. Declare uma variável do tipo Array, de nome students e
    atribua a ela nenhum valor, ou seja, 
    somente o array vazio
   
   */

  /*
    6. Reatribua valor para a variável acima, colocando dentro dela o
    objeto student da questão 4. (Não copiar e colar o objeto, mas usar
    o objeto criado  e inserir ele no array  
    )
  */
 const cassia = {
  name: 'Cássia',
  age: 26,
  weight: 58.5,
}
  let students = [
    student,
    cassia,
  ];
;
  /*
    7. Coloque no console o valor da posição zero do array acima
  */
    console.log(students[1])
  /*
    8. Crie um novo student e coloque na posição 1 do array students
  */
 
  /**
  9. Sem rodar, qual a responsta do código abaixo e porque ? Após sua resposta,
  rode o código e veja se acertou.

  console.log(a)
  var a = 1;

  valor é undefined

   */

   console.log(a)
   var a = 1;
