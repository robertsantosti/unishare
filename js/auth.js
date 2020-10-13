/** ENDPOINTS */
const endpointUsers = `http://api-unishare.herokuapp.com/api/users`;
const endpointLogout = `http://api-unishare.herokuapp.com/api/logout`;

/** ELEMENTS */
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const form = document.querySelector('.form-login');

/** EVENTS */
form.addEventListener('submit',  (event) => {
  event.preventDefault();
  login();

})

async function login() {
  let user;

  await fetch(endpointUsers, {
    mode:"cors",
    method: "GET"
  }).then(response => response.json())
  .then(response => {
    user = response.data.find(item => item.email == inputEmail.value);
  })

  if (!user) {
    alert('Usuário não existe');
    return
  }

  window.location.href = `./principal.html`;

}