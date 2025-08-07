

const tutorialesDiv = document.querySelector('.tutoriales'); // Asegúrate de que este div exista en tu index.html

function addElement() {

    const existingRegresarDiv = document.getElementById("divregresar");

    // Si existe, lo elimina
    if (existingRegresarDiv) {
        existingRegresarDiv.remove();
    }


    // crea un nuevo div
    var newDiv = document.createElement("div");

    newDiv.id = "divregresar";

    // Define el contenido HTML que quieres insertar
    var htmlContent = `
      <div class="flexinfobuttoncv">
        <button class="infocerrarcv"> ↩️ Más Tutoriales</button>
      </div>
    `;

    // Asigna el HTML al innerHTML del nuevo div
    newDiv.innerHTML = htmlContent;

    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("tutori");
    // Asegúrate de que 'tutori' sea el ID del elemento donde quieres insertar el botón de regreso
    if (currentDiv) {
        currentDiv.appendChild(newDiv); // Usa appendChild si quieres añadirlo *dentro* del div 'tutori'
        // O document.body.insertBefore(newDiv, currentDiv); si quieres insertarlo *antes*
    } else {
        console.error("El elemento con ID 'tutori' no se encontró en el index.html");
    }
}



// const tutorialesDiv = document.querySelector('.tutoriales'); // Asegúrate de que este div exista en tu index.html

function cargarTutorial(id) {
    fetch(`../tutorial/${id}.html`)
        .then(response => response.text())
        .then(data => {
            if (tutorialesDiv) {
                tutorialesDiv.innerHTML = data;
                document.getElementById("tutomenu").style.display = "none";
                addElement();






          
                const cerrarModalButtons = document.querySelectorAll('.info-close-button, .infocerrarcv');
                cerrarModalButtons.forEach(cerrarBoton => {
                    cerrarBoton.addEventListener('click', function() {
                        document.getElementById("tutomenu").style.display ='';
                       
                        tutorialesDiv.innerHTML = ''; // Limpia el contenido del div para cerrar
                                        // Elimina el div de regresar al cerrar
                                        const regresarDivToRemove = document.getElementById("divregresar");
                                        if (regresarDivToRemove) {
                                            regresarDivToRemove.remove();
                                        }

                    });
                });


            } else {
                console.error("El div con la clase 'tutoriales' no se encontró en el index.html");
            }
        })
        .catch(error => {
            console.error("Error al cargar el tutorial:", error);
            if (tutorialesDiv) {
                tutorialesDiv.innerHTML = "<p>Error al cargar el contenido.</p>";
            }
        });
}

