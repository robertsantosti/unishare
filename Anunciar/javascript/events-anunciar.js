const fi = document.getElementById("files");
var c;

function count() {
  c = fi.files.length;
  document.getElementById("count").innerHTML =
    " " + c + " Arquivos adicionados";
}

function modifyText() {
  var t2 = document.getElementById("count");
  t2.firstChild.nodeValue = " ";
}

function load() {
  var el = document.getElementById("clear");
  el.addEventListener("click", modifyText);
}

function validar() {
  var title = anuncie.title.value;
  var city = anuncie.city.value;
  var street = anuncie.street.value;
  var price = anuncie.price.value;
  var files = anuncie.images.value;

  if (title == "" || city == "" || street == "" || price == "" || files == "") {
    alert("Preencha todos os campos");
    return false;
  }
}
