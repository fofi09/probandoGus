// ================= ARCHIVO: comoTrabajamos.js =================

function initTimelineAnimation() {
    // 1. Observador para el título principal
    const title = document.querySelector('.section-title');
    if (title) {
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    titleObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        titleObserver.observe(title);
    }

    // Guardamos la lista de filas para asegurar su orden estricto en el HTML
    const allRows = Array.from(document.querySelectorAll('.step-row'));
    if (allRows.length === 0) return;

    // Control de tiempo continuo (para evitar chocamiento de animaciones)
    let nextAvailableTime = 0;

    // 2. Observador para los pasos de la línea de tiempo
    const stepObserver = new IntersectionObserver((entries) => {
        // Filtramos solo los elementos que entraron a pantalla
        const visibleEntries = entries.filter(entry => entry.isIntersecting);

        if (visibleEntries.length > 0) {
            // ORDEN ESTRICTO: Ordenamos las entradas por su posición real en el DOM (01 -> 02 -> 03 -> 04)
            visibleEntries.sort((a, b) => allRows.indexOf(a.target) - allRows.indexOf(b.target));

            const now = Date.now() / 1000;

            visibleEntries.forEach((entry) => {
                const row = entry.target;
                const line = row.querySelector('.step-line');
                const textBox = row.querySelector('.text-box');

                // Si el paso anterior ya terminó (scroll lento), arrancamos de una (0.1s)
                // Si el paso anterior todavía se está animando (scroll rápido/recarga), se encadena a continuación
                let delay = Math.max(0.1, nextAvailableTime - now);

                if (line) {
                    line.style.animationDelay = delay + 's';
                    line.classList.add('is-visible');
                }
                if (textBox) {
                    textBox.style.animationDelay = (delay + 0.2) + 's';
                    textBox.classList.add('is-visible');
                }

                // El próximo paso arrancará 0.4s después de que empiece este
                nextAvailableTime = now + delay + 0.4;

                // Dejamos de vigilar este paso para que no repita la animación
                stepObserver.unobserve(row);
            });
        }
    }, { 
        threshold: 0.2 // El paso arranca cuando asoma un 20% en pantalla
    });

    // Observar cada fila
    allRows.forEach(row => {
        stepObserver.observe(row);
    });
}

// Ejecutar cuando el DOM o la ventana estén totalmente listos
if (document.readyState === 'complete') {
    initTimelineAnimation();
} else {
    window.addEventListener('load', initTimelineAnimation);
}