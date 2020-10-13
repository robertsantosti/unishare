const endpointUser = `https://api-unishare.herokuapp.com/api/users/user_id`;
const endpointRooms = `https://api-unishare.herokuapp.com/api/rooms/room_id`;
const likedWrapper = document.querySelector('.liked-wrapper');

const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const inputBio = document.querySelector("#bio");
const picture = document.querySelector(".profile-picture");

async function load() {
  let url = endpointUser.replace('user_id', localStorage.getItem('user_id'));

  let user;

  await fetch(url, {
    mode: 'cors',
    method: 'GET',
  }).then(res => res.json())
  .then(res => user = res.data);

  inputName.value = user.name;
  inputEmail.value = user.email;
  inputPhone.value = user.phone;
  inputBio.value = user.bio;

  picture.setAttribute('style', `background-image:url(${user.avatar})`);

  await getRooms(user.liked);
}

async function getRooms(data) {
  let rooms = [];
  
  data.forEach(async function (room_id) {
      await fetch(endpointRooms.replace('room_id', room_id), {
        method:"GET",
        mode: "cors",
      }).then(response => {return response.json()})
      .then(response => {
         let room = response.data;

        let div = document.createElement('div')
        let pictures = room.pictures.split(',')
        div.classList.add('liked')
        div.innerHTML = `
          <div class="liked-picture" style="background-image: url(${pictures[0]})"></div>
          <div class="description">
            <p class="title">${room.location}, ${room.city}</p>
            <p class="value">R$${room.value.toFixed(2)}</p>
          </div>
        `;

        likedWrapper.appendChild(div);
      });
  });

  return;
}