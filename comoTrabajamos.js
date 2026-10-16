// ================= ARCHIVO: comoTrabajamos.js =================

function initTimelineAnimation() {
    const timelineContainer = document.querySelector('.timeline-container');
    if (!timelineContainer) return;

    // El observador detecta cuándo la sección entra en la pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Al entrar en pantalla, le agregamos la clase 'is-visible' a los elementos
                // Esto desencadena las animaciones en cascada
                const elements = entry.target.querySelectorAll('.section-title, .step-line, .text-box');
                elements.forEach(el => el.classList.add('is-visible'));
                
                // Dejamos de observar para que la animación se haga solo una vez
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 }); // 0.15 significa que la animación arranca apenas un 15% de la sección sea visible

    observer.observe(timelineContainer);
}

// Iniciar la detección independientemente (así no tocamos main.js)
window.addEventListener('load', initTimelineAnimation);