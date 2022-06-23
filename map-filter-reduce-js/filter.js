// Filter: Filtre e retorne todos os números pares de um array.

function filtraPares(array) {
    return array.filter(function(item) {
        return item % 2 === 0;
    });
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));