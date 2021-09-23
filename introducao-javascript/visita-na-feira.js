/*
    VISITA NA FEIRA

        Você está na feira com a sua sacola e parou em uma banca. O feirante lhe entregou pimentões amarelos e vermelhos. 
        Agora, iremos somar os pimentões amarelos e vermelhos para descobrir o total de pimentões na sacola. 
        Você receberá 2 inteiros que devem ser lidos e armazenados nas variáveis A (pimentões amarelos) e B (pimentões vermelhos).
        Faça a soma de A e B atribuido o seu resultado na variável X (total de pimentões).

        - Entrada: A entrada contém 2 valores inteiros separados por um espaço.
        - Saída: Imprimir a mensagem "X = " seguido pelo valor da variável X e pelo final de linha

*/

// função gets: implementada internamente para auxiliar a entrada de dados.
// split(): divide uma string em uma matriz de substrings e retorna a nova matriz.
let line = gets().split(" "); /* gets = função SDTIN, console.log = função STDOUT */
let A = parseInt(line[0]); // A = pimentões amarelos
let B = parseInt(line[1]); // B = pimentões vermelhos
let total = 0;
total = A + B;

console.log ("X = " + total);