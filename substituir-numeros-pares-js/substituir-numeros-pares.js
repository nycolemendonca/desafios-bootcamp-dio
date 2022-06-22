function substituiNumerosPares(array) {
    if (!array.length) return console.log(-1); // para o caso de entrada = 0, saída = -1

    const naoZero = (num) => num !== 0;     // verificação de número diferente de zero
    const numPar = (num) => num % 2 === 0;  // verificação de número par

    for (let i = 0; i < array.length; i++) {            // analisando todo o array
        if (numPar(array[i]) && naoZero(array[i])) {    // se o número for par E diferente de zero, ele é substituído por 0
            console.log(`trocando ${array[i]} por 0...`);
            array[i] = 0;
        } else if (!naoZero(array[i])) {    // se o número já for zero, a saída continua sendo zero
            console.log('Ops, você já vale 0!');
        }
    }
    console.log(array);
}

substituiNumerosPares([0, 1, 2, 3, 4, 5]); // função sendo chamada

