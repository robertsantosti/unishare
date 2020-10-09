//Função para seleção de elementos por id
function selectId(element_id) {
    return document.getElementById(element_id);
}

//Definindo as variáveis que passarão por validação
const form = selectId('form-login')
const nome = selectId('nome')
const sobrenome = selectId('sobrenome')
const dataNasc = selectId('date-nasc')
const email = selectId('email')
const senha = selectId('senha')
const senhaConfirm = selectId('senha-confirmation')
const agreeTerms = selectId('agree-terms')
const submitButton = selectId('btn-submit')

//Pegando lista de inputs
const inputsList = document.querySelectorAll("[required]");
console.log(inputsList)

//Pegando lista de spans para imprimir o erro
const spanList = document.querySelectorAll('.error');
console.log(spanList)

// FUNÇÕES DE VALIDAÇÃO 

//Função que verifica se o campo está vazio
function emptyValidation(element){
    return element.value.trim() === '';
}

//Função que verifica se o campo está checked (para o checkbox)
function checkValidation(checkboxElement){
    return checkboxElement.checked == true;
}

//Função que confere se o e-mail é valido
function emailValidation(emailElement){
    var emailValidity = false;
    if (emailElement.validity.valid){
    emailValidity = true;
    }
    return emailValidity;
}

//Função que confere se a senha tem ao menos 8 caracteres
function senhaValidation(passwordElement){
    var senhaValidity = false;
    if (passwordElement.value.length>=8){
        senhaValidity = true;
    }
    return senhaValidity;
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
function habilityErrorSpan(spanListIndex){
    return selectId(spanList[spanListIndex]).style.display='flex';
}

//Função que desabilita o span de erro
function disabilityErrorSpan(spanListIndex){
    return selectId(spanList[spanListIndex]).style.display='none';
}

//Função que valida o campo 
function fieldValid(inputsListIndex){
    return selectId(inputsList[inputsListIndex]).style.border = '2px solid var(--green)'
}

//Função que define a mensagem de erro
function errorMessage(message){
    return span.innerHTML = message;
}


//Evento de clique no botão de submit
submitButton.addEventListener('click', function (event){
    event.preventDefault();

    let emptyInputs = emptyFields(inputsList);
    console.log(emptyInputs);

})
//     let checkValid = checkValidation('agree-terms');
//     console.log(checkValid)

//     let emailValid = emailValidation('email');
//     console.log(emailValid)

//     let senhaValid = senhaValidation('senha');
//     console.log(senhaValid)

//     if (inputsVazios.length==0 && checkValid==true 
//         && emailValid==true && senhaValid==true){
//         for (let i=0;i<listaInputs.length;i++){
//             listaInputs[i].style.border = '2px solid var(--green)'
//             spanList[i].style.display='none';
//         }
//         //Envie o formulário
//     }else{
//         if (empt('nome')){
//             listaInputs[0].style.border ='2px solid red'
//             spanList[0].style.display='flex';
//             spanList[0].innerHTML = 'Este campo é obrigatório'
//         }else{
//             listaInputs[0].style.border = '2px solid var(--green)'
//             spanList[0].style.display='none';
//         }
//         if (empt('sobrenome')){
//             listaInputs[1].style.border ='2px solid red'
//             spanList[1].style.display='flex';
//             spanList[1].innerHTML = 'Este campo é obrigatório'
//         }else{
//             listaInputs[1].style.border = '2px solid var(--green)'
//             spanList[1].style.display='none';
//         }
//         if (empt('dbirthdate')){
//             listaInputs[2].style.border ='2px solid red'
//             spanList[2].style.display='flex';
//             spanList[2].innerHTML = 'Este campo é obrigatório'
//         }else{
//             listaInputs[2].style.border = '2px solid var(--green)'
//             spanList[2].style.display='none';
//         }
//         if (empt('email')){
//             listaInputs[3].style.border ='2px solid red'
//             spanList[3].style.display='flex';
//             spanList[3].innerHTML = 'Este campo é obrigatório'
//         }else if (emailValid == false){
//             listaInputs[3].style.border ='2px solid red'
//             spanList[3].style.display='flex';
//             spanList[3].innerHTML = 'Informe um e-mail válido'
//         }else{
//             listaInputs[3].style.border = '2px solid var(--green)'
//             spanList[3].style.display='none';
//         }
//         if (empt('senha')){
//             listaInputs[4].style.border ='2px solid red'
//             spanList[4].style.display='flex';
//             spanList[4].innerHTML = 'Este campo é obrigatório'
//         }else if (senhaValid == false){
//             listaInputs[4].style.border ='2px solid red'
//             spanList[4].style.display='flex';
//             spanList[4].innerHTML = 'Sua senha deve ter no mínimo 8 caracteres'
//         }else{
//             listaInputs[4].style.border = '2px solid var(--green)'
//             spanList[4].style.display='none';
//         }
//     }       
//     //Trabalhando na concordância com os termos de uso
//     if (checkValidation('agree-terms')==false){
//         spanList[5].style.display='flex';
//         spanList[5].innerHTML = 'Você deve concordar com os termos de uso'
//     }else {
//         spanList[5].style.display='none';
//     }
// })