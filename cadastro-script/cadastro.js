function selectId(id) {
    return document.getElementById(id);
}

const form = selectId('form-login')
const nome = selectId('nome')
const submitButton = selectId('btn-submit')
const email = selectId('email')
const senha = selectId('senha')
const agreeTerms = selectId('agree-terms')

//Pegando lista de spans para imprimir o erro
const spanList = document.querySelectorAll('.error');
console.log(spanList)

//Pegando lista de inputs
const listaInputs = document.querySelectorAll("[required]");
console.log(listaInputs)

//Função que transforma NodeList em lista de ids
function listIds(array){
    var listIds = [];
    for (i = 0; i<array.length;i++){
        listIds.push(array[i].id);
    }
    console.log(listIds)
}


//Função que verifica se o campo está vazio
function empty(id){
    if (['nome', 'sobrenome','dbirthdate','email','senha','agree-terms'].includes(id)){
        return selectId(id).value.trim() === '';
    }
}

//Função que verifica se o campo está checked
function checkValidation(id){
    if (id == 'agree-terms'){
        return selectId(id).checked == true;
    }
}


//Função que define a mensagem de erro
function errorMessage(message){
    span.innerHTML += '<p>' + message + '</p>';
}


//Função que habilita o span de erro
function habilityErrorSpan(spanId){
    return selectId(spanId).style.display='flex';
}

//Função que desabilita o span de erro
function disabilityErrorSpan(spanId){
    return selectId(spanId).style.display='none';
}


//Função que confere se há inputs vazios e retorna 
//array com os vazios
function emptyFields(array){
    var listaVazios = [];
    for (let i=0;i<array.length;i++){
        if(empty(array[i].id)){
            listaVazios.push(array[i]);
        }
    }
    return listaVazios;
}

//Função que confere se o e-mail é valido
function emailValidation(ID){
    var emailValidity = false;
    if (selectId(ID).validity.valid){
    emailValidity = true;
    }
    return emailValidity;
}

//Função que confere se a senha tem ao 
//menos 8 caracteres
function senhaValidation(ID){
    var senhaValidity = false;
    if (ID.value.length>=8){
        senhaValidity = true;
    }
    return senhaValidity;
}

// //Função que habilita span para um campo que está vazio
// function printError(id, message){

// }

function empt (id){
    return selectId(id).value.trim() === '';
}

//Evento de clique no botão de submit
submitButton.addEventListener('click', function (event){
    event.preventDefault();

    let inputsVazios = emptyFields(listaInputs);
    console.log(inputsVazios)

    let checkValid = checkValidation('agree-terms');
    console.log(checkValid)

    let emailValid = emailValidation('email');
    console.log(emailValid)

    let senhaValid = senhaValidation(senha);
    console.log(senhaValid)

    if (inputsVazios.length==0 && checkValid==true 
        && emailValid==true && senhaValid==true){
        for (let i=0;i<listaInputs.length;i++){
            listaInputs[i].style.border = '2px solid var(--green)'
            spanList[i].style.display='none';
        }
        
        //Envie o formulário
    }else if (inputsVazios.length>0){
        if (empt('nome')){
            listaInputs[0].style.border ='2px solid red'
            spanList[0].style.display='flex';
            spanList[0].innerHTML = 'Este campo é obrigatório'
        }else{
            listaInputs[0].style.border = '2px solid var(--green)'
            spanList[0].style.display='none';
        }
        if (empt('sobrenome')){
            listaInputs[1].style.border ='2px solid red'
            spanList[1].style.display='flex';
            spanList[1].innerHTML = 'Este campo é obrigatório'
        }else{
            listaInputs[1].style.border = '2px solid var(--green)'
            spanList[1].style.display='none';
        }
        if (empt('dbirthdate')){
            listaInputs[2].style.border ='2px solid red'
            spanList[2].style.display='flex';
            spanList[2].innerHTML = 'Este campo é obrigatório'
        }else{
            listaInputs[2].style.border = '2px solid var(--green)'
            spanList[2].style.display='none';
        }
        if (empt('email')){
            listaInputs[3].style.border ='2px solid red'
            spanList[3].style.display='flex';
            spanList[3].innerHTML = 'Este campo é obrigatório'
        }else{
            listaInputs[3].style.border = '2px solid var(--green)'
            spanList[3].style.display='none';
        }
        if (empt('senha')){
            listaInputs[4].style.border ='2px solid red'
            spanList[4].style.display='flex';
            spanList[4].innerHTML = 'Este campo é obrigatório'
        }else{
            listaInputs[4].style.border = '2px solid var(--green)'
            spanList[4].style.display='none';
        }
    }    
    //Trabalhando na concordância com os termos de uso
    if (checkValidation('agree-terms')==false){
        spanList[5].style.display='flex';
        spanList[5].innerHTML = 'Você deve concordar com os termos de uso'
    }else {
        spanList[5].style.display='none';
    }
});

