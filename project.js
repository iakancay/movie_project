const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

const ui = new UI();

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  form.addEventListener("submit", alert);
}

function addFilm(e) {
  const title = titleElement.value.trim();
  const director = directorElement.value.trim();
  const url = urlElement.value.trim();

  if (title === "" || director === "" || url === "") {
    ui.displayMessages("Tüm alanları doldurunuz...", "danger");
  } else {
    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm);
    ui.displayMessages("Film başarıyla eklendi...", "success");
  }

  ui.clearInputs(titleElement, directorElement, urlElement);
  e.preventDefault();
}
