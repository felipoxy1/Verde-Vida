$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
    rules: {
        nome: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        telefone: {
            required: true,
        },
        mensagem: {
            required: true,
        }
    },
    messages: {
        nome: 'Por favor enserir seu nome',
        telefone:'Por favor enserir seu numero de telefone',
        email:'Por favor enserir seu e-mail',
        mensagem:'Por favor enserir sua mensagem',
    },
    submitHandler: function(form) {
        alert(`Mensagem enviada com sucesso`),
        console.log(form)
    },
    invalidHandler: function(event, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})
})