/*  atividade: 
    1 - Crie uma função que recebe o array alunos e um número que irá representar a média final.
    2 - Percorra o array e popule um novo array auxiliar apenas com alunos cujas notas são maiores ou iguais à média final.
    3 - Utilize a técnica 'object destructuring' para manipular as propriedades desejadas de cada aluno.
*/

// array que contém objetos, que no caso são os dados dos alunos
const alunos = [ 
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
];

// função que recebe o array alunos e a média final
function alunosAprovados(alunos, media) { 
    
    // declaração do array auxiliar. se este array for declarado dentro do for, a cada loop será criado um novo array (o que não desejamos)
    let aprovados = [];

    // for -> percorre o array alunos
    for(let i = 0; i < alunos.length; i++) { 

        // propriedade 'object destructuring' manipula apenas as propriedades desejadas (nota e nome) de cada aluno
        const {nota, nome} = alunos[i]; 

        if(nota >= media) {
            // push do array apenas os nomes dos alunos aprovados
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6.0));