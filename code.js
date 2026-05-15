// ====== CONTROL DEL MENÚ DESPLEGABLE MÓVIL ======
const menuToggle = document.getElementById('menu-toggle');
const navegacion = document.getElementById('nav');

if (menuToggle && navegacion) {
    menuToggle.addEventListener('click', () => {
        const estaActivo = navegacion.classList.toggle('active');
        
        // Actualiza los atributos de accesibilidad para lectores de pantalla
        menuToggle.setAttribute('aria-expanded', estaActivo);
        
        // Cambia el icono visual de hamburguesa (☰) a una equis (close) cuando se abre
        const icono = menuToggle.querySelector('.material-symbols-outlined');
        if (icono) {
            icono.textContent = estaActivo ? 'close' : 'menu';
        }
    });
}

// ====== CONTROL DE CAMBIO DE SECCIONES (SLIDES) ======
function mostrarSlide(id) {
    const seccionDestino = document.getElementById(id);
    
    if (seccionDestino) {
        // Oculta todas las secciones activas
        document.querySelectorAll('.slide').forEach(slide => {
            slide.classList.remove('activo');
        });
        
        // Muestra la sección seleccionada
        seccionDestino.classList.add('activo');
        
        // Cierra automáticamente el menú móvil después de hacer clic en una sección
        if (navegacion && navegacion.classList.contains('active')) {
            navegacion.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            
            const icono = menuToggle.querySelector('.material-symbols-outlined');
            if (icono) icono.textContent = 'menu';
        }
        
        // Desplaza la pantalla suavemente hacia arriba para ver el inicio de la sección
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
