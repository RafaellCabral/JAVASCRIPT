// IF e ELSE
// quando se usa <= vc pega o bloco completo , de X:00 até X :59.
/*const a = 13.01;
if (a > 0 && a <= 11) {
    console.log('Bom dia!');
} else if (a > 12 && a <= 18) {
    console.log('Boa Tarde');
} else if (a => 19 && a <= 23) {
    console.log('Boa Noite!');
};*/


/*
O IF pode ser utilizao sozinho
o ELSE nõ pode ser utilizado sozinho, sempre q tiver um ELSE vai ter um IF por trás
Posso ter vários else ifs no meu código 

else if pode er utiliza várias vezes
o 'else' sozinho só poe ser utilizado 1 vez no bloco
*/


function hora() {
    const a = 190;
    if (a > 0 && a <= 11) {
        console.log('BOM DIA!');
    } else if (a >= 12 && a <= 18) {
        console.log('BOA TARDE!');
    } else if (a >= 19 && a <= 23) {
        console.log('BOA NOITE !');
    } else {
        console.log('Olá, seja bem-vindo!');
    }
};
hora();