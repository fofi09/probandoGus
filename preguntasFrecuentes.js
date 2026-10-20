// ================= ARCHIVO: preguntasFrecuentes.js =================

function toggleAccordion(button) {
    const currentItem = button.closest('.accordion-item');
    const currentContent = currentItem.querySelector('.accordion-content');
    const isOpen = currentContent.classList.contains('open');

    // Cierra todos los demás acordeones
    document.querySelectorAll('.accordion-item').forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.icon-wrapper i');
        const iconWrapper = item.querySelector('.icon-wrapper');
        const badge = item.querySelector('.badge');

        // Resetea clases a cerrado (con el degradado de los botones)
        content.classList.remove('open');
        header.className = 'accordion-header w-full flex items-center justify-between p-4 bg-gradient-to-br from-blue-700 to-[#8da9c4] text-white font-medium hover:brightness-110 transition-all duration-200 select-none text-left';
        iconWrapper.className = 'icon-wrapper w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs text-white';
        icon.className = 'fa-solid fa-plus';
        badge.className = 'badge w-6 h-6 rounded-full border border-white/60 flex items-center justify-center text-xs font-light';
    });

    // Si el ítem cliqueado no estaba abierto, lo abre
    if (!isOpen) {
        const icon = button.querySelector('.icon-wrapper i');
        const iconWrapper = button.querySelector('.icon-wrapper');
        const badge = button.querySelector('.badge');

        currentContent.classList.add('open');
        // Estilos al estar abierto (Fondo blanco)
        button.className = 'accordion-header w-full flex items-center justify-between p-4 bg-white text-gray-600 font-medium hover:bg-gray-50 transition-colors duration-200 select-none text-left';
        iconWrapper.className = 'icon-wrapper w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600';
        icon.className = 'fa-solid fa-minus';
        badge.className = 'badge w-6 h-6 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center text-xs font-light';
    }
}