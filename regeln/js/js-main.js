/* Regeln für den Projekte-Kanal | (c) Carsten Stephan @ TJC-Team 2022 */

// Holt sich die Headlines als Array
var headlines = document.getElementsByTagName("h3");

function clickAndCopy(element) {
    
    // Packt den Text in die Zwischenablage
    navigator.clipboard.writeText(window.location.host + window.location.pathname + "#" + element.id)

    // Feuert den Alert ab
    Swal.fire({ 
        icon: 'success',
        position: 'top-end',
        title: 'Link in die Zwischenablage kopiert',
        toast: true, 
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    })
}

// Für jede einzelne Headline...
for (i = 0; i < headlines.length; i++) {

    // ...werden alle "i"-Elemente geholt. Das sollten nur die von Fontawesome sein.
    var linkIcon = headlines[i].querySelector('i');

    // Ihnen wird die Funktion mit ihrer eigenen ID verpasst.
    linkIcon.setAttribute('onclick', 'clickAndCopy(' + headlines[i].id + ');');

}

/* Fehlermeldung Alert */

document.getElementById("bugreport").addEventListener("click", () => {
    Swal.fire({
        html: 'Fehler und Anregungen zur Website oder zum Bot kannst du <a target="_blank" href="https://discord.com/users/842752885602254906">Laurino108#1008</a> auf Discord senden. Bei Fragen zum Projekt oder Meldung von Regelverstößen melde dich bitte über ein Ticket.',
        imageUrl: 'images/bug.jpg',
        imageWidth: 400,
        imageAlt: 'BUGS',
        confirmButtonText: 'Alrighty Then'
    })
})
