//tudo q esiver dentroda função está protegido
function agora() {
    const form = document.querySelector('.form');
    const Resultado = document.querySelector('.Resultado');

    const pessoas = [];

    function recebeEventoForm(Evento) {
        Evento.preventDefault();
        const Nome = form.querySelector('.Nome');
        const Sobrenome = form.querySelector('.Sobrenome');
        const Idade = form.querySelector('.Idade');
        const Peso = form.querySelector('.Peso');


        pessoas.push({
            Nome: Nome.value,
            Sobrenome: Sobrenome.value,
            Idade: Idade.value,
            Peso: Peso.value
        });
        console.log(pessoas);
        Resultado.innerHTML += `<p> ${Nome.value} ${Sobrenome.value} ${Idade.value} ${Peso.value}</p>`
            //console.log(Nome.value, Sobrenome.value, Idade.value, Peso.value);
    }
    form.addEventListener('submit', recebeEventoForm);
}

agora();