//Exercicio 1

/*Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/ 
// let wordTest = '';
// words = ['arara', 'desenvolvimento'];

// for(let i = 0; i< words.length; i += 1) {
//   console.log(verificaPalindrome(words[i]));
// }

// function verificaPalindrome (word) {
//   let array= [];
//   array = word.split('');
//   array = array.reverse();
//   wordTest = array.join('');
//     if(word === wordTest) {
//     return true;
//     } else {
//       return false;
//     }
//   }

//Exercício 2

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

arrayTest = [2, 3, 6, 7, 10, 1];
let maiorValor = 0;
let index = 0;
console.log(maiorValorNoArray(arrayTest));
function maiorValorNoArray (array) {
  for (let i = 0; i < array.length; i+=1) {
    if(maiorValor < array[i]) {
      maiorValor = array[i];
      index = i;
    }
  }
  return index;
}