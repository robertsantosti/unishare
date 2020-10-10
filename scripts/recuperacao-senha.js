//Função para seleção de elementos por id
function selectId(elementId) {
    return document.getElementById(elementId);
}

//Definindo as variáveis que passarão por validação
const form = selectId('form-recuperacao')
const email = selectId('user-email')
const recuperationButton = selectId('btn-redefine')
const spanError = selectId('error-email')
const subContainer = document.querySelector('.sub-container')


// FUNÇÕES DE VALIDAÇÃO 

//Função que verifica se o campo está vazio
function emptyValidation(element){
    return element.value.trim() === '';
}

//Função que confere se o e-mail é valido
function emailValidation(emailElement){
    if(emailElement == email){
        if (emailElement.validity.valid){
            return true;
        }else{
            return false;
        }
    }
}

//Função que confere se o elemento email já existe no Banco de Dados


// FUNÇÕES PARA PRINT DE ERRO NA TELA (REJEIÇÃO OU VALIDAÇÃO)

//Função que habilita o span de erro
function habilityErrorSpan(element){
    return element.style.display='flex';
}

//Função que desabilita o span de erro
function disabilityErrorSpan(element){
    return element.style.display='none';
}

//Função que valida o campo 
function fieldValid(element){
    return element.style.border = '2px solid var(--green)'
}

//Função que desvalida o campo
function fieldInvalid(element){
    return element.style.border = '2px solid red'
}

//Função que define a mensagem de erro
function errorMessage(element,message){
    return element.innerHTML = message;
}

//Evento de clique no botão de submit
recuperationButton.addEventListener('click', function (event){
    event.preventDefault();

    let emailValid = emailValidation(email);
    console.log(emailValid)

    if (emailValid
        //adicionar condicao de email no BD//
        ){
        //
        console.log('O e-mail foi enviado')
        form.style.display='none'
        subContainer.innerHTML = '<p>Obrigado por entrar em contato!Retornaremos em breve...</p>'+ '<a id="back-to-start"href=""><button>Voltar para a tela inicial</button></a>'
    }else{
        formValidation();
    }
})

email.addEventListener('blur', function (event){
    event.preventDefault();
    formValidation();
})


function formValidation(){
    let emailCorreto = emailValidation(email);
    let campoVazio = emptyValidation(email)
    //let emailInBd = 
    //Adicionar condição de e-mail no BD
    if(campoVazio){
        fieldInvalid(email);
        habilityErrorSpan(spanError);
        errorMessage(spanError,'Este campo deve ser preenchido');
    }else if (emailCorreto == false){
        fieldInvalid(email);
        habilityErrorSpan(spanError);
        errorMessage(spanError,'Informe um e-mail válido');
    }else if(emailCorreto == true){
        fieldValid(email);
        disabilityErrorSpan(spanError);
    }
     
}
