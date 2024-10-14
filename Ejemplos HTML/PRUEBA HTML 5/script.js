document.addEventListener("DOMContentLoaded", function(event) {
    var contenidoActual = 0;
    var contenidos = document.getElementsByClassName("contenido");
    setInterval(function() {
      contenidos[contenidoActual].classList.remove("activo");
      contenidoActual = (contenidoActual + 1) % contenidos.length;
      contenidos[contenidoActual].classList.add("activo");
    }, 5000); // Cambiar cada 5 segundos (5000 milisegundos)
  });
  