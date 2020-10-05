const fields = document.querySelectorAll("[required]")

//Função para validação dos campos
function ValidateField(field) {
    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid ) {
                foundError = error
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Este campo é obrigatório"
            },
            email: {
                valueMissing: "É obrigatório informar um e-mail",
                typeMismatch: "Por favor, preencha um email válido"
            },
            password: {
                valueMissing: 'O campo Senha é obrigatório'
            },
            date: {
                valueMissing: 'O campo Data de Nascimento é obrigatório'
            },
            checkbox: {
                valueMissing: 'Você deve concordar com os termos'
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.parentNode.querySelector("span.error")
        
        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()

        if(error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "var(--ligth-green)"
            setCustomMessage()
        }
    }
}


function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation()
}

for( let field of fields ){
    field.addEventListener("invalid", event => { 
        // eliminar o bubble
        event.preventDefault()
        customValidation(event)
    })
    field.addEventListener("focus", customValidation)
    field.addEventListener('blur', customValidation)
    field.addEventListener('none', customValidation)
}

//Prevet Defaut do submit
document.querySelector("form").addEventListener("submit", event => {
    // não vai enviar o formulário
    event.preventDefault()

    console.log('formulário enviado')
})