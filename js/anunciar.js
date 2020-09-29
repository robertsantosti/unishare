const inputFiles = document.querySelector("#files");
const formAnunciar = document.querySelector("#form-anunciar");
const count = document.querySelector("#count");

inputFiles.addEventListener("change", event => {
  event.preventDefault();

  if (inputFiles.files.length === 0) {
    return;
  }

  count.innerHTML = `${inputFiles.files.length} arquivos adicionados.`;
  return;
});

formAnunciar.addEventListener("reset", event => {
  event.preventDefault();

  count.firstChild.nodeValue = null;
  return;
});

formAnunciar.addEventListener("submit", event => {
  event.preventDefault();

  for (let i = 0; i < formAnunciar.elements.length; i++) {
    if (formAnunciar.elements[i].value === "") {
      alert("Preencha todos os campos!");
      return;
    }
  }

  /** Chamada a API para salvar anuncio */
});
