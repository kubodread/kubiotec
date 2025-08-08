window.onload = function () {

    var load = document.getElementById('load');
     load.style.visibility = 'hidden';
     load.style.opacity = '0';
 
    
 };
 
function inserpag(pag,clase) { 
        return    ( 
          fetch(pag)
             .then(response => response.text())
             .then(data => {
             document.getElementById(clase).innerHTML = data;
                        })
                      )
                    }

