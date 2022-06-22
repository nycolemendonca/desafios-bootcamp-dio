// palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquera para a direita ou vice-versa.

// solução 1 - verificação de toda a string transformada em array.

function verificaPalindromo(string) {
    if (!string) return "string inexistente"; // verifica se a string é inexistente (empty, undefined ou null).

    // .split: separa todas as letras da string e retorna como um array.
    // .reverse: reverte a ordem do array.
    // .join: junta todo o array em uma string.

    return string.split("").reverse().join("") === string; // separa.inverte.concatena
}

// solução 2 - verificação de metade da string lida como um array.

function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) { // verifica metade da string porque as letras de um palíndromo são "espelhadas"
        if (string[i] !== string[string.length -1 - i]) return false; // se a string não for "espelhada", retorna falso.
    }

    return true;
}

console.log(verificaPalindromo2("romametemamor")); // roma me tem amor