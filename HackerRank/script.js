// Encontrando soma de dois index's para um numero alvo;
function findAndSumIndex(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; i++){
      if(arr[i] + arr[j] === target){
        return [i, j];
     
      }
    }
  }
    
}
console.log(findAndSumIndex([1,5,7,2], 7))

var A = 10;
var B = 9;
var X = A + B;
console.log("X = "+X);