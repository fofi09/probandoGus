// ================= ARCHIVO: comoTrabajamos.js =================

function initTimelineAnimation() {
    // 1. Observador independiente solo para el título principal
    const title = document.querySelector('.section-title');
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                titleObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); 
    
    if (title) titleObserver.observe(title);

    // 2. Observador para cada paso (step-row) de forma individual
    const stepObserver = new IntersectionObserver((entries) => {
        
        // Filtramos solo los elementos que acaban de entrar en la pantalla
        let visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        visibleEntries.forEach((entry, index) => {
            const row = entry.target;
            const line = row.querySelector('.step-line');
            const textBox = row.querySelector('.text-box');

            // Si se ven varios a la vez (ej: en PC), index crea la cascada (0.1, 0.4, 0.7...)
            // Si bajan lento en celular, entra de a uno (index siempre es 0) y arranca al toque
            const lineDelay = 0.1 + (index * 0.3);
            const textDelay = 0.4 + (index * 0.3);

            // Pisamos los tiempos "duros" del HTML con los tiempos exactos de la pantalla
            if (line) {
                line.style.animationDelay = lineDelay + 's';
                line.classList.add('is-visible');
            }
            if (textBox) {
                textBox.style.animationDelay = textDelay + 's';
                textBox.classList.add('is-visible');
            }

            // Dejamos de vigilar este paso para que no se repita la animación al subir
            stepObserver.unobserve(row);
        });
    }, { 
        threshold: 0.3 // Exige que el paso esté un 30% visible en pantalla para arrancar, así no te lo pierdes
    });

    // Le aplicamos el vigilante a cada una de las "filas" (pasos)
    document.querySelectorAll('.step-row').forEach(row => {
        stepObserver.observe(row);
    });
}

// Iniciar la detección independientemente
window.addEventListener('load', initTimelineAnimation);