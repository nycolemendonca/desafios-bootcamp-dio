/*
    QUANTIDADE DE NÚMEROS POSITIVOS

    Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos. Em seguida, apresente a quantidade de valores positivos digitados.

    - Entrada: Você receberá seis valores negativos e/ou positivos.

    - Saída: Exiba uma mensagem dizendo quantos valores positivos foram lidos.
*/

let quantidadePositivos = [];
let valor;

for (let i = 0; i < 6; i++) {
  valor = +parseFloat(gets());

  if (valor > 0) {
    quantidadePositivos++;
  }

}

console.log(`${quantidadePositivos} valores positivos`);