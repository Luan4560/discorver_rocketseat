/*
  Function() constructor

  * expression new
  * create a new object
  * this keyword
 */

 function Person(name, sobrenome) {
   this.name = name
   this.sobrenome = sobrenome
   this.walk = function () {
     return this.name + ' walking'
   }
 }
 const cassia = new Person("Cássia", "Ranniery")
 const luan = new Person("Luan", "Nascimento")
 console.log(luan.walk(), cassia.walk())