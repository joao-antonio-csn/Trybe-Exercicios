//PARTE I - OBJETOS E FOR/IN
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //exercicio 1
// console.log('Bem-vinda, ' + info.personagem);

//exercicio 2

info['recorrente'] = 'Sim';

// console.table(info);

//exercicio 3

for (let key in info) {
  console.log(key);
}

console.log('--------------------------------');

//exercicio 4

for (let key in info) {
    console.log(info[key]);
  }