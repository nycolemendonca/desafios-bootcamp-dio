// Map: Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro 'this' de um objeto criado por você, e depois sem ele.

function mapSemThis(array) {
    return array.map(function(item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(nums); // array original
console.log(mapSemThis(nums)); // array resultante