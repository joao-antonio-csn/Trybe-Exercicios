//Exercicio 1

/*Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/ 
let wordTest = '';
words = ['arara', 'desenvolvimento'];

for(let i = 0; i< words.length; i += 1) {
  console.log(verificaPalindrome(words[i]));
}

function verificaPalindrome (word) {
  let array= [];
  array = word.split('');
  array = array.reverse();
  wordTest = array.join('');
    if(word === wordTest) {
    return true;
    } else {
      return false;
    }
  }

  