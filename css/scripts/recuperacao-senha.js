//Função para seleção de elementos por id
function selectId(elementId) {
    return document.getElementById(elementId);
}

//Definindo as variáveis que passarão por validação
const form = selectId('form-recuperacao')
const email = selectId('user-email')
const recuperationButton = selectId('btn-redefine')

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
        //adicionar condicao de email  no BD//
        ){
        //Fazer o cadastro do usuário
        console.log('Cadastrei o usuário')
    }else{
        formValidation();
    }
})

for(let cont = 0; cont<inputsList.length;cont++){
    inputsList[cont].addEventListener('blur', function (event){
    event.preventDefault();
    formValidation();
})}


function formValidation(){
    let emailCorreto = emailValidation(inputsList[i]);
    if(emailCorreto == false){
        fieldInvalid(inputsList[i]);
        habilityErrorSpan(spanList[i]);
        errorMessage(spanList[i],'Informe um e-mail válido');
    }else if(emailCorreto == true){
        fieldValid(inputsList[i]);
        disabilityErrorSpan(spanList[i]);
    }
     
}
