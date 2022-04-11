//PARTE I - OBJETOS E FOR/IN
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

  //exercicio 1
// console.log('Bem-vinda, ' + info.personagem);

//exercicio 2

// info['recorrente'] = 'Sim';

// console.table(info);

//exercicio 3

// for (let key in info) {
//   console.log(key);
// }

// console.log('--------------------------------');

//exercicio 4

// for (let key in info) {
//     console.log(info[key]);
// }

//exercicio 5

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//   };

//   console.log(info.personagem + ' e ' + info2.personagem);
//   console.log(info.origem + ' e ' + info2.origem);
//   console.log(info.nota + ' e ' + info2.nota);
//   if(info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
//       console.log('Ambos recorrentes');
//   }

// Exercicio 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

let titulo1 = leitor.livrosFavoritos[0];

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + titulo1['titulo']);