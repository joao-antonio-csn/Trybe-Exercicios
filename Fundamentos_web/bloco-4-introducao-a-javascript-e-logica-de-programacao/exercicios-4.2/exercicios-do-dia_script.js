let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1
//for (let i = 0; i < numbers.length; i+=1) {
//  console.log(numbers[i]);
//}

// exercicio 2
//let soma = 0;

// for (let i = 0; i < numbers.length; i+=1) {
//   soma = soma + numbers[i];
//}
//  console.log(soma);

// exercicio 3
// for (let i = 0; i < numbers.length; i += 1) {
//   soma = soma + numbers[i];
// }

//  console.log(soma/numbers.length);

//exercicio 4
// if ((soma/numbers.length) > 20) {
//   console.log("Valor maior que 20");
// } else {
//  console.log("Valor menor ou igual a 20");
// }

//exercicio 5
// let maiorNum = numbers[0];
// for (let i = 1; i < numbers.length; i += 1) {
//   if (maiorNum < numbers[i]) {
//         maiorNum = numbers[i]; 
//   }
// }

// console.log(maiorNum);

//exercicio 6
// let contador = 0;
// for (let i = 0; i < numbers.length; i +=1 ) {
//   if ((numbers[i] % 2) !== 0) {
//     contador += 1;
//   } else if (contador === 0){
//     console.log("nenhum valor ímpar encontrado");
//     }
// }
// console.log(contador);

//exercicio 7
let menorNum = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
  if (menorNum > numbers[i]) {
    menorNum = numbers[i]; 
  }
}

console.log(menorNum);