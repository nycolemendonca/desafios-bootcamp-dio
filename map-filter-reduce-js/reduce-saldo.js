/*  Reduce:
        1. Some todos os números de um array.
        *2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada. 
*/

function calculaSaldo(saldoDisponivel, itens) {
    if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros!';

    const saldoFinal = itens.reduce((acumulador, item) => acumulador - item.preco, saldo);

    return `O saldo final será de ${saldoFinal} reais.`;
}

lista = [
    {
        preco: 8,
        nome: 'maçã',
    },
    {
        preco: 6,
        nome: 'banana',
    },
    {
        preco: 12,
        nome: 'pêra',
    },
];

saldo = 30;

console.log(calculaSaldo(saldo, lista));