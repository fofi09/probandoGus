// ================= ARCHIVO: testimonios.js =================

function initTestimonios() {
    // --- Lógica de la animación de las estrellas superiores ---
    const stars = document.querySelectorAll('.star-anim');
    let isAnimating = true;

    function animateStars() {
        if (!isAnimating || stars.length === 0) return;
        
        // Reiniciar
        stars.forEach(s => s.classList.remove('active'));
        
        // Secuencia de encendido
        setTimeout(() => stars[0] && stars[0].classList.add('active'), 500);
        setTimeout(() => stars[1] && stars[1].classList.add('active'), 1000);
        setTimeout(() => stars[2] && stars[2].classList.add('active'), 1500);
        setTimeout(() => stars[3] && stars[3].classList.add('active'), 2000);
        setTimeout(() => stars[4] && stars[4].classList.add('active'), 2500);
    }

    animateStars();
    setInterval(animateStars, 4000); 

    // --- Lógica del Carrusel 3D de testimonios ---
    const cards = document.querySelectorAll('.review-card');
    const dotsContainer = document.getElementById('carouselDots');
    const carouselWrapper = document.getElementById('carouselWrapper');
    
    if (cards.length === 0 || !dotsContainer || !carouselWrapper) return;

    let currentIndex = 2; // Empezamos con la tarjeta del medio (índice 2)
    const totalCards = cards.length;

    // Crear puntos indicadores
    cards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('w-2', 'h-2', 'rounded-full', 'bg-slate-300', 'transition-colors');
        if(index === currentIndex) dot.classList.add('bg-blue-600', 'w-4');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('button');

    function updateCarousel() {
        cards.forEach((card, index) => {
            // Limpiar clases
            card.classList.remove('active', 'prev', 'next', 'hidden-left', 'hidden-right');

            // Calcular posiciones relativas
            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index === (currentIndex - 1 + totalCards) % totalCards) {
                card.classList.add('prev');
            } else if (index === (currentIndex + 1) % totalCards) {
                card.classList.add('next');
            } else {
                // Determinar de qué lado ocultar el resto
                if (index === (currentIndex - 2 + totalCards) % totalCards) {
                    card.classList.add('hidden-left');
                } else {
                    card.classList.add('hidden-right');
                }
            }
        });

        // Actualizar puntos
        dots.forEach((dot, index) => {
            dot.className = 'w-2 h-2 rounded-full bg-slate-300 transition-all duration-300';
            if (index === currentIndex) {
                dot.classList.remove('w-2', 'bg-slate-300');
                dot.classList.add('w-4', 'bg-blue-600');
            }
        });
    }

    // Exponer función para los botones prev/next
    window.moveCarousel = function(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % totalCards;
        } else {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        }
        updateCarousel();
    }

    // Inicializar
    updateCarousel();

    // Hacer click en tarjetas adyacentes para navegar
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('active')) {
                currentIndex = index;
                updateCarousel();
            }
        });
    });

    // Control táctil (Swipes)
    let touchStartX = 0;
    let touchEndX = 0;

    carouselWrapper.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    carouselWrapper.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        const swipeThreshold = 40; 
        if (touchEndX < touchStartX - swipeThreshold) {
            window.moveCarousel('next'); 
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            window.moveCarousel('prev'); 
        }
    }
}

// Iniciar al cargar la web
window.addEventListener('load', initTestimonios);