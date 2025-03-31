function inicializarCarrusel() {
    const contenedor = document.querySelector('.inicio-carrusel-contenedor');
    const elementos = document.querySelectorAll('.iniciocosascarrusel');
    const botonAnterior = document.getElementById('anterior');
    const botonSiguiente = document.getElementById('siguiente');
    let indiceActual = 0;
  
// Función para avanzar al siguiente elemento
function avanzarCarrusel() {
    indiceActual = (indiceActual + 1) % elementos.length;
    contenedor.scrollLeft = elementos[indiceActual].offsetWidth * indiceActual;
  }

  // Iniciar el temporizador
  function iniciarTemporizador() {
    temporizador = setInterval(avanzarCarrusel, 6000); // Cambia cada 3 segundos (3000 ms)
  }

  // Detener el temporizador
  function detenerTemporizador() {
    clearInterval(temporizador);
  }

  // Event listeners para los botones
    botonSiguiente.addEventListener('click', () => {
      indiceActual = (indiceActual + 1) % elementos.length;
      contenedor.scrollLeft = elementos[indiceActual].offsetWidth * indiceActual;
    });
  
    botonAnterior.addEventListener('click', () => {
      indiceActual = (indiceActual - 1 + elementos.length) % elementos.length;
      contenedor.scrollLeft = elementos[indiceActual].offsetWidth * indiceActual;
    });
  // Iniciar el carrusel automáticamente al cargar la página
  iniciarTemporizador();  
}