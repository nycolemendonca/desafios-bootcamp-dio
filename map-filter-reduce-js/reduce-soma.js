/*  Reduce:
        *1. Some todos os números de um array.
        2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada. 
*/

function somaNumeros(array) {
    return array.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    });
}

const array = [1, 2];

console.log(somaNumeros(array));