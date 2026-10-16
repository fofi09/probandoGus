// ================= ARCHIVO: contacto.js =================

function mostrarError(event) {
    event.preventDefault(); 
    
    const input = event.target;
    const container = input.parentElement;
    
    if (!container.querySelector('.error-tooltip'))