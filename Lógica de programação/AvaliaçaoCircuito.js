/*
**************************************************************************************************
Javascript reconhece como FALSO os seguintes parâmetros:
*undefined
*null
* ''
* " "
* ``
* false
* 0
sempre que uma expressão envolvendo || && ! tiver lgum desses acima, vai retornar falso,
a não ser que tenha um true dentro da expressão.
****************************************************************************************************
//  || vai retornar o valor verdadeiro mesmo
****************************************************************************************************
*/
// console.log('aron' && 0 && 'noah'); //  vai retornar 0 pq esse operador busca o primeiro item 'falso'
// console.log('Carlos' && '' && 'Nathan'); // aqui vai retornar as aspas vazias pq como dito antes, ele busca o primeiro item falso
// // console.log('josé ' && 'caique' && 'henrique'); // aqui ele vai mostarr apenas o último item


// const a = 10 + 5;
//console.log(a);
//dayint ayu mirage

console.log(false || 'Rafael' || null || '' || undefined); // vai retornar rafael pq é o primeiro verdadeiro q ele encontrou, mesmo q tenham outros, ele vai retornar apenas o primeiro vardadeiro