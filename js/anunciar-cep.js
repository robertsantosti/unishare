const endpoint = "https://viacep.com.br/ws/value/json/";

//Definindo as variáveis que passarão por validação

const title = selectId('title')
const cep = document.querySelector('#cep')
const cityEstado = document.querySelector('#city')
const ruaBairro = document.querySelector('#street')
const preco = selectId('price')
const descricao = selectId('description')
const submitButton = selectId('submit')

async function getCpf(pesquisa){
    const CpfList = [];

    const response = await fetch(pesquisa);
    const result = await response.json();

    let rua = result['logradouro'];
    let bairro = result['bairro'];
    let cidade = result['localidade'];
    let estado = result['uf'];

    if(cep.value.length < 8){
        habilityErrorSpan(spanList[1]);
        errorMessage(spanList[1],'CEP inválido')
        fieldInvalid(inputsList[1])
    }else if(result.hasOwnProperty("erro")){
        habilityErrorSpan(spanList[1]);
        errorMessage(spanList[1],'CEP inválido')
        fieldInvalid(inputsList[1])
        fieldInvalid(inputsList[2])
        fieldInvalid(inputsList[3])
    }else{
        fieldValid(inputsList[1])
        fieldValid(inputsList[2])
        fieldValid(inputsList[3])
        disabilityErrorSpan(spanList[1])
        disabilityErrorSpan(spanList[2])
        disabilityErrorSpan(spanList[3])
        CpfList.push(rua, bairro, cidade, estado);
    
        cityEstado.value = cidade + ' , ' + estado;
        ruaBairro.value = rua + ' - Bairro ' + bairro;
    }
}


//VALIDAÇÃO DE PREENCHIMENTO

//Função para seleção de elementos por id
function selectId(elementId) {
    return document.getElementById(elementId);
}

//Pegando lista de inputs
const inputsList = [title, cep, cityEstado, ruaBairro, preco, descricao];
console.log(inputsList)

//Pegando lista de spans para imprimir o erro
const spanList = document.querySelectorAll('.error');
console.log(spanList)

// FUNÇÕES DE VALIDAÇÃO 

//Função que verifica se o campo está vazio
function emptyValidation(element){
    return element.value.trim() === '';
}


//Função que confere se o campo CEP tem ao menos 8 caracteres
function cepValidation(cepElement){
    if(cepElement == cep){
        if (cepElement.value.length != 8){
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

    if (emptyInputs.length==0){
        for (let i=0;i<inputsList.length;i++){
            for (let c=0;c<spanList.length;c++){
                inputsList[i].style.border = '2px solid var(--green)'
                spanList[c].style.display='none';
            }
        }
        //Dar um POST na API com os dados do formulário
        
        console.log('Anunciei o quarto')
    }else{
        formValidation();
    }
})

for(let cont = 0; cont<inputsList.length;cont++){
    if (inputsList[cont] == cep){
        cep.addEventListener('blur',event => {
            event.preventDefault();
            const url = endpoint.replace('value',cep.value);
            getCpf(url)
            formValidation();
        })
    }else{
        inputsList[cont].addEventListener('blur', function (event){
        event.preventDefault();
        formValidation();
    })}
}

function formValidation(){
    for (let i=0;i<inputsList.length;i++){
        let campoVazio = emptyValidation(inputsList[i]);
        if (inputsList[i] == cep){
            if (inputsList[i].value.length <8){
                habilityErrorSpan(spanList[i]);
                errorMessage(spanList[i],'CEP inválido')
                fieldInvalid(inputsList[i])
            }
        }else if(campoVazio == true){
            fieldInvalid(inputsList[i]);
            habilityErrorSpan(spanList[i]);
            errorMessage(spanList[i],'Este campo é obrigatório');
        }else if(campoVazio == false){
            fieldValid(inputsList[i]);
            disabilityErrorSpan(spanList[i]);
        }
    }
}