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

// arrayTest = [2, 3, 6, 7, 10, 1];
// let maiorValor = 0;
// let index = 0;
// console.log(maiorValorNoArray(arrayTest));

// function maiorValorNoArray (array) {
//   for (let i = 0; i < array.length; i+=1) {
//     if(maiorValor < array[i]) {
//       maiorValor = array[i];
//       index = i;
//     }
//   }
//   return index;
// }


//Exercício 3
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

// arrayTest = [2, 4, 6, 7, 10, 0, -3];
// let menorValor = 0;
// let index = 0;
// console.log(menorValorNoArray(arrayTest));

// function menorValorNoArray (array) {
//   for (let i = 0; i < array.length; i+=1) {
//     if(menorValor > array[i]) {
//       menorValor = array[i];
//       index = i;
//     }
//   }
//   return index;
// }

//Exercício 4

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

// arrayTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// let maiorNome = '';
// let index = 0;
// console.log(maiorNomeNoArray(arrayTest));

// function maiorNomeNoArray (array) {
//   for (let i = 0; i < array.length; i+=1) {
//     if(maiorNome.length < array[i].length) {
//       maiorNome = array[i];
//     }
//   }
//   return maiorNome;
// }


//Exercício 5

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

arrayTest = [2, 3, 2, 5, 8, 2, 3];
let sum = 0;
let repeatedNum = 0;
console.log(mostRepeatedNumInArray(arrayTest));

function mostRepeatedNumInArray (array) {
  for (let i = 0; i < array.length; i+=1) {
    if(repeatedNum === array[i]) {
      repeatedNum = array[i];
      sum += 1;
    }
  }
  return repeatedNum;
}
