// Crear corazones de fondo automáticamente
function createHearts() {
    const bg = document.getElementById('heartBg');
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            bg.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 300);
    }
}

// Iniciar animación de fondo
createHearts();
setInterval(createHearts, 5000);

function abrirCarta() {
    const wrapper = document.getElementById("envelopeWrapper");
    const btn = document.getElementById("btnText");
    
    wrapper.classList.toggle("open");
    
    if (wrapper.classList.contains("open")) {
        btn.innerHTML = "✨ Cerrar carta";
        // Efecto confeti de corazones al abrir
        for(let i=0; i<15; i++) {
            createFloatingHeart();
        }
    } else {
        btn.innerHTML = "💌 Abrir mi regalo";
    }
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.color = '#ff4f8b';
    heart.style.zIndex = '100';
    document.body.appendChild(heart);
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 100 + 50;
    
    heart.animate([
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
        { transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity - 200}px) scale(1.5)`, opacity: 0 }
    ], {
        duration: 1500,
        easing: 'ease-out'
    }).onfinish = () => heart.remove();
}