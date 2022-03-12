let varA = 'A'; //B
let varB = 'B'; // C
let varC = 'C'; //A

/*const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;*/

// 2° forma de fazer sem utilizar novas variáveis 
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);