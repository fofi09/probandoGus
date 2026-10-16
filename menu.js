// ================= ARCHIVO: menu.js =================
function initMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');
    
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
        
        if (isOpen) {
            // Añade la clase 'open' para transformar la hamburguesa en X
            btn.classList.add('open');
            // Calcula la altura real del contenido para deslizar hacia abajo
            menu.style.maxHeight = menu.scrollHeight + "px";
            // Pone el pequeño borde para que quede lindo al abrir
            menu.style.borderBottomWidth = "1px";
        } else {
            // Quita la clase 'open' para volver a la hamburguesa
            btn.classList.remove('open');
            // Cierra deslizando hacia arriba
            menu.style.maxHeight = "0px";
            // Quita el borde
            setTimeout(() => {
                if (!isOpen) menu.style.borderBottomWidth = "0px";
            }, 300); // 300ms es lo que dura la animación
        }
    }

    // Al hacer click en el botón de hamburguesa
    if(btn && menu) {
        btn.addEventListener('click', toggleMenu);
    }

    // Al hacer click en cualquier opción ("Servicios", "Sobre mí", etc.), se cierra el menú
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen) {
                toggleMenu();
            }
        });
    });
}

// Iniciar la lógica del menú ni bien carga la estructura de la página
window.addEventListener('DOMContentLoaded', initMenu);