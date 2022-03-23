//tudo q esiver dentroda função está protegido
function agora() {
    const form = document.querySelector('form');

    
    //let contador = 1

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        console.log(nome, sobrenome, peso, idade);
    }
    form.addEventListener('submit', recebeEventoForm);

}
agora();
//alert();


//isso aqui vai dentro da função
//evento.preventDefault();
/*console.log(`Não foi enviado ${contador}`);
contador++; */
//isso aqui vai dentro da função
//evento.preventDefault();
/*console.log(`Não foi enviado ${contador}`);
contador++; */