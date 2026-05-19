// ====== MENÚ MÓVIL ======
const menuToggle = document.getElementById('menu-toggle');
const navegacion = document.getElementById('nav');

if (menuToggle && navegacion) {
    menuToggle.addEventListener('click', () => {
        const estaActivo = navegacion.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', estaActivo);

        const icono = menuToggle.querySelector('.material-icons-round');
        if (icono) icono.textContent = estaActivo ? 'close' : 'menu';
    });
}

// ====== CAMBIO DE SECCIONES ======
function mostrarSlide(id) {
    const seccionDestino = document.getElementById(id);

    if (seccionDestino) {
        document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('activo'));
        seccionDestino.classList.add('activo');

        // Resaltar enlace activo en nav
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.background = '';
            link.style.color = '';
        });

        if (navegacion && navegacion.classList.contains('active')) {
            navegacion.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            const icono = menuToggle.querySelector('.material-icons-round');
            if (icono) icono.textContent = 'menu';
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
