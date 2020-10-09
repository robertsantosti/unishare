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
const inputsList = [nome, sobrenome, dataNasc, email, senha, senhaConfirm, agreeTerms];
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
    if (checkboxElement == agreeTerms){
        return checkboxElement.checked;
    }
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

//Função que confere se a senha tem ao menos 8 caracteres
function senhaValidation(passwordElement){
    if(passwordElement == senha){
        if (passwordElement.value.length>=8){
            return true;
        }else{
            return false;
        }
    }    
}

//Função que valida a senha de confirmação
function senhaConfirmationValidation(passwordConfirmationElement){
    if(passwordConfirmationElement == senhaConfirm){
        if (senha.value == passwordConfirmationElement.value){
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

//Função que confere se o elemento email já existe no Banco de Dados


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

    let senhaValid = senhaValidation(senha);
    console.log(senhaValid)

    let senhaConfirmValid = senhaConfirmationValidation(senhaConfirm);
    console.log(senhaConfirmValid)

    let checkValid = checkValidation(agreeTerms);
    console.log(checkValid)

    if (emptyInputs.length==0 && checkValid 
        && emailValid && senhaValid && senhaConfirmValid 
        //adicionar condicao de email não repetido no BD//
        ){
        for (let i=0;i<inputsList.length;i++){
            for (let c=0;c<spanList.length;c++){
                inputsList[i].style.border = '2px solid var(--green)'
                spanList[c].style.display='none';
            }
        }
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
    for (let i=0;i<inputsList.length;i++){
        let campoVazio = emptyValidation(inputsList[i]);
        let emailCorreto = emailValidation(inputsList[i]);
        let senhaCorreta = senhaValidation(inputsList[i]);
        let senhaConfirmCorreta = senhaConfirmationValidation(inputsList[i]);
        let campoChecado = checkValidation(inputsList[i]);
        if (campoVazio == true){
            fieldInvalid(inputsList[i]);
            habilityErrorSpan(spanList[i]);
            errorMessage(spanList[i],'Este campo é obrigatório');
        }else if(emailCorreto == false){
            fieldInvalid(inputsList[i]);
            habilityErrorSpan(spanList[i]);
            errorMessage(spanList[i],'Informe um e-mail válido');
        }else if(senhaCorreta == false){
            fieldInvalid(inputsList[i]);
            habilityErrorSpan(spanList[i]);
            errorMessage(spanList[i],'Sua senha deve ter no mínimo 8 caracteres');
        }else if(senhaConfirmCorreta == false){
            fieldInvalid(inputsList[i]);
            habilityErrorSpan(spanList[i]);
            errorMessage(spanList[i],'As senhas digitadas não são iguais');
        }else if(campoChecado == false){
            fieldInvalid(inputsList[i]);
            habilityErrorSpan(spanList[i]);
            errorMessage(spanList[i],'Você deve condcordar com os termos de uso');
        }else if(campoVazio == false){
            fieldValid(inputsList[i]);
            disabilityErrorSpan(spanList[i]);
        }else if(emailCorreto == false){
            fieldValid(inputsList[i]);
            disabilityErrorSpan(spanList[i]);
        }else if(senhaCorreta == false){
            fieldValid(inputsList[i]);
            disabilityErrorSpan(spanList[i]);
        }else if(senhaConfirmCorreta == false){
            fieldValid(inputsList[i]);
            disabilityErrorSpan(spanList[i]);
        }else if(campoChecado == false){
            fieldValid(inputsList[i]);
            disabilityErrorSpan(spanList[i]);
        }
    }  
}


   
//         
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