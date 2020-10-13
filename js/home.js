const roomsEndpoint = `https://api-unishare.herokuapp.com/api/rooms`;
const endpointRooms = `https://api-unishare.herokuapp.com/api/rooms/room_id`;

const roomWrapper = document.querySelector('.room-wrapper');

const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', async function (event) {
  event.preventDefault();
  const input = document.querySelector("#search");
  roomWrapper.innerHTML = ``;
  await getRooms(input.value);
});

async function getRooms(search = null) {
  let rooms = [];
  
  let endpoint = (search) ? `${roomsEndpoint}?city=${search}` : roomsEndpoint;

  await fetch(endpoint, {
    method:"GET",
    mode: "cors",
  })
  .then(response => {return response.json()})
  .then(response => {
    rooms = response.data;
  });

  rooms.forEach(room => {
    let div = document.createElement('div')
    let pictures = room.pictures.split(',')
    div.classList.add('room')
    div.setAttribute('onClick', `setRoomStorage(${room._id})`)
    div.innerHTML = `
      <div class="room-picture" style="background-image: url(${pictures[0]})"></div>
      <div class="description">
        <a class="title" href="./detalhe-anuncio.html">${room.location}, ${room.city}</a>
        <p class="value">R$${room.value.toFixed(2)}</p>
      </div>
    `;

    roomWrapper.appendChild(div);
  })
  
  return;
}

async function setRoomStorage(room_id) {
  await fetch(endpointRooms.replace('room_id', room_id), {
    method:"GET",
    mode: "cors",
  }).then(response => {return response.json()})
  .then(response => {
    localStorage.setItem('room_id', response.data._id);
  });
}