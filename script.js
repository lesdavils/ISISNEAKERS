document.addEventListener('DOMContentLoaded', function() {
    // Ajouter un écouteur d'événements pour le clic sur le lien "Accueil"
    document.getElementById('homeLink').addEventListener('click', scrollToTop);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Ajouter un écouteur d'événements pour le clic sur les autres liens
    document.getElementById('shopLink').addEventListener('click', scrollToSection);
    document.getElementById('contactLink').addEventListener('click', scrollToSection);

    function scrollToSection(event) {
        const targetId = event.target.id.toLowerCase().replace('link', '');
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        });
    }
});
