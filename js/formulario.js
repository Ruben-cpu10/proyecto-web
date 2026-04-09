// Menú hamburgues para la versión móvil

// Definimos una constante que será el menu hamburguesa y otra que sera el menu que se despliega con las paginas por las que se puede navegar
const logoHamburguesa = document.querySelector('.svg-menu-hamburguesa')
const menuDesplegado = document.querySelector('.menu-paginas')
const logoHamburguesaCerrado = document.querySelector('.svg-menu-hamburguesa-cerrar')

// aqui definimos que cuando se haga clicl pase lo que esta dentro
logoHamburguesa.addEventListener('click', () => {
    menuDesplegado.classList.toggle('menu-paginas-abierto') // le cambie la clase a "menu-paginas-abierto" y se pondra con los estilos dados en css
    logoHamburguesaCerrado.classList.add('menu-hamburguesa-cerrado-aparecer')
})




// Validación del formulario y que me llegue a mi el cliente que ha puesto los datos y sus datos a mi telegram

// 1. Seleccionar los elementos que necesito del HTML

let botonEnviarFormulario = document.querySelector('.btn-enviarFormulario')

// 2. Creamos un eventLisener para definir que quermeos que pase cuando se le de al boton de "Enviar Formulario"
botonEnviarFormulario.addEventListener('click', function (e) {
    e.preventDefault() // para prevenir que el navegador recarge la página

    // Recogemos todos los campos del formulario (el valor que contengan los inputs y lo demás):
    let nombre = document.querySelector('#nombre-apellidos').value
    let email = document.querySelector('#email').value
    let objetivo = document.querySelector('#objetivo-fisico').value
    let plan = document.querySelector('#plan').value
    let extras = document.querySelector('#extras').value
    let mensaje = document.querySelector('#mensaje').value
    let camposRequeridos = document.querySelectorAll('.input-requerido')
    let mensajeInfoFormulario = document.querySelector('.mensaje-formulario')
    let telefono = document.querySelector('#telefono').value

    // luego hacemos como una limieza para prevenir
    mensajeInfoFormulario.classList.remove("mostrado")

    // y aqui muestro mensajes si falta un campo u otro por rellenar
    if (nombre === "" || email === "" || telefono.length < 9 || objetivo === "" || plan === "" || objetivo === "" || plan === "") { // /\D/ = cualquier carácter que no sea un digito
        mensajeInfoFormulario.textContent = "Rellena los campos obligatorios"
    } else if (nombre === "" || /\d/.test(nombre) || nombre === "") {
        mensajeInfoFormulario.textContent = "Nombre vacío o no válido"
    } else if (!email.includes('@')) {
        mensajeInfoFormulario.textContent = 'Email debe contener "@"'

        // Y ahora si todo lo anterior NO se cumple (osea que los cmapos esta bien rellenados) a continuacion voy a definir el mensaje que quiero que me llegue
    } else {
        let texto = `🏋️‍♂️ NUEVO CLIENTE 🏋️‍♂️\n\n` + // "\n" seria un salto de linea y el + seria para "juntar" los distintos strings con las variables
            `👤 Nombre: ${nombre}\n` +
            `📧 Email: ${email}\n` +
            `💎 Plan: ${plan}\n` +
            `💵 Extras: ${extras}\n` +
            `💬 Mensaje: ${mensaje}`;

        let url = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_CHAT_ID}&text=${encodeURIComponent(texto)}`

        // ahora los mensajes de alerta en el navegador del dispositivo si se envia bien o mal el formulario
        fetch(url)
            .then(function (res) {
                if (res.ok) {
                    alert("✅ Formulario enviado exitosamente. En 24/48h le llegará un mensaje a WhatsApp para el procedimiento del pago.")
                } else {
                    alert("❌ Error al enviar. Revisa los campos e inténtalo de nuevo.")
                }
            })
            .catch(function () {
                alert("❌ Error de red. Comprueba tu conexión e inténtalo de nuevo.")
            })

    }

})


