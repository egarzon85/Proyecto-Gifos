// PAGE START

window.onload = start;

function start() {
    seteoDark();
    misgifos();
    trending()
}

var offsetSearch = 0;
const desktop = 820;
var offsetFav = 12;


//API KEY
const apiKey = "qLba7FFANvzs3GO2Z3HVNoLLYvGu4Cub";

var arregloMisGifos = [];
if (localStorage.getItem("misGifos") != null) {
  arregloMisGifos = JSON.parse(localStorage.getItem("misGifos"));
}

// MIS GIFOS
let seccionMisGifos = document.createElement("section");
document.getElementById("main").appendChild(seccionMisGifos);
seccionMisGifos.setAttribute("id", "misgifos");
seccionMisGifos.setAttribute("class", "misgifos");
document.getElementById("mis-gifos").addEventListener("click", misgifos);
function misgifos() {
  document.getElementById("ver-mas-fav").style.display = "none";

  if (arregloMisGifos.length == 0) {
    document.getElementById("misgif-sincontenido").style.display = "block";
    document.getElementById("text-mg-sc").style.display = "block";
  } else {
    document.getElementById("misgif-sincontenido").style.display = "none";
    document.getElementById("text-mg-sc").style.display = "none";
  }
  /* eliminarGrid(); */
  if (screen.width < desktop) {
    mostrarMenu();
  }
  misGifos();
}





let j = 0;
function misGifos() {
  for (i = 0; i < arregloMisGifos.length; i++) {
    let buscarId = arregloMisGifos[i];
    const apiId = `https://api.giphy.com/v1/gifs/${buscarId}?api_key=qLba7FFANvzs3GO2Z3HVNoLLYvGu4Cub`;

    fetch(apiId)
      .then(response => {
        return response.json();
      })
      .then(json => {
        let gifMisGifos = document.createElement("img");
        if (screen.width >= desktop) {
          let hoverMisGifos = document.createElement("div");
          document.getElementById("grid-srch").appendChild(hoverMisGifos);
          hoverMisGifos.setAttribute("id", "hoverM" + j)
          hoverMisGifos.setAttribute("class", "contenedorMisG");
          document.getElementById("hoverM" + j).appendChild(gifMisGifos);
          hoverCardsM(json.data.id, json.data.images.original.url, json.data.username, json.data.title, j);
          j += 1;
        } else {
          document.getElementById("grid-srch").appendChild(gifMisGifos);
        }
        /* gifMisGifos.setAttribute("src", "/assets/trabajando.png") */
        gifMisGifos.setAttribute("class", "img-misg");
        gifMisGifos.setAttribute("id", json.data.id);
        gifMisGifos.setAttribute("src", json.data.images.original.url);
        gifMisGifos.setAttribute("title", json.data.title);
        gifMisGifos.setAttribute("alt", json.data.username);
        gifMisGifos.addEventListener("click", function () {
          if (screen.width <= desktop) {
            abrirGifosMax();
          }
        });
      })
      .catch(err => console.log(err));
  }
}

// GYPHY TRENDING CARROUSEL
function trending() {
  const apiTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`;

  fetch(apiTrending)
      .then(response => {
          return response.json();
      })
      .then(json => {
          
          for (i = 0; i < 25; i++) {
              function objetoTrending(url, username, title, id) {
                  this.url = url;
                  this.username = username;
                  this.title = title;
                  this.id = id;
              }
              let usernameCompleto;
              if (json.data[i].username.length != 0) {
                  usernameCompleto = json.data[i].username;
              } else {
                  usernameCompleto = "Usuario desconocido";
              }
              let objetoArrayT = new objetoTrending(json.data[i].images.original.url, usernameCompleto, json.data[i].title, json.data[i].id)
              arregloGifsTrending.push(objetoArrayT)
          }
          
          for (i = 0; i < 25; i++) {
              let gifTrending = document.createElement("img");
              if (screen.width >= desktop) {
                  let hoverTrending = document.createElement("div");
                  document.getElementById("trndng-view").appendChild(hoverTrending);
                  hoverTrending.setAttribute("id", "hoverT" + i)
                  hoverTrending.setAttribute("class", "contenedorTrending");
                  document.getElementById("hoverT" + i).appendChild(gifTrending);
                  hoverCardsT(arregloGifsTrending[i].id, arregloGifsTrending[i].url, arregloGifsTrending[i].title, arregloGifsTrending[i].username, i);
              } else {
                  document.getElementById("trndng-view").appendChild(gifTrending);
              }
              gifTrending.setAttribute("src", "assets/loading.png")
              gifTrending.setAttribute("class", "img-trndng");
              gifTrending.setAttribute("id", arregloGifsTrending[i].id);
              gifTrending.setAttribute("src", arregloGifsTrending[i].url);
              gifTrending.setAttribute("title", arregloGifsTrending[i].title);
              gifTrending.setAttribute("alt", arregloGifsTrending[i].username);
              if (screen.width >= desktop) {
                  precargaFavTre(arregloGifsTrending[i].id, i);
              }
              gifTrending.addEventListener("click", function () {
                  if (screen.width <= desktop) {
                      abrirGifosMax();
                  }
              });
          }
      })
      .catch(err => console.log(err));
}
let arregloGifsTrending = [];

// TRENDING SCROLL
document.getElementById("scroll-right").addEventListener("click", function () {
  if (screen.width >= desktop && screen.width < 1280) {
    document.getElementById("trndng-view").scrollLeft += 658;
  }
  if ((screen.width >= 1280)) {
    document.getElementById("trndng-view").scrollLeft += 1158;
  }
})
document.getElementById("scroll-left").addEventListener("click", function () {
  if (screen.width >= desktop && screen.width < 1280) {
    document.getElementById("trndng-view").scrollLeft -= 658;
  }
  if ((screen.width >= 1280)) {
    document.getElementById("trndng-view").scrollLeft -= 1158;
  }
})