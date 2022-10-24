/* Regeln für den Projekte-Kanal | (c) Carsten Stephan @ TJC-Team 2022 */


/* Linkfunktion */

// Holt sich die Headlines als Array
var headlines = document.getElementsByTagName("h3");

function clickAndCopy(element) {
    
    // Packt den Text in die Zwischenablage

    navigator.clipboard.writeText(window.location.hostname + window.location.pathname + "#" + element.id)

    // ACHTUNG!
    // Durch den Code in Zeile 13 funktioniert dieses Script NICHT mit der Live-Server Extension
    // oder auf portbasierten Selfhosting, da kein Port mitkopiert wird (bsp. localhost:5500)


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
    var linkIcon = headlines[i].querySelectorAll('i');

    // Ihnen wird die Funktion mit ihrer eigenen ID verpasst.
    linkIcon[0].setAttribute('onclick', 'clickAndCopy(' + headlines[i].id + ');');

}

/* Fehlermeldung Alert */

document.getElementById("bugreport").addEventListener("click", () => {
    Swal.fire({
        text: 'Fehler und Anregungen zur Website oder zum Bot kannst du Laurino108#1008 auf Discord senden. Bei Fragen zum Projekt oder Meldung von Regelverstößen melde dich bitte über ein Ticket.',
        imageUrl: 'images/its-not-a-bug-its-a-feature.jpg',
        imageWidth: 400,
        imageAlt: 'BUGS',
        confirmButtonText: 'alles klar chef'
    })
})
