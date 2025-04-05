document.addEventListener('DOMContentLoaded', function() {
    const botonesVerMas = document.querySelectorAll('.cuadrofinbproductosbal');
    const productoinfobalDiv = document.getElementById('productoinfobal');

    botonesVerMas.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la navegación del enlace

            // Realiza la petición para obtener el contenido de productoinfobal.html
            fetch('productos/productoinfobal.html')
                .then(response => response.text())
                .then(data => {
                    // Inserta el contenido en el div productoinfo
                    productoinfobalDiv.innerHTML = data;
                    productoinfobalDiv.style.display ='flex';
                    // Agrega los event listeners para los botones de cerrar
                    const cerrarModalButtons = document.querySelectorAll('.info-close-button, .infocerrar');
                    cerrarModalButtons.forEach(cerrarBoton => {
                        cerrarBoton.addEventListener('click', function() {
                            productoinfobalDiv.style.display ='none';
                            productoinfobalDiv.innerHTML = ''; // Limpia el contenido del div para cerrar
                        });
                    });
                })
                .catch(error => {
                    console.error('Error al cargar productoinfobal.html:', error);
                    productoinfobalDiv.innerHTML = '<p>Error al cargar la información del producto.</p>';
                    productoinfobalDiv.style.display ='block';
                });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const botonesVerMas = document.querySelectorAll('.cuadrofinbproductosultrabal');
    const productoinfoultrabalDiv = document.getElementById('productoinfoultrabal');

    botonesVerMas.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la navegación del enlace

            // Realiza la petición para obtener el contenido de productoinfoultrabal.html
            fetch('productos/productoinfoultrabal.html')
                .then(response => response.text())
                .then(data => {
                    // Inserta el contenido en el div productoinfo
                    productoinfoultrabalDiv.innerHTML = data;
                    productoinfoultrabalDiv.style.display ='flex';
                    // Agrega los event listeners para los botones de cerrar
                    const cerrarModalButtons = document.querySelectorAll('.info-close-button, .infocerrar');
                    cerrarModalButtons.forEach(cerrarBoton => {
                        cerrarBoton.addEventListener('click', function() {
                            productoinfoultrabalDiv.style.display ='none';
                            productoinfoultrabalDiv.innerHTML = ''; // Limpia el contenido del div para cerrar
                        });
                    });
                })
                .catch(error => {
                    console.error('Error al cargar productoinfoultrabal.html:', error);
                    productoinfoultrabalDiv.innerHTML = '<p>Error al cargar la información del producto.</p>';
                    productoinfoultrabalDiv.style.display ='block';
                });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const botonessulfoVerMas = document.querySelectorAll('.cuadrofinbproductossulfo');
    const productoinfosulfoDiv = document.getElementById('productoinfosulfo');

    botonessulfoVerMas.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la navegación del enlace

            // Realiza la petición para obtener el contenido de productoinfosulfo.html
            fetch('productos/sulfoinfo.html')
                .then(response => response.text())
                .then(data => {
                    // Inserta el contenido en el div productoinfosulfo
                    // productoinfosulfoDiv.innerHTML = data;
                    productoinfosulfoDiv.innerHTML = data;
                    productoinfosulfoDiv.style.display = 'flex'; 

                    // Agrega los event listeners para los botones de cerrar
                    const cerrarModalButtons = document.querySelectorAll('.info-close-button, .infocerrar');
                    cerrarModalButtons.forEach(cerrarBoton => {
                        cerrarBoton.addEventListener('click', function() {
                            productoinfosulfoDiv.style.display = 'none'; 
                            productoinfosulfoDiv.innerHTML = '';
                            
                            // productoinfosulfoDiv.innerHTML = ''; // Limpia el contenido del div para cerrar
                        });
                    });
                })
                .catch(error => {
                    console.error('Error al cargar sulfoinfo.html:', error);
                    productoinfosulfoDiv.innerHTML = '<p>Error al cargar la información del producto.</p>';
                    productoinfosulfoDiv.style.display = 'block';
                    // productoinfosulfoDiv.innerHTML = '<p>Error al cargar la información del producto.</p>';
                });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const botonesVerMas = document.querySelectorAll('.cuadrofinbproductosjabon');
    const productoinfojabonDiv = document.getElementById('productoinfojabon');

    botonesVerMas.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la navegación del enlace

            // Realiza la petición para obtener el contenido de productoinfojabon.html
            fetch('productos/productoinfojabon.html')
                .then(response => response.text())
                .then(data => {
                    // Inserta el contenido en el div productoinfo
                    productoinfojabonDiv.innerHTML = data;
                    productoinfojabonDiv.style.display ='flex';
                    // Agrega los event listeners para los botones de cerrar
                    const cerrarModalButtons = document.querySelectorAll('.info-close-button, .infocerrar');
                    cerrarModalButtons.forEach(cerrarBoton => {
                        cerrarBoton.addEventListener('click', function() {
                            productoinfojabonDiv.style.display ='none';
                            productoinfojabonDiv.innerHTML = ''; // Limpia el contenido del div para cerrar
                        });
                    });
                })
                .catch(error => {
                    console.error('Error al cargar productoinfobal.html:', error);
                    productoinfojabonDiv.innerHTML = '<p>Error al cargar la información del producto.</p>';
                    productoinfojabonDiv.style.display ='block';
                });
        });
    });
});
