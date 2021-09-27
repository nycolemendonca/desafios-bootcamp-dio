/*
    ANALISE DE NÚMEROS

    Você de fazer a leitura de 5 valores inteiros. Em seguida, mostre quantos valores informados são pares, quantos valores informados são positivos e quantos valores informados são negativos. Considere que o número zero é positivo, mas não pode ser considerado como positivo ou negativo.

    - Entrada: Você receberá 5 valores inteiros.
    - Saída: Exiba as mensagem referentes às característisca citadas.
*/

numero = Array(5);

numero[0] = parseInt(gets());
numero[1] = parseInt(gets());
numero[2] = parseInt(gets());
numero[3] = parseInt(gets());
numero[4] = parseInt(gets());

pares = numero.filter(value => value % 2 == 0);
impares = numero.filter(value => value % 2 != 0);

positivos = numero.filter(value => value > 0);
negativos = numero.filter(value => value < 0);

console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");

console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");

