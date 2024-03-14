let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}


//dark mode

let darkmode = document.querySelector('#darkmode');
darkmode.onclick =() =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

// Détecter quand l'utilisateur fait défiler la page
window.addEventListener('scroll', () => {
    const scrollSections = document.querySelectorAll('.scroll-section');

    // Pour chaque section à animer
    scrollSections.forEach(section => {
        // Vérifiez si la section est visible à l'écran
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // La section est visible à l'écran si sa position supérieure est inférieure à la hauteur de la fenêtre et sa position inférieure est supérieure à 0
        const isVisible = (sectionTop < window.innerHeight) && (sectionBottom > 0);

        if (isVisible) {
            // Ajoutez une classe active à la section pour déclencher l'animation CSS
            section.classList.add('active');
        } else {
            // Retirez la classe active uniquement si la section est complètement hors de la vue (au-dessus ou en dessous de la fenêtre)
            if (sectionTop > window.innerHeight || sectionBottom < 0) {
                section.classList.remove('active');
            }
        }
    });
});

// Sélectionnez toutes les boîtes d'expérience
const experienceBoxes = document.querySelectorAll('.experience-box');

// Parcourez chaque boîte d'expérience
experienceBoxes.forEach(box => {
    // Ajoutez un écouteur d'événement clic à chaque boîte
    box.addEventListener('click', () => {
        // Parcourez chaque boîte d'expérience à nouveau pour cacher les textes supplémentaires
        experienceBoxes.forEach(b => {
            b.querySelector('.extra-info').style.display = 'none';
        });
        // Affichez le texte supplémentaire de la boîte actuelle
        box.querySelector('.extra-info').style.display = 'block';
    });
});

function togglePopup(box) {
    // Trouver la popup à l'intérieur de la boîte d'expérience cliquée
    var popup = box.querySelector('.popup');

    // Ajouter ou supprimer la classe 'active' pour afficher ou masquer la popup avec l'animation de transition
    popup.classList.toggle('active');
}
function togglePopup(box) {
    // Ajoutez ou supprimez la classe "clicked" pour activer ou désactiver l'animation d'agrandissement
    box.classList.toggle('clicked');
}
