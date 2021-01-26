const cardBody=document.querySelector(".card-body")
function UI() {}

UI.prototype.addFilmToUI = function (newFilm) {
  const filmList = document.getElementById("films");
  filmList.innerHTML += `
    <tr>
     <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" style="width:150px;height:200px;object-fit:cover"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`;
};

UI.prototype.clearInputs = function (e1, e2, e3) {
  e1.value = "";
  e2.value = "";
  e3.value = "";
};
UI.prototype.displayMessages=function(message,type){
    div=document.createElement("div");
    div.className=`alert alert-${type}`;
    div.textContent=`${message}`;
    cardBody.appendChild(div);

    setTimeout(function () {
     div.remove()   
    },1000)
    
}
