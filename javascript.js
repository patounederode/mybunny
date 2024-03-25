// Wacht tot de DOM volledig is geladen voordat de JavaScript wordt uitgevoerd
document.addEventListener("DOMContentLoaded", function() {
    // Selecteer de invoerveld, knop en het h2-element
    const nameInput = document.getElementById("nameInput");
    const knop = document.getElementById("knop");
    const h2 = document.querySelector("h2");

    
    function logInput() {
        const name = nameInput.value;
        h2.innerText = `Hi, ${name}`;
    }

    // Voeg een event listener toe aan de knop om de logInput-functie aan te roepen wanneer erop wordt geklikt
    knop.addEventListener("click", logInput);
});

// Selecteer alle afbeeldingen die nodig zijn voor de verzorging
const strikImg = document.getElementById('strikImg');
const bunnyImg = document.getElementById('bunnyImg');
const aaienImg = document.getElementById('aaienImg');
const wortelImg = document.getElementById('wortelImg');
const wassenImg = document.getElementById('wassenImg');
const slapenImg = document.getElementById('slapenImg');

// Variabelen om de status van het konijn bij te houden
let bunnymetstrik = false;
let bunnyisgeaaid = false;
let wortelGegeten = false;
let bunnyslaapt = false;

// Event listener voor het klikken op de strikafbeelding
strikImg.addEventListener("click", function () {
    // Controleer of het konijn al een wortel heeft gegeten voordat de strik wordt toegevoegd
    if (!wortelGegeten) return;

    // Toggle de afbeelding van het konijn tussen met en zonder strik
    if (!bunnymetstrik) {
        bunnyImg.src = 'img/mybunnystrik.png';
        bunnymetstrik = true;
    } else {
        bunnyImg.src = 'img/mybunny.png';
        bunnymetstrik = false;
    }
});

// Event listener voor het klikken op de aaien-afbeelding
aaienImg.addEventListener("click", function () {
    // Controleer of het konijn al een wortel heeft gegeten voordat het wordt geaaid
    if (!wortelGegeten) return;

    // Toggle de afbeelding van het konijn tussen met en zonder aaien
    if (!bunnyisgeaaid) {
        bunnyImg.src = 'img/mybunnyaaien.png';
        bunnyisgeaaid = true;
    } else {
        bunnyImg.src = 'img/mybunny.png';
        bunnyisgeaaid = false;
    }
});

// Event listener voor het klikken op de wortelafbeelding
wortelImg.addEventListener("click", function () {
    // Markeer dat het konijn een wortel heeft gegeten
    wortelGegeten = true;
});

// Event listener voor het klikken op de slapen-afbeelding
slapenImg.addEventListener("click", function () {
    // Controleer of het konijn al een wortel heeft gegeten voordat het gaat slapen
    if (!wortelGegeten) return;

    //Wisselt de afbeelding van het konijn tussen slapend en wakker
    if (!bunnyslaapt) {
        bunnyImg.src = 'img/mybunnyslapen.png';
        bunnyslaapt = true;
    } else {
        bunnyImg.src = 'img/mybunny.png';
        bunnyslaapt = false;
    }
});

// Functie om een reeks afbeeldingen te laten zien met een bepaalde interval
function animateImages(images) {
    let index = 0; // Start van de afbeelding

    // Functie om de afbeelding te wijzigen
    function changeImage() {
        bunnyImg.src = images[index];
        index = (index + 1) % images.length; // Verhoogt de index en zorgt ervoor dat deze niet groter wordt dan de lengte van de afbeeldingen
    }

    // Start de animatie met een interval van 550 milliseconden
    const animationInterval = setInterval(changeImage, 550);

    // Stop de animatie na de laatste afbeelding
    setTimeout(function () {
        clearInterval(animationInterval); // Stop het interval
    }, 550 * images.length); // Duur van de animatie is de intervaltijd vermenigvuldigd met het aantal afbeeldingen
}

// Event listener voor het klikken op de wortel-afbeelding om een animatie af te spelen van een konijn dat een wortel eet
wortelImg.addEventListener("click", function () {
    const wortelImages = [
        'img/mybunnywortel1.png',
        'img/mybunnywortel2.png',
        'img/mybunnywortel3.png',
        'img/mybunnywortel4.png',
        'img/mybunnywortel5.png',
        'img/mybunnywortel6.png',
        'img/mybunnywortel7.png'
    ];
    animateImages(wortelImages);
});

// Event listener voor het klikken op de wassen-afbeelding om een animatie af te spelen van een konijn dat wordt gewassen
wassenImg.addEventListener("click", function () {
    const wassenImages = [
        'img/mybunnywassen.png',
        'img/mybunnywassen1.png',
        'img/mybunnyschoon.png',
        'img/mybunny.png'
    ];
    animateImages(wassenImages);
});
