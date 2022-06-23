/* Dada a função 'calculaIdade', utilize os métodos call e apply para modificar
   o valor de 'this'.  */

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Nycole',
    idade: 21,
};

const pessoa2 = {
    nome: 'Soraya',
    idade: 48,
};

const pessoa3 = {
    nome: 'Margot',
    idade: 6,
};

console.log(calculaIdade.call(pessoa3, 3)); // parametros separados por virgula
console.log(calculaIdade.apply(pessoa2, [10])); // parametros dentro de arrays