//

/*const data = new Date('2022-03-22 18:25:59');
console.log('dia', data.getDate());
console.log('mês', data.getMonth() + 1); // mes começa do 0
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('segundo', data.getMinutes());
console.log('milésimo', data.getMilliseconds());
console.log('dia da semana', data.getDay());

console.log(data.toString());*/


function zeroAEsquerda(num) {
    return num >= 0 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getMilliseconds());

    return `${dia}/${mes}/${ano}      ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBr = formataData(data);
console.log(dataBr);