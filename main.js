// ----------------------------------------------------
// LÓGICA CONJUNTA: AL CARGAR LA PÁGINA COMPLETAMENTE
// ----------------------------------------------------
window.addEventListener('load', () => {
    
    // Iniciar iconos Lucide
    if(window.lucide) { lucide.createIcons(); }

    // Quitar pantalla de carga
    const loaderContainer = document.getElementById('loader-container');
    const mainContent = document.getElementById('main-content');
    
    setTimeout(() => {
        if (loaderContainer) {
            loaderContainer.classList.add('loader-hidden');
        }
        
        if (mainContent) {
            mainContent.classList.add('visible');
            mainContent.classList.add('start-animations');
        }
        
        setTimeout(() => {
            if (loaderContainer) {
                loaderContainer.remove();
            }
        }, 500); 
    }, 2500); 

    // Iniciar el Carrusel en el fondo (Llama a la función del otro archivo)
    if (typeof initSobreEnvios === 'function') {
        initSobreEnvios();
    }
});