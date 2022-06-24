/* Atividade: Validação de erros por tipo
        O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado 
        como parâmetro na função. Caso contrário, um erro será lançado.

        1. Crie uma função que recebe um array e um número.
        2. Realize as seguintes validações:
            - Se os parâmetros não forem enviados, lance um erro do tipo 'ReferenceError'.
            - Se o array não for do tipo 'object', lance um erro do tipo 'TypeError'.
            - Se o número não for do tipo 'number', lance um erro do tipo 'TypeError'.
            - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo 'RangeError'.
        3. Utilize a declaração 'try-catch'.
        4. Filtre as chamadas de catch por cada tipo de erro utilizando o operador 'instanceof'.
*/

// trow: notifica os erros.

function validaArrays (array, numberr) {
    try { // Verificação dos erros
        if (!array && !numberr) throw new ReferenceError('Entre com os parâmetros!');

        if (typeof array !== 'object') throw new TypeError('Entre com um elemento do tipo Array!');

        if (typeof numberr !== 'number') throw new TypeError('Entre com um elemento do tipo Number!');

        if (array.length !== numberr) throw new RangeError('Tamanho do array inválido!');

        return array;
        // catch: captura os erros identificados em 'try' e manipula. neste caso, a manipulação é o envio de uma mensagem notificando o tipo de erro ao usuário
    } catch(e) { // instanceof: filtra erros pelo tipo
        if (e instanceof ReferenceError) {
            console.log('ReferenceError!');
            console.log(e.message);

        } else if (e instanceof TypeError) {
            console.log('TypeError!');
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log('RangeError!');
            console.log(e.message);
        } else {
            console.log('Ocorreu um tipo de erro não esperado: ' + e);
        }
    }
}

console.log(validaArrays(['vermelho', 'azul', 'laranja'], 3));
