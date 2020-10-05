function selectId(id) {
    return document.getElementById(id);
}

function empty(id){
    return selectId(id).value.trim() === '';
}

function checked(id){
    return selectId(id).checked == false;
}

function errorMessage(message){
    errorListUl.innerHTML += '<li>' + message + '</li>';
}

function habilityErrorList(errorListId){
    return selectId(errorListId).style.display='flex';
}



// function selectField(id){
//     let 
// }


const form = selectId('form-login')
const nome = selectId('nome')
const submitButton = selectId('btn-submit')
const errorListUl = document.querySelector('#error-list ul');

submitButton.addEventListener('click', function (event){
    event.preventDefault();

    //Se o formulário estiver correto, envie o formulário

    
    //Se não, habilite a div error-list e aponte os erros
    habilityErrorList('error-list');

    errorListUl.innerHTML = '';

    if(empty('nome')){
        errorMessage('Campo <b>NOME</b> não preenchido');

    }

    if(empty('sobrenome')){
        errorMessage('Campo <b>SOBRENOME</b> não preenchido');
    }

    if(empty('dbirthdate')){
        errorMessage('Campo <b>DATA DE NASCIMENTO</b> não preenchido');
    }

    if(empty('email')){
        errorMessage('Campo <b>E-MAIL</b> não preenchido');
    }

    if(empty('senha')){
        errorMessage('Campo <b>SENHA</b> não preenchido');
    }

    if(checked('agree-terms')){
        errorMessage('Você deve <b>CONCORDAR COM OS TERMOS</b>');
    }

})



const fields = document.querySelectorAll("[required]")

console.log(fields);

