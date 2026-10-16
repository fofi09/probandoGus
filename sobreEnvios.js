// ----------------------------------------------------
// LÓGICA DEL CARRUSEL DE "SOBRE MÍ"
// ----------------------------------------------------
const credentialImagePath = 'gus1.jpg';

const cardBackContent = `
    <div class="id-card p-5 md:p-6 w-full">
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 mt-8">
            <div class="profile-image w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
                <img src="https://placehold.co/112x112/2563eb/ffffff?text=J" 
                    alt="Foto de perfil de Javier" 
                    class="w-full h-full object-cover"
                    onerror="this.onerror=null;this.src='https://placehold.co/112x112/2563eb/ffffff?text=J';"
                >
            </div>

            <div class="text-center sm:text-left mt-1 sm:mt-2">
                <p class="text-2xl font-extrabold text-blue-700 leading-tight">Javier Envíos</p>
                <p class="text-sm text-gray-600 font-semibold mb-2">Fundador & CEO de Envíos Rápidos</p>
                
                <div class="mt-3 space-y-1 text-sm text-gray-700">
                    <p class="flex items-center justify-center sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        España (Envío a todo el mundo)
                    </p>
                    <p class="flex items-center justify-center sm:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        Desde 2018
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-6 pt-4 border-t border-gray-200">
            <p class="text-sm font-semibold text-gray-800 mb-2">Mi Misión:</p>
            <p class="text-gray-600 text-base leading-normal">
                Soy **Javier**, y mi objetivo es asegurar que tus pedidos lleguen a su destino con la máxima rapidez y seguridad, sin importar la distancia. Me encargo de toda la logística para que tú solo tengas que preocuparte de tu producto.
            </p>
        </div>

        <div class="mt-6 text-center pb-4">
            <button class="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-[1.02] active:scale-[0.98]">
                Contactar para un Servicio
            </button>
        </div>
    </div>
`;

const slidesData = [
    { 
        type: 'credential', 
        content: `
            <div class="flex items-center justify-center w-full h-full">
                <div class="card-flip-wrapper relative max-w-xs w-full" style="height: 500px; max-height: 80vh;">
                    <div class="card-flip-container origin-top" id="credential-card-0">
                        <div class="card-face card-front">
                            <img src="${credentialImagePath}" alt="Credencial de Identificación de Gustavo (enviosJG)" 
                                    class="w-full h-auto rounded-lg shadow-md" 
                                    onerror="this.onerror=null;this.src='https://placehold.co/300x500/0033A0/FFFFFF?text=Credencial+enviosJG+Cargando';" 
                            />
                        </div>
                        <div class="card-face card-back">
                            ${cardBackContent}
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        type: 'text',
        title: 'Experiencia y Hitos',
        content: `
            <div class="slide-content-wrapper text-left flex flex-col h-full slide-content-3">
                <h3 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Nuestra Trayectoria y Compromiso</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 grid-cols-1-md-2">
                    <div class="p-6 bg-blue-50 rounded-xl shadow-md border-l-4 border-blue-700 feat-element">
                        <p class="text-5xl font-extrabold text-blue-700 mb-2">+10</p>
                        <p class="text-xl font-semibold text-gray-700">Años de Experiencia</p>
                        <p class="text-gray-600 mt-1">en la ruta, conectando tus necesidades con soluciones de envío eficientes.</p>
                    </div>
                    <div class="p-6 bg-white rounded-xl shadow-md border-l-4 border-gray-400">
                        <p class="text-2xl font-bold text-gray-800 mb-4">Hitos Clave</p>
                        <ul class="space-y-3 text-gray-700 list-disc pl-5">
                            <li><span class="font-semibold">Más de 5000</span> entregas exitosas a lo largo del país.</li>
                            <li>Especialistas en logística de <span class="font-semibold">última milla</span> para e-commerce.</li>
                            <li>Expansión a <span class="font-semibold">5 regiones clave</span>, garantizando cobertura y rapidez.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    {
        type: 'text',
        title: 'Valores y Misión',
        content: `
            <div class="slide-content-wrapper text-center flex flex-col items-center h-full">
                <div class="mb-6 text-blue-700">
                    <i data-lucide="handshake" class="w-16 h-16 mx-auto mb-4"></i>
                </div>
                <h3 class="text-3xl font-bold text-gray-800 mb-4">Nuestros Pilares: Confianza en Cada Envío</h3>
                <p class="text-xl font-semibold text-blue-700 mb-6 max-w-2xl mx-auto">
                    Transparencia, Rapidez y Seguridad: Los principios que guían cada paso en enviosJG.
                </p>
                <p class="text-md text-gray-600 max-w-xl mx-auto">
                    <span class="font-bold">Misión Breve:</span> Simplificamos tus procesos de envío, permitiéndote concentrarte en lo que realmente importa: tu negocio y tus clientes.
                </p>
            </div>
        `
    }
];

let currentSlide = 0;
const totalSlides = slidesData.length;
let slidesContainer;
let indicatorsContainer;
const FALL_DURATION_MS = 1800; 
const POST_FALL_DELAY_MS = 2000;
let animationEndListener = null;
let isCarouselVisible = false;

function animateCredentialDrop(slideElement) {
    const cardContainer = slideElement.querySelector('#credential-card-0');
    
    if (cardContainer) {
        if (animationEndListener) {
            cardContainer.removeEventListener('animationend', animationEndListener);
            animationEndListener = null;
        }
        
        cardContainer.classList.remove('flipped', 'credential-animate');
        cardContainer.classList.add('credential-hidden');
        
        animationEndListener = (event) => {
            if (event.animationName !== 'fall-and-hang') return;

            cardContainer.removeEventListener('animationend', animationEndListener);
            animationEndListener = null; 
            cardContainer.classList.remove('credential-animate');
            
            setTimeout(() => {
                cardContainer.classList.add('flipped');
            }, POST_FALL_DELAY_MS); 
        };

        cardContainer.addEventListener('animationend', animationEndListener);
        void cardContainer.offsetWidth; 
        cardContainer.classList.remove('credential-hidden');
        cardContainer.classList.add('credential-animate');
    }
}

function renderCarousel() {
    if (!slidesContainer || !indicatorsContainer) return;

    if (slidesContainer.children.length === 0) {
        slidesData.forEach((slide, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.className = `slide absolute top-0 left-0 w-full h-full bg-white transition-opacity duration-500`;
            slideDiv.innerHTML = slide.content;
            slideDiv.style.opacity = 0;
            slideDiv.style.zIndex = 0;
            
            if (index === 0) {
                   const cardContainer = slideDiv.querySelector('#credential-card-0');
                   if (cardContainer) cardContainer.classList.add('credential-hidden');
            }
            slidesContainer.appendChild(slideDiv);
            if(window.lucide) { lucide.createIcons(); }
        });
    }
    
    Array.from(slidesContainer.children).forEach((slideDiv, index) => {
        const isActive = index === currentSlide;
        slideDiv.style.opacity = isActive ? 1 : 0;
        slideDiv.style.zIndex = isActive ? 1 : 0;
    });
    
    if (currentSlide === 0) {
        if (isCarouselVisible) {
            setTimeout(() => {
                animateCredentialDrop(slidesContainer.children[0]);
            }, 100); 
        }
    } else {
        const cardContainer = slidesContainer.children[0].querySelector('#credential-card-0');
        if (cardContainer) {
            cardContainer.classList.remove('credential-animate', 'flipped');
            if (animationEndListener) {
                cardContainer.removeEventListener('animationend', animationEndListener);
                animationEndListener = null;
            }
        }
    }

    indicatorsContainer.innerHTML = ''; 
    slidesData.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full transition-colors duration-300 shadow-inner`;
        
        if (index === currentSlide) {
            dot.classList.add('bg-blue-700');
        } else {
            dot.classList.add('bg-gray-300', 'hover:bg-gray-400');
        }

        dot.setAttribute('aria-label', `Ir al slide ${index + 1}`);
        dot.addEventListener('click', () => { goToSlide(index); });
        indicatorsContainer.appendChild(dot);
    });
}

function goToSlide(newIndex) {
    if (newIndex < 0 || newIndex >= totalSlides || newIndex === currentSlide) return;
    currentSlide = newIndex;
    renderCarousel();
}

function initSobreEnvios() {
    slidesContainer = document.getElementById('slides-container');
    indicatorsContainer = document.getElementById('indicators-container');
    
    if(!slidesContainer || !indicatorsContainer) return;

    renderCarousel();

    const aboutMeSection = document.getElementById('about-me');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            isCarouselVisible = true; 
            if (currentSlide === 0 && slidesContainer.children.length > 0) {
                animateCredentialDrop(slidesContainer.children[0]); 
            }
            observer.disconnect(); 
        }
    }, { threshold: 0.3 }); 
    
    if (aboutMeSection) observer.observe(aboutMeSection);
}