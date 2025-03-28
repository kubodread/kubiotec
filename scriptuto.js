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
        default:
            para.textContent ="selecciona un tutorial";
    }
}
}