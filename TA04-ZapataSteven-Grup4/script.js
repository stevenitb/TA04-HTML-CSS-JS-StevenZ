const $tiempo=document.querySelector('.tiempo'),
$fecha= document.querySelector('.fecha');

function Relojdigital(){
    let f=new Date(),
    dia= f.getDate(),
    mes= f.getMonth()+1,
    anio= f.getFullYear(),
    diaSemana=f.getDay();

    dia= ('0'+dia).slice(-2);
    mes=('0'+mes).slice(-2)

    let timeString= f.toLocaleTimeString();
    $tiempo.innerHTML=timeString;

    let semana=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let showSemana= (semana[diaSemana])
    $fecha.innerHTML = `${showSemana} ${dia}-${mes}-${anio}`
}
setInterval(() =>{
    Relojdigital()
},1000);

// Validar formulario de contacto
document.querySelector("#contactForm").addEventListener("submit", function(e) {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const errorElement = document.querySelector("#error");

    // Expresión regular para validar el email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validaciones básicas
    if (name.length < 3) {
        e.preventDefault();
        errorElement.textContent = "El nombre debe tener al menos 3 caracteres.";
        return;
    }

    if (!emailPattern.test(email)) {
        e.preventDefault();
        errorElement.textContent = "Por favor, introduce un correo electrónico válido.";
        return;
    }

    if (message.length < 5) {
        e.preventDefault();
        errorElement.textContent = "El mensaje debe tener al menos 5 caracteres.";
        return;
    }

    // Limpiar mensaje de error si todo es correcto
    errorElement.textContent = "";
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleModeBtn = document.getElementById('toggleMode');

    // Si el modo de la página ya es oscuro, se establece el botón en modo oscuro
    if (document.body.classList.contains('dark-mode')) {
        toggleModeBtn.textContent = '☀️'; // Muestra el icono de sol cuando está en modo oscuro
    } else {
        toggleModeBtn.textContent = '🌙'; // Muestra el icono de luna cuando está en modo claro
    }

    // Alterna entre modo oscuro y claro cuando se hace clic en el botón
    toggleModeBtn.addEventListener('click', () => {
        // Alterna las clases light-mode y dark-mode en el body
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        // Cambia el icono del botón dependiendo del modo
        if (document.body.classList.contains('dark-mode')) {
            toggleModeBtn.textContent = '☀️'; // Modo oscuro, muestra sol
        } else {
            toggleModeBtn.textContent = '🌙'; // Modo claro, muestra luna
        }
    });

    // Establece el modo predeterminado si no hay clases
    if (!document.body.classList.contains('light-mode') && !document.body.classList.contains('dark-mode')) {
        document.body.classList.add('light-mode'); // Asume el modo claro al cargar
    }
});



