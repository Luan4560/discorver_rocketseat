/*
  Váriaveis
  
  Nomes simbólicos para receber algum valor
  Atalhos de código
  Identificadores
  3 palavras reservadas
    var
    const
    let
 */

 const clima = "Quente";
//  clima = "Frio";
 console.log(clima);

 /*
   O JS é uma liguagem fracamente tipada e dinâmica
   -Variaveis não precisam ter um tipo previamente definido
   -Podemos mudar o conteúdo da variável
   

  #Scopo
   
  * Escopo determina a visibilidade de alguma váriavel no JS
  
  # Block Stattment
  
  */

  // Vamo iniciar um bloco
  {
    //aqui dentro é um bloco e posso colocar qualquer código
  } // Aqui fechamos o bloco

  // O bloco, também criará um novo escopo. Chamamos de 'block-scoped'

  // {
  //   let x = 0
  //   console.log(x)
  // }

  // var é global e poderá funcionar fora de um escopo de bloco
  {
    var x = 0;
  }
  console.log('> existe x antes do bloco?', x)
