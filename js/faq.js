document.addEventListener('DOMContentLoaded', function() {
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            // Fecha todos os outros
            document.querySelectorAll('.faq-content').forEach(item => {
                item.classList.remove('active');
            });
            
            // Abre/fecha o clicado
            if (!isActive) {
                content.classList.add('active');
            }
        });
    });
});
