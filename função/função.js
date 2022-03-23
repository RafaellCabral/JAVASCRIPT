//Abaixo, o (nome) vai receber o comando que veio do amarelo('rafael), e vai ser apresentado
// posso utilizar quantos vezes quiser com qualquer nome q ele vai chamar
/*function amarelo(nome) {
    return (`olá ${nome}`)
        //console.log(`Olá ${nome}`)
        //return 7775 // o return ai retornar o valor qe eu quiserq ele retorne
}

const variavel = amarelo('rafael');
console.log(variavel);*/
// posso colocar cont variael no inicio para salvar 
//não pode começar função com numero
// os colchetes são obrigatórios nas funções
// tudo q está dentro da função fica protegido, não é possível alterar por fora

//////////////////////

/*function soma(x, y) { //  se eu colocar valores aqui, e nao colocar no console, o depurador vai somar o que em aqui dentro
    const resultado = x / y;
    return resultado;
}
console.log(soma(4885, 46));*/
///////////////////////////

/// tudo q esta dentro da função está protegido
// o que esta dentro da função é  chamado de escopo
// tudo q vier abaixo de return não é executado

/*const raiz = function(n) { //atualmente se usa => em vez de funcion ''    const raiz = (n) =>''

    return n ** 0.5;
}
console.log(raiz(36));
console.log(raiz(88));
console.log(raiz(958));
console.log(raiz(811));*/

const raiz = n => n / 5; // esse aui é um jeito mais moderno mas só funciona se for apenas 1 paramero, no caso N
console.log(raiz(7));

//=> se chama ARROW