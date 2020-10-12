const endpoint = "https://viacep.com.br/ws/value/json/";

const ruaBairro = document.querySelector('#street')
const cityEstado = document.querySelector('#city')


const inputList =  ruaBairro;

ruaBairro.addEventListener('blur',event => {
    event.preventDefault();

    const url = endpoint.replace('value',ruaBairro.value);
    console.log(url)

    const location = this.getCpf(url);
    

})


async function getCpf(url){
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

