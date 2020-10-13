const roomsEndpoint = `https://api-unishare.herokuapp.com/api/rooms`;
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
    div.innerHTML = `
      <div class="room-picture" style="background-image: url(${pictures[0]})"></div>
      <div class="description">
        <p class="title">${room.location}, ${room.city}</p>
        <p class="value">R$${room.value.toFixed(2)}</p>
      </div>
    `;

    roomWrapper.appendChild(div);
  })
  
  return;
}