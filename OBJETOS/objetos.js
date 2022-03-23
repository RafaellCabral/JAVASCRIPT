/*const azul = [7, 8, 9, 10];
azul.push(11);
azul[0] = 'Rafael é legal!';
azul.pop(3);
azul.unshift(0)
console.log(azul);*/

//Paa criar um ARRAY se usa [], e para criar um OBJETO se usa {}


/*function criarPerfil(nome, sobrenome, idade, altura) {
    return { nome, sobrenome, idade, altura };
}
const pessoa1 = criarPerfil('Rafael', 'Cabral', 21, 1.72);
const pessoa2 = criarPerfil('Samuel', 'Castro', 27, 1.77);
const pessoa3 = criarPerfil('Nathan', 'Moreira', 31, 1.82);
const pessoa4 = criarPerfil('Luiza', 'Santos', 20, 1.70);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome);*/
















const pessoa1 = {
    nome: 'Rafael',
    sobrenome: 'Cabral',
    idade: 21,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está dizendo que gosta e vitamina de banana.`)
        console.log(`Eu tenho ${this.idade} de idade e estou aprendendo a programar :))`)
        console.log(`${this.idade} `)


    },
    incrementaIdade() {
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();