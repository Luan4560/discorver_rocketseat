let techs = ["html", "css", "js"]
  console.log(techs)
//Adicionar um item no fim
  techs.push('React')
  console.log(techs)
//adicionar no começo
techs.unshift('NodeJS')
console.log(techs)
//remover do fim
techs.pop()
console.log(techs)
//remover do começo
techs.shift()
console.log(techs)
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
//remover 1 ou mais items em qualquer posição do array
console.log(techs.splice(1, 2))
//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)