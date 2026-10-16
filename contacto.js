// ================= ARCHIVO: contacto.js =================

function mostrarError(event) {
    event.preventDefault(); 
    
    const input = event.target;
    const container = input.parentElement;
    
    if (!container.querySelector('.error-tooltip')) {
        const errorMsg = document.createElement('span');
        errorMsg.className = 'error-tooltip';
        errorMsg.innerText = 'Debe ingresar su nombre';
        
        container.appendChild(errorMsg);
        input.classList.add('error-shake'); 
    }
}

function limpiarError(event) {
    const input = event.target;
    const container = input.parentElement;
    const errorMsg = container.querySelector('.error-tooltip');
    
    if (errorMsg) {
        errorMsg.remove();
        input.classList.remove('error-shake'); 
    }
}

function enviarWhatsApp(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const consulta = document.getElementById('consulta').value.trim();
    
    let mensaje = '';
    
    // Si no escribió ninguna consulta (o escribió exactamente la frase predefinida)
    if (consulta === '' || consulta === 'Quiero consultar sobre sus servicios') {
        mensaje = `Buenas, soy ${nombre}. Quiero consultar sobre sus servicios `;
    } else {
        // Si el usuario escribió su propio mensaje personalizado
        mensaje = `Mensaje de ${nombre}: ${consulta}`;
    }
    
    const telefono = "5493815392765";
    
    const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(urlWhatsApp, '_blank');
}