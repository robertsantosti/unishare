//Função para seleção de elementos por id
function selectId(elementId) {
    return document.getElementById(elementId);
}

//Definindo as variáveis que passarão por validação
const form = selectId('form-login')
const name = selectId('name')
const email = selectId('email')
const message = selectId('message')
const submitButton = selectId('btn-submit')

//Pegando lista de inputs
const inputsList = [name, email, message];
console.log(inputsList)

//Pegando lista de spans para imprimir o erro
const spanList = document.querySelectorAll('.error');
console.log(spanList)

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

//Função que confere se há inputs vazios e retorna array com os vazios
function emptyFields(array){
    var listaVazios = [];
    for (let i=0;i<array.length;i++){
        if(emptyValidation(array[i])){
            listaVazios.push(array[i]);
        }
    }
    return listaVazios;
}

// FUNÇÕES PARA PRINT DE ERRO NA TELA (REJEIÇÃO OU VALIDAÇÃO)

//Função que habilita o span de erro
function habilityErrorSpan(spanListElement){
    return spanListElement.style.display='flex';
}

//Função que desabilita o span de erro
function disabilityErrorSpan(spanListElement){
    return spanListElement.style.display='none';
}

//Função que valida o campo 
function fieldValid(inputsListElement){
    return inputsListElement.style.border = '2px solid var(--green)'
}

//Função que desvalida o campo
function fieldInvalid(inputsListElement){
    return inputsListElement.style.border = '2px solid red'
}

//Função que define a mensagem de erro
function errorMessage(spanListElement,message){
    return spanListElement.innerHTML = message;
}

//Evento de clique no botão de submit
submitButton.addEventListener('click', function (event){
    event.preventDefault();

    let emptyInputs = emptyFields(inputsList);
    console.log(emptyInputs);

    let emailValid = emailValidation(email);
    console.log(emailValid)

    if (emptyInputs.length==0 && emailValid){
        for (let i=0;i<inputsList.length;i++){
            for (let c=0;c<spanList.length;c++){
                inputsList[i].style.border ='2px solid var(--green)'
                spanList[c].style.display='none';
            }
        }
        console.log('Recebi o contato')
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
    for (let i=0;i<inputsList.length;i++){

        let campoVazio = emptyValidation(inputsList[i]);

        let emailCorreto = emailValidation(inputsList[i]);

        if (campoVazio == true){
            fieldInvalid(inputsList[i]);
            habilityErrorSpan(spanList[i]);
            errorMessage(spanList[i],'Este campo é obrigatório');
        }else if(emailCorreto == false){
            fieldInvalid(inputsList[i]);
            habilityErrorSpan(spanList[i]);
            errorMessage(spanList[i],'Informe um e-mail válido');
        }else if(campoVazio == false){
            fieldValid(inputsList[i]);
            disabilityErrorSpan(spanList[i]);
        }else if(emailCorreto == false){
            fieldValid(inputsList[i]);
            disabilityErrorSpan(spanList[i]);
        }
    }  
}