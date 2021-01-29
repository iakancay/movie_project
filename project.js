const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films")

const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });
  cardbody.addEventListener("click", deleteFilm);
  clear.addEventListener("click",clearAllFilms)
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
    storage.addFilmToStorage(newFilm);
    ui.displayMessages("Film başarıyla eklendi...", "success");
  }

  ui.clearInputs(titleElement, directorElement, urlElement);
  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    ui.displayMessages("Film başarıyla silindi...", "success");
  }
}

function clearAllFilms() {
  if(confirm("Are you sure to delete all films?",true)){
     ui.clearAllFilmsFromUI();
  storage.clearAllFilmsFromStorage();
  }
 
  
}
