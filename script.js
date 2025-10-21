/* ============================================
   VAREJÃO IRMÃOS SOUZA - JAVASCRIPT
   ============================================ */

/**
 * Abre o WhatsApp com mensagem pré-preenchida
 */
function openWhatsApp() {
    const phoneNumber = "5512999999999"; // Número do WhatsApp (altere para o número correto)
    const message = "Olá! Gostaria de fazer um pedido";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}

/**
 * Abre o perfil do Instagram
 */
function openInstagram() {
    window.open("https://instagram.com/varejaoirmaosouza", "_blank");
}

/**
 * Alterna a visibilidade do chat do WhatsApp
 */
function toggleWhatsAppChat() {
    const chat = document.getElementById("whatsappChat");
    if (chat) {
        chat.classList.toggle("active");
    }
}

/**
 * Inicializa o comportamento de scroll suave para links internos
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Fecha o chat do WhatsApp quando clicar fora dele
 */
function initClickOutsideHandler() {
    document.addEventListener('click', function(event) {
        const whatsappButton = document.querySelector('.whatsapp-button');
        const whatsappChat = document.getElementById('whatsappChat');
        
        if (whatsappButton && whatsappChat) {
            // Se clicou fora do botão e do chat, fecha o chat
            if (!whatsappButton.contains(event.target) && whatsappChat.classList.contains('active')) {
                whatsappChat.classList.remove('active');
            }
        }
    });
}

/**
 * Inicializa todos os event listeners
 */
function initEventListeners() {
    // Botões de WhatsApp
    const whatsappButtons = document.querySelectorAll('[onclick="openWhatsApp()"]');
    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp();
        });
    });

    // Botão de Instagram
    const instagramButtons = document.querySelectorAll('[onclick="openInstagram()"]');
    instagramButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openInstagram();
        });
    });

    // Botão de toggle do chat
    const toggleButtons = document.querySelectorAll('[onclick="toggleWhatsAppChat()"]');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleWhatsAppChat();
        });
    });
}

/**
 * Inicializa a página quando o DOM está pronto
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Varejão Irmãos Souza - Site carregado com sucesso!');
    
    // Inicializa todas as funcionalidades
    initSmoothScroll();
    initClickOutsideHandler();
    initEventListeners();
});

/**
 * Função para debug - mostra informações no console
 */
function debugInfo() {
    console.log('=== Varejão Irmãos Souza Debug Info ===');
    console.log('Página carregada:', new Date().toLocaleString('pt-BR'));
    console.log('URL:', window.location.href);
    console.log('Resolução:', window.innerWidth + 'x' + window.innerHeight);
}

// Descomente a linha abaixo para ver informações de debug no console
// debugInfo();

