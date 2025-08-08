window.onload = function () {

    var load = document.getElementById('load');
     load.style.visibility = 'hidden';
     load.style.opacity = '0';
 
    
 };
 

 console.log ('Hola! ¡Bienvenid@s! \nProductos para tus plantas \nKubiotec! bio soluciones ');

 const salc = 
    [{
    producto:'Ultrabal' , 
    precio : '$100' , 
    presentacion : '500ml' , 
    uso: 'Abono para crecimiento y floración, \n con microorganismos benéficos, alto en macro elementos, ac. fúlvicos y húmicos y micro elementos. '
    },{
        producto:'sulfocaldo', 
        precio: '$80', 
        presentacion: '330ml',
        uso: 'insecticida, contra hongos, bacterias e insectos, aporta nutrientes como calcio, magnesio, potasio y azufre.'

    },{
        producto:'Alfin Jabón',
        precio: '$30',
        presentacion: "En sobre para 1 a 2 litros",
        uso: 'insecticida'
    }

    ];

console.table(salc);

/* inicia logica modal*/

const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*acaba logica de modal */