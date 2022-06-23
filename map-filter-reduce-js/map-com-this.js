/*  - Map: Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro 'this' de um objeto criado por você, e depois sem ele.
*/

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(array, thisArg) {
    return array.map(function(item) {
        return item * this.value;
    }, thisArg); // callback, thisArg (argumento)
}

const nums = [1, 2];

console.log('this -> maçã',mapComThis(nums, maca));
console.log('this -> laranja',mapComThis(nums, laranja));