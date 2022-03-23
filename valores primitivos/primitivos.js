/* primitivos imutáveis-string, number, boolean,undefined
null(bigint, symbol)
 */

/*let nome = ' rafael';
nome = 'luiz';
console.log(nome[5]);*/
//asjshs
/// Dados de referência são  MUTÁVEIS - array, objetc, function
/*let a = [2, 4, 6, 8];
let b = a;
a.push(10)
a.unshift('Rafael está aqui');
console.log(a, b);*/
//se eu alterar A eu vou estar alterando todos os valores

const a = {
    nome: 'Rafael',
    sobrenome: 'Cabral',
};
const b = {...a }; // os 3 pontinhos servem para armazenar o valor de b, mesmo alterando o valor 


a.nome = 'José';
console.log(b);