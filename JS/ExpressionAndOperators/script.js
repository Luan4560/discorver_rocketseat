//Estrutura de repetição

//for
// break - para  execução do loop
// continue - pula a execução do momento;

  for(let i = 10; i > 0; i--) {
    if(i === 5) {
      continue;
    }

    console.log(i)
  }

//While
  let i = 0;
  while(i < 10) {
    // console.log(i);

    i++;
  }


//for...of 

let name = "Luan";
let names = ['João', 'Paulo', 'Pedro']

for(let name of names) {
  // console.log(name)
}

//for..in

let person = {
  name: 'John',
  age: 30,
  weight: 88.6
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}