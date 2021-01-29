// FAVORITOS
favoritos ()
function favoritos() {
  offsetFav = 12;
  if (arregloFavoritos.length <= 12) {
    document.getElementById("ver-mas-fav").style.display = "none";
    offsetFav = arregloFavoritos.length;
  }
  if (arregloFavoritos.length !== 0) {
    document.getElementById("fav-sincontenido").style.display = "none";
    document.getElementById("text-fav-sc").style.display = "none";
  } else {
    document.getElementById("fav-sincontenido").style.display = "block";
    document.getElementById("text-fav-sc").style.display = "block";
  }
  eliminarGrid();
  vistaFavoritos(offsetFav);
} 

// GUARDAR FAVORITOS
function vistaFavoritos(offsetFav) {
  for (i = 0; i < offsetFav; i++) {
    let gifFav = document.createElement("img");
    if (screen.width >= desktop) {
      let hoverFavoritos = document.createElement("div");
      document.getElementById("grid-srch").appendChild(hoverFavoritos);
      hoverFavoritos.setAttribute("id", "hoverF" + i)
      hoverFavoritos.setAttribute("class", "contenedorFavoritos");
      document.getElementById("hoverF" + i).appendChild(gifFav);
      hoverCardsF(arregloFavoritos[i].id, arregloFavoritos[i].url, arregloFavoritos[i].title, arregloFavoritos[i].username, i);
    } else {
      document.getElementById("grid-srch").appendChild(gifFav);
    }
    gifFav.setAttribute("src", "assets/trabajando.png")
    gifFav.setAttribute("class", "img-fav");
    gifFav.setAttribute("id", arregloFavoritos[i].id);
    gifFav.setAttribute("src", arregloFavoritos[i].url);
    gifFav.setAttribute("title", arregloFavoritos[i].title);
    gifFav.setAttribute("alt", arregloFavoritos[i].username);
    if (screen.width >= desktop) {
      precargaFavFav(arregloFavoritos[i].id, i)
    }
    gifFav.addEventListener("click", function () {
      if (screen.width <= desktop) {
        abrirGifosMax();
      }
    })
  }
}

// VER MAS FAV
document.getElementById("ver-mas-fav").addEventListener("click", function () {
  if (offsetFav + 12 < arregloFavoritos.length) {
    offsetFav = offsetFav + 12;
  } else {
    offsetFav = arregloFavoritos.length;
    document.getElementById("ver-mas-fav").style.display = "none";
  }
  eliminarGrid();
  vistaFavoritos(offsetFav);
}) 