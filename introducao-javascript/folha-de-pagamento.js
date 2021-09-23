/*
    FOLHA DE PAGAMENTO
        Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores, porém temos apenas a quantidade de horas trabalhadas e o valor hora. Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse colaborador. Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.
*/


let valor1 = +gets() // entrada: número colaborador
let valor2 = +gets() // entrada: número de horas trabalhadas
let valor3 = +gets() // entrada: salário do colaborador

let salary = parseFloat(valor2 * valor3) // número de horas trabalhadas * salário

console.log("NUMBER = " + valor1) // saída do número do trabalhador
console.log("SALARY = U$ " + salary.toFixed(2)) // saída do valor do salário