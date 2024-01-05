document.addEventListener('DOMContentLoaded', function () {
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

document.addEventListener('mousemove', function (e) {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Ajoutez ici le code pour traiter le formulaire, par exemple, envoyer un e-mail, etc.
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Ajouter un écouteur d'événements pour le clic sur le logo
    document.getElementById('logoLink').addEventListener('click', scrollToHome);

    function scrollToHome(event) {
        event.preventDefault(); // Empêche le comportement de lien par défaut

        window.scrollTo({
            top: document.getElementById('home').offsetTop,
            behavior: 'smooth' // Utilisez 'smooth' pour un défilement doux
        });
    }

    // Ajouter d'autres écouteurs d'événements au besoin
});

// Ajoutez cette ligne pour récupérer la référence de votre barre de navigation
const navBar = document.querySelector('nav');

function openPopup() {
    popup.style.display = 'flex';
    navBar.classList.add('popup-active');
}

function closePopup() {
    popup.style.display = 'none';
    navBar.classList.remove('popup-active');
}

