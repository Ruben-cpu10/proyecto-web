// Menú hamburgues para la versión móvil

// Definimos una constante que será el menu hamburguesa y otra que sera el menu que se despliega con las paginas por las que se puede navegar
const logoHamburguesa = document.querySelector('.svg-menu-hamburguesa')
const menuDesplegado = document.querySelector('.menu-paginas')
const logoHamburguesaCerrado = document.querySelector('.svg-menu-hamburguesa-cerrar')

// aqui definimos que cuando se haga clicl pase lo que esta dentro
logoHamburguesa.addEventListener('click', () => {
    menuDesplegado.classList.toggle('menu-paginas-abierto') // le cambie la clase a "menu-paginas-abierto" y se pondra con los estilos dados en css
    if (menuDesplegado.classList.contains('menu-paginas-abierto')) {
        logoHamburguesaCerrado.classList.add('hamburguesaCerrar-visible')
        logoHamburguesa.classList.add('hamburguesa-no-visible')
    } else {
        logoHamburguesa.classList.remove('hamburguesa-no-visible')
        logoHamburguesaCerrado.classList.remove('hamburguesaCerrar-visible')
    }
})

// y aqui cuando le den a la X para cerrar el menu le borramos todas las clases de antes para que se cierre todo y vuelva a la "normalidad"
logoHamburguesaCerrado.addEventListener('click', () => {
    menuDesplegado.classList.remove('menu-paginas-abierto')
    logoHamburguesaCerrado.classList.remove('hamburguesaCerrar-visible')
    logoHamburguesa.classList.remove('hamburguesa-no-visible')
})
