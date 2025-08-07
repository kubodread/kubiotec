function inicializarCarrusel() {
    const contenedor = document.querySelector('.inicio-carrusel-contenedor');
    const elementos = document.querySelectorAll('.iniciocosascarrusel');
    const botonAnterior = document.getElementById('anterior');
    const botonSiguiente = document.getElementById('siguiente');
    let indiceActual = 0;
    let temporizador;
    let temporizadorInactividad; // Temporizador para detectar inactividad
    const tiempoInactividad = 10000; // 10 segundos de inactividad
  
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

  function reiniciarTemporizadorAutomatico() {
    detenerTemporizadorInactividad(); // Limpiar cualquier temporizador de inactividad previo
    iniciarTemporizador();
}

function iniciarTemporizadorInactividad() {
  temporizadorInactividad = setTimeout(reiniciarTemporizadorAutomatico, tiempoInactividad);
}
function detenerTemporizadorInactividad() {
  clearTimeout(temporizadorInactividad);
}

  // Event listeners para los botones
    botonSiguiente.addEventListener('click', () => {
      detenerTemporizador();
      detenerTemporizadorInactividad(); // Detener cualquier temporizador de inactividad
      indiceActual = (indiceActual + 1) % elementos.length;
      contenedor.scrollLeft = elementos[indiceActual].offsetWidth * indiceActual;
      iniciarTemporizadorInactividad(); // Iniciar el temporizador de inactividad
    });
  
    botonAnterior.addEventListener('click', () => {
      detenerTemporizador();
      detenerTemporizadorInactividad(); // Detener cualquier temporizador de inactividad
      indiceActual = (indiceActual - 1 + elementos.length) % elementos.length;
      contenedor.scrollLeft = elementos[indiceActual].offsetWidth * indiceActual;
      iniciarTemporizadorInactividad(); // Iniciar el temporizador de inactividad
    });
  // Iniciar el carrusel automáticamente al cargar la página
  iniciarTemporizador();  
}