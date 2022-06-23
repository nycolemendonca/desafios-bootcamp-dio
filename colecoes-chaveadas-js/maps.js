/* Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
    1 - Crie uma função getAdmins que recebe um Map;
    2 - Crie um Map e popule-o com nomes de usuários e seus papeis no sistema (Ex: 'Luiz' => 'Admin')
    3 - Dentro de getAdmins, utilize o loop for-of para retornar uma lista com os nomes dos usuários que são
*/

function getAdmins(map) {
    // o array admins armazena os valore retornados no for
    let admins = [];
    // análise da chave e do valor contidos no objeto Map 
    for([key, value] of map) {
        if(value === 'Usuer') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'Usuer');
usuarios.set('Paulo', 'Admin');

console.log(getAdmins(usuarios));