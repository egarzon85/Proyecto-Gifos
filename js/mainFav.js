// PAGE START

window.onload = start;

function start() {
    seteoDark();
    trending();
}

var offsetSearch = 0;
const desktop = 820;
var offsetFav = 12;


//API KEY
const apiKey = "qLba7FFANvzs3GO2Z3HVNoLLYvGu4Cub";

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



// ELIMINAR ELEMENTOS CREADOS
function eliminarGrid() {
    let borraGridSearch = document.getElementById("grid-srch");
    while (borraGridSearch.firstChild) {
      borraGridSearch.removeChild(borraGridSearch.firstChild);
    }
  }
  function eliminarSugerencias() {
    while (document.getElementById("sugerir").firstChild) {
      document.getElementById("sugerir").removeChild(document.getElementById("sugerir").firstChild);
    }
  }


// SCROLL VERTICAL
window.onscroll = function () {
  if (screen.width >= desktop) {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 10) {
      document.getElementById("header").style.boxShadow = "0 2px 4px 1px rgba(156,175,195,0.55)";
      document.getElementById("li-agregar-gif").style.visibility = "hidden";
      if (screen.width >= 1280 && scroll > 350) {
        document.getElementById("nav-search").style.visibility = "hidden";
      } else {
        document.getElementById("nav-search").style.visibility = "hidden";
      }
    } else {
      document.getElementById("header").style.boxShadow = "";
      document.getElementById("li-agregar-gif").style.visibility = "visible";
      document.getElementById("nav-search").style.visibility = "hidden";
    }
  }
}

