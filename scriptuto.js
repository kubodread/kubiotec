// inicio de selección de tutorial
function inicioTuto () {


    


const select = document.querySelector("select");
const para = document.querySelector(".tutorialk");

select.addEventListener("change", setTutorialk);

function setTutorialk(){
    const choice = select.value;

    switch (choice){
        case "phcasero":
            fetch('tutorial/phsuelo.html')
                .then(response => response.text())
                .then(data => { 
                    para.innerHTML = data;
                });
            break;
        case "phtiras":
            fetch('tutorial/phtiras.html')
                .then(response => response.text())
                .then(data => { 
                    para.innerHTML = data;
                });
            break;
        case "corregirph":
            fetch('tutorial/corregirph.html')
                .then(response => response.text())
                .then(data => {
                    para.innerHTML = data;
                });
            break;
        case "diatoap":
            fetch('tutorial/diatomeas.html')
                .then(response => response.text())
                .then(data => {
                    para.innerHTML = data;
                });
            break;
        case "liberarocafosfo":
            fetch('tutorial/fosfolibre.html')
                .then(response => response.text())
                .then(data => {
                    para.innerHTML = data;
                });
            break;
        case "compostaje":
              fetch('tutorial/compostaje.html')
                .then(response => response.text())
                 .then(data => {
                    para.innerHTML = data;
                    });
                break;
        case "Lombricompostaje":
             fetch('tutorial/lombri.html')
                  .then(response => response.text())
                  .then(data => {
                       para.innerHTML = data;
                      });
              break;

        case "tecomposta":
            fetch('tutorial/tecomposta.html')
                .then(response => response.text())
                .then(data => {
                    para.innerHTML = data;
                    inicializarCarruselTeComposta();

                          });
                      break;
         case "liberarocalcio":
            fetch('tutorial/cascarahuevo.html')
                .then(response => response.text())
                .then(data => {
                    para.innerHTML = data;
                    inicializarCarruselTeComposta();
                            });
                       break;
        default:
            para.textContent ="selecciona un tutorial";
    }
}
}


// Función para inicializar el carrusel de té de composta
function inicializarCarruselTeComposta() {
    const slides = document.querySelector('#slides'); // Usar ID ya que en tecomposta.html es 'slides'
    const images = document.querySelectorAll('#slides img');
    const botonAnterior = document.getElementById('anteriorte');
    const botonSiguiente = document.getElementById('siguientete');

    let currentIndex = 0;
    const totalImages = images.length;

    if (botonSiguiente) { // Verificar si el botón existe antes de agregar el listener
        botonSiguiente.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= totalImages) {
                currentIndex = 0;
            }
            updateSliderTeComposta();
        });
    }

    if (botonAnterior) { // Verificar si el botón existe antes de agregar el listener
        botonAnterior.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalImages - 1;
            }
            updateSliderTeComposta();
        });
    }

    function updateSliderTeComposta() {
        if (slides) { // Verificar si el contenedor slides existe
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }
}

// Llama a inicioTuto cuando el script se carga
inicioTuto();

