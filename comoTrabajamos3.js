// ================= ARCHIVO: comoTrabajamos.js =================

function initTimelineAnimation() {
    // 1. Observador para el título principal
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

    // Variables para controlar la cascada "inteligente"
    let delayCounter = 0;
    let resetTimer = null;

    // 2. Observador para los pasos
    const stepObserver = new IntersectionObserver((entries) => {
        
        let visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
            visibleEntries.forEach((entry) => {
                const row = entry.target;
                const line = row.querySelector('.step-line');
                const textBox = row.querySelector('.text-box');

                // Mantengo tus tiempos exactos originales (empieza en 0.2s y la dif es de 0.8s)
                const currentLineDelay = delayCounter + 0.2;
                const currentTextDelay = delayCounter + 0.5;

                if (line) {
                    line.style.animationDelay = currentLineDelay + 's';
                    line.classList.add('is-visible');
                }
                if (textBox) {
                    textBox.style.animationDelay = currentTextDelay + 's';
                    textBox.classList.add('is-visible');
                }

                // Sumamos 0.8s para el siguiente paso que entre en esta misma "bajada rápida"
                delayCounter += 0.8;

                // Lo dejamos de vigilar para que no repita la animación al subir
                stepObserver.unobserve(row);
            });

            // Si el usuario frena el scroll o va lento, a los 100 milisegundos se resetea el reloj a 0.
            // Así el próximo paso arranca de inmediato cuando se lo ve.
            clearTimeout(resetTimer);
            resetTimer = setTimeout(() => {
                delayCounter = 0;
            }, 100);
        }
    }, { 
        threshold: 0.2 // El paso arranca cuando asoma un 20% en pantalla
    });

    // Le aplicamos el vigilante a cada una de las filas
    document.querySelectorAll('.step-row').forEach(row => {
        stepObserver.observe(row);
    });
}

// Iniciar la detección sin interferir con el main.js
window.addEventListener('load', initTimelineAnimation);