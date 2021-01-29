// MODO NOCTURNO
document.getElementById("mode-dark").addEventListener("click", function () {
  document.getElementById("cuerpo").classList.toggle("cuerpo-dark");
  if (document.getElementById("cuerpo").classList.contains("cuerpo-dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
  seteoDark();
})


function seteoDark() {
  if (localStorage.getItem("dark-mode") === "true") {
    if (document.URL.includes("grabacion.html")) {
      document.getElementById("logo").setAttribute("src", "assets/logo-mobile-modo-noct.svg");
      document.getElementById("mode-dark").textContent = "Modo Diurno";
      document.getElementById("cuerpo").classList.add("cuerpo-dark");
      document.getElementById("cuerpo").classList.remove("cuerpo");
      document.getElementById("camara").setAttribute("src", "assets/camara-modo-noc.svg");
      document.getElementById("pelicula").setAttribute("src", "assets/pelicula-modo-noc.svg");
    } else {
      document.getElementById("logo").setAttribute("src", "assets/logo-mobile-modo-noct.svg");
      document.getElementById("mode-dark").textContent = "Modo Diurno";
      document.getElementById("cuerpo").classList.add("cuerpo-dark");
      document.getElementById("cuerpo").classList.remove("cuerpo");
    }
  } else {
    if (document.URL.includes("grabacion.html")) {
      document.getElementById("logo").setAttribute("src", "assets/logo-mobile.svg");
      document.getElementById("mode-dark").textContent = "Modo Nocturno";
      document.getElementById("cuerpo").classList.remove("cuerpo-dark");
      document.getElementById("cuerpo").classList.add("cuerpo");
      document.getElementById("camara").setAttribute("src", "assets/camara.svg");
      document.getElementById("pelicula").setAttribute("src", "assets/pelicula.svg");
    } else {
      document.getElementById("logo").setAttribute("src", "assets/logo-mobile.svg");
      document.getElementById("mode-dark").textContent = "Modo Nocturno";
      document.getElementById("cuerpo").classList.remove("cuerpo-dark");
      document.getElementById("cuerpo").classList.add("cuerpo");
    }
  }
}