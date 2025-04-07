document.addEventListener('DOMContentLoaded', function() {
    const botonesRecocv = document.querySelectorAll('.recocv');
    const recomCvDiv = document.getElementById('recomcv');

    botonesRecocv.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la navegación del enlace

            // Realiza la petición para obtener el contenido de 
            fetch('cv/recomcv.html')
                .then(response => response.text())
                .then(data => {
                    // Inserta el contenido en el div 
                    recomCvDiv.innerHTML = data;
                    boton.style.background ='#ffffff';  
                    boton.style.borderColor ='#ffffff';
                    boton.style.border ='0';  
                    // Agrega los event listeners para los botones de cerrar
                    const cerrarModalButtons = document.querySelectorAll('.info-close-button, .infocerrarcv');
                    cerrarModalButtons.forEach(cerrarBoton => {
                        cerrarBoton.addEventListener('click', function() {
                            boton.style.background ='#3882f6';
                            boton.style.borderColor ='#3882f6';
                            boton.style.border ='2px solid #000000';  
                            recomCvDiv.innerHTML = ''; // Limpia el contenido del div para cerrar
                        });
                    });
                })
                .catch(error => {
                    console.error('Error al cargar constancias.html:', error);
                    recomCvDiv.innerHTML = '<p>Error al cargar la información de constancias.</p>';
                    // constanciascvDiv.style.display ='block';
                });
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const botonesRecv = document.querySelectorAll('.recv');
    const constCvDiv = document.getElementById('constcv');

    botonesRecv.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la navegación del enlace

            // Realiza la petición para obtener el contenido de 
            fetch('cv/constcv.html')
                .then(response => response.text())
                .then(data => {
                    // Inserta el contenido en el div constanciascv
                    constCvDiv.innerHTML = data;
                    boton.style.background ='#ffffff';  
                    boton.style.borderColor ='#ffffff';  
                    boton.style.border ='0';  
                    // Agrega los event listeners para los botones de cerrar
                    const cerrarModalButtons = document.querySelectorAll('.info-close-button, .infocerrarcv');
                    cerrarModalButtons.forEach(cerrarBoton => {
                        cerrarBoton.addEventListener('click', function() {
                            boton.style.background ='#3882f6';
                            boton.style.borderColor ='#3882f6';
                            boton.style.border ='2px solid #000000';  
                            constCvDiv.innerHTML = ''; // Limpia el contenido del div para cerrar
                        });
                    });
                })
                .catch(error => {
                    console.error('Error al cargar constancias.html:', error);
                    constCvDiv.innerHTML = '<p>Error al cargar la información de constancias.</p>';
                    // constanciascvDiv.style.display ='block';
                });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const botonesPoncv = document.querySelectorAll('.poncv');
    const poncCvDiv = document.getElementById('ponccv');

    botonesPoncv.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la navegación del enlace

            // Realiza la petición para obtener el contenido de 
            fetch('cv/ponenc.html')
                .then(response => response.text())
                .then(data => {
                    // Inserta el contenido en el div constanciascv
                    poncCvDiv.innerHTML = data;
                    boton.style.background ='#ffffff';  
                    boton.style.borderColor ='#ffffff'; 
                    boton.style.border ='0'; 
                    // Agrega los event listeners para los botones de cerrar
                    const cerrarModalButtons = document.querySelectorAll('.info-close-button, .infocerrarcv');
                    cerrarModalButtons.forEach(cerrarBoton => {
                        cerrarBoton.addEventListener('click', function() {
                            boton.style.background ='#3882f6';
                            boton.style.borderColor ='#3882f6';
                            boton.style.border ='2px solid #000000';  
                            poncCvDiv.innerHTML = ''; // Limpia el contenido del div para cerrar
                        });
                    });
                })
                .catch(error => {
                    console.error('Error al cargar constancias.html:', error);
                    poncCvDiv.innerHTML = '<p>Error al cargar la información de constancias.</p>';
                    // constanciascvDiv.style.display ='block';
                });
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const botonesConstancias = document.querySelectorAll('.constcv');
    const constanciasCvDiv = document.getElementById('constanciascv');

    botonesConstancias.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la navegación del enlace

            // Realiza la petición para obtener el contenido de 
            fetch('cv/constancias.html')
                .then(response => response.text())
                .then(data => {
                    // Inserta el contenido en el div constanciascv
                    constanciasCvDiv.innerHTML = data;
                    boton.style.background ='#ffffff'; 
                    boton.style.borderColor ='#ffffff';  
                    boton.style.border ='0'; 
                    // Agrega los event listeners para los botones de cerrar
                    const cerrarModalButtons = document.querySelectorAll('.info-close-button, .infocerrarcv');
                    cerrarModalButtons.forEach(cerrarBoton => {
                        cerrarBoton.addEventListener('click', function() {
                            boton.style.background ='#3882f6';
                            boton.style.borderColor ='#3882f6';  
                            boton.style.border ='2px solid #000000';
                            constanciasCvDiv.innerHTML = ''; // Limpia el contenido del div para cerrar
                        });
                    });
                })
                .catch(error => {
                    console.error('Error al cargar constancias.html:', error);
                    constanciasCvDiv.innerHTML = '<p>Error al cargar la información de constancias.</p>';
                    // constanciascvDiv.style.display ='block';
                });
        });
    });
});
