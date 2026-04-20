document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos para animação
    const elements = document.querySelectorAll('.animate-in');

    // Aplica o fade-in de baixo para cima com um delay progressivo (Stagger)
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 120); // 120ms de diferença entre cada elemento
    });

    // Adiciona feedback tátil/visual extra no mobile
    const links = document.querySelectorAll('.link-card');
    links.forEach(link => {
        link.addEventListener('touchstart', () => {
            link.style.transform = 'scale(0.98)';
        });
        
        link.addEventListener('touchend', () => {
            link.style.transform = 'scale(1)';
        });
    });
});