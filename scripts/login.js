//Função para seleção de elementos por id
function selectId(elementId) {
    return document.getElementById(elementId);
}

//Definindo as variáveis que passarão por validação
const form = selectId('form-login')
const email = selectId('email')
const senha = selectId('senha')
const loginButton = selectId('btn-login')
const spanError = selectId('error-data')

const inputsList = [email, senha]
// FUNÇÕES DE VALIDAÇÃO 

//Função que confere se o e-mail está no BD
function emailValidation(emailElement){

}

//Função que confere se a senha está correta segundo o BD
function emailValidation(senhaElement){

}


//Função que confere se o elemento email já existe no Banco de Dados

// const url = 'https://xxxxxxxxxxxxxxx'
// const endpointEmail = url.replace('','users')

//Validação com a API
async function getEmail(){
    let emailsApi = [];

    await fetch(endpointUsers, {
        method: 'GET',
        mode: 'cors',
    }).then(res => { return res.json()})
    .then(data => {
        for (let i=0;i<data.data;i++){
           emailsApi.push(data[i].email); 
        }
    });

    if (email.value in emailsApi){
        return true;
    }else{
        return false;
    }
}

//Função que valida o e-mail
function emailApiValidation(emailElement){
    if(emailElement == email){
        if (getEmail() == true){
            return true;
        }else{
            return false;
        }
    }
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
loginButton.addEventListener('click', function (event){
    event.preventDefault();

    let emailValid = emailValidation(email);
    console.log(emailValid)

    let senhaValid = senhaValidation(senha);
    console.log(senhaValid)

    let emailApiValid = emailApiValidation(email);

    if (emailValid && senhaValid && emailApiValid){
        email.style.border = '2px solid var(--green)'
        senha.style.border = '2px solid var(--green)'
        span.style.display='none';
        
        
        
        
        //Fazer o login do usuário





        console.log('Fiz o login')
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
    let emailCorreto = emailValidation(email);
    let senhaCorreta = senhaValidation(senha);
    let emailApiCorreto = emailApiValidation(email);
    if(emailCorreto == false || senhaCorreta == false){
        fieldInvalid(senha);
        fieldInvalid(email);
        habilityErrorSpan(spanError);
        errorMessage(spanError,'E-mail ou senha inválidos');
    }else if (emailApiCorreto == false){
        fieldInvalid(senha);
        fieldInvalid(email);
        habilityErrorSpan(spanError);
        errorMessage(spanError,'Este e-mail não possui uma conta');
    }else{
        fieldValid(email);
        fieldValid(senha);
        disabilityErrorSpan(spanError);
    }
}