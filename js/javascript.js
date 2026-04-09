// ACORDEÓN DE LAS PREGUNTAS FRECUENTES

// Primero tenemos que coger todos los titulos del HTML que seria cada pregunta

const tituloPreguntas = document.querySelectorAll('.titulo-preguntas')

// Luego como querySelectorAll devuelve una lista, hay que pasar por cada uno de los elementos para luego poder poner el lisener

tituloPreguntas.forEach(titulo => {
    // ahora le indicamos que por cada titulo, se quede escuchando un clic
    titulo.addEventListener('click', () =>  {

         // aqui definimos otra constante que es la del icono del acordeon (+)
        const icono = titulo.querySelector('.icono-acordeon')
        
        // Aqui definimos la respuesta actual, es decir comprobarmos si la respuesta tiene la etiqueta mostrar o no y nos devuelve un true o false
        let respuestaActual = titulo.nextElementSibling.classList.contains('mostrar')

        // Ahora vamos a hacer como un reset o limpieza para que cuando se abra una respuesta las demas se cierren
        tituloPreguntas.forEach(elemento => {
            elemento.querySelector('.icono-acordeon').textContent = "+" 
            const respuestaCerrar = elemento.nextElementSibling
            respuestaCerrar.classList.remove('mostrar')
            elemento.classList.remove('titulo-activo') 
        })

        const respuesta = titulo.nextElementSibling; // aqui definimos una constante que seria el siguiente elemento dentro de los titulos que es la respuesta

        // Aqui definimos que le cambie la clase a titulo-activo para que yo le pueda dar el CSS estilo para cuando este mostrando la respuesta

        // Aqui vamos a definir como se tiene que comportar el icono cuando se muestre la respuesta y cuando no

        if (respuestaActual === false) { // aqui decimos: si la variable de "respuestaActual" devuelve un "false", es decir, que no tiene na etiqueta "mostrar" hacemos:
            respuesta.classList.add('mostrar') // le añadimos la etiqueta "mostrar"
            titulo.classList.add('titulo-activo'); // y le añadimos al titulo la etiqueta "titulo-activo", que me va a servir para darle yo estilos en CSS
            icono.textContent = "-" // se convierte el icono en "-"
        } else { // si la variable devuelve true, es decir que si tiene la etiqueta mostrar:
            icono.textContent = "+" // se ve el icono en "+"
        }
})});


// BOTÓN PARA VOLVER ARRIBA 

const btnSubir = document.getElementById('btn-arriba')

window.addEventListener('scroll', () => {

    // Calculamos cuanto ha bajado el usuario en la web
    let progresoPantalla = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

    // Creamos un if para que salga el boton cuando el usuario baje una parte de la pantalla
    if (progresoPantalla >= 20) { // si el calculo del progreso de la pantalla sale >= 20 ocurre:
        btnSubir.classList.add('btn-volverArriba-aparecer') // se le añade la clase "btn-volverArriba-aparecer" 
    } else {
        btnSubir.classList.remove('btn-volverArriba-aparecer') // si no, se le borra la clase
    }

})

    // La accion que debe de ocurrir cuando el boton se pulse el botón
    btnSubir.addEventListener('click', () => { // añadimos un evento que escuche el clic
        window.scrollTo({ top: 0, behavior: 'smooth'}) // cuando se haga el clic, se va el scroll de la pantlla hacia arriba del todo 
    })


// CARRUSEL DE LOS TESTIMONIOS 

// primero creamos las variables a usar
let carruselTestimonios = document.querySelector('.carrusel-testimonios')
let botonAnterior = document.querySelector('.botonAnterior-carrusel')
let botonSiguiente = document.querySelector('.botonSiguiente-carrusel')
let posicionCarruselActual = 0

// empezamos con el boton siguiente
botonSiguiente.addEventListener('click', () => { // aqui quiero que cuando se le de al boton, el carrusel de mueva de posicion a la derecha por lo que -100
    // empezamos con un if para decir, si la posicion es < que -600 ejecuta la funcion que es el mover hacia la derecha el slide, si no no lo ejecutes, porque asi evitamos que el slide termine en la utlima imagen
    if (posicionCarruselActual > -600) {
    posicionCarruselActual = posicionCarruselActual - 100 // definimos que cuando se le de al botonSiguiente se haga esta operación
    carruselTestimonios.style.transform = `translateX(${posicionCarruselActual}%)` // aqui basicamente estamos diciendo: cuando se le de al clic que que le apliques el estilo css que acabamos de definir, que le pone un transform -100% que hace que el carrusel vayya completamente hacia la izquierda
    }})

// Ahora el boton que saca el anterior carrusel, el cual vamos ha hacer lo mismo pero al contrario
botonAnterior.addEventListener('click', () => {
    if (posicionCarruselActual < 0 ) {
    posicionCarruselActual += 100 // estamos haciendo lo mismo que el anterior pero mas breve y al contrario
    carruselTestimonios.style.transform = `translateX(${posicionCarruselActual}%)`
    }})



    

// ANIMACIONES AL HACER SCROLL
// declaramos una constante que recoja todos los elementos con la clase .oculto del css
let elemetosOcultos = document.querySelectorAll('.oculto')

// definimos una constante que va a ser una funcion que observe y si detecte algo, que ejecute lo de dentro de la función
const observer = new IntersectionObserver(function (elementosDetectados) {
    
    elementosDetectados.forEach(elementoDetectadoIndividual => { // Y por cada elemento que detecte
    if (elementoDetectadoIndividual.isIntersecting === true) { // y si esta en la pantalla (isIntersecting)
        elementoDetectadoIndividual.target.classList.add('visible') // se ejecuta esto, que es que se añade la clase 'visible'
    }
    })
})

// hacemos que vigile lo    s elementos de la lista definida aqui => let elemetosOcultos = document.querySelectorAll('.oculto')
elemetosOcultos.forEach(elementoOculto => { // por cada elemento de esta lista
    observer.observe(elementoOculto) // le decimos al observer que vigile a cada elemento oculto par que se active luego el bloque anterior 
})







