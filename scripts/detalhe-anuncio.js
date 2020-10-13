const idRoom = "RECEBE DO DIRECIONAMENTO DA PÁGINA BUSCAR"
const idUser = "RECEBE DO DIRECIONAMENTO DA PÁGINA BUSCAR"
//integrar páginas pelo ID? Como direcionar? Abaixo exemplo com ID:
const endpointRoom = `https://api-unishare.herokuapp.com/api/rooms?_id=5f84d4022864ef53f0e1197c`;
const endpointUser = `https://api-unishare.herokuapp.com/api/users?_id=5f84db83c8dd941f903a00c2`;

async function getRooms() {
  let rooms = [];
  
  let tituloAnuncio = document.getElementById('titulo-anuncio');
  let dadosAnuncio = document.getElementById('dados-anuncio');
  let fotoPrincipal = document.getElementById('foto1');
  let foto2 = document.getElementById('foto2');
  let foto3 = document.getElementById('foto3');

  await fetch(endpointRoom
    ,{
    method: "GET",
    mode: "cors"
  }
  )
  .then(res => {return res.json()})
  .then(data => { rooms = data.data });
  let pictures = rooms[0].pictures.split(',');

  await fetch(endpointUser
    ,{
    method: "GET",
    mode: "cors"
  }
  )
  .then(res => {return res.json()})
  .then(data => { users = data.data });

    tituloAnuncio.innerHTML = `
    <div class="text-anuncio">
      <h1>${rooms[0].title}</h1>
      <h2 id="salvar"><span class="far fa-heart" id="heart"></span> Salvar</h2>
    </div>
    <h2>${rooms[0].location}, ${rooms[0].city}</h2>`

  //FALTA ASSOCIAR DADOS DO PROPRIETÁRIO DO IMÓVEL AO IMÓVEL EM QUESTÃO
    dadosAnuncio.innerHTML = `
    <h1>R$${rooms[0].value},00/mês</h1>
    <h2>Detalhes:</h2>
    <p>
      ${rooms[0].description}
    </p>
    <h2>Contato:</h2>
    <p>
      <strong>Responsável: </strong>${users[0].name}</br>
      <strong>e-mail: </strong>${users[0].email}
    </p>`

    fotoPrincipal.style.backgroundImage = `url(${pictures[0]})`;
    foto2.style.backgroundImage = `url(${pictures[1]})`;
    foto3.style.backgroundImage = `url(${pictures[2]})`;

  // adicionar/remover classe favoritos (salvar/salvo)
  let salvar = document.getElementById('salvar');
  salvar.addEventListener("click", () => {
    let liked = document.getElementById('heart');
    
    if (liked.classList.contains("far")) {
      salvar.innerHTML = `<span class="fas fa-heart" id="heart" aria-hidden="true"></span> Salvo`;
      return;
    }else if(liked.classList.contains("fas")){  
      salvar.innerHTML = `<span class="far fa-heart" id="heart" aria-hidden="true"></span> Salvar`;
      return;
    }
    liked = document.getElementById('heart');

    // Falta DIRECIONAR/INSERIR quarto aos favoritos do usuário
  }); 
}
getRooms();