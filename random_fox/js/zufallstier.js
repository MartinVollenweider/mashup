function neuLaden() {
    // mit fetch() das Laden einer externen Datei starten.
    // Als Parameter benötigt fetch() den Pfad zur externen Datei.
    fetch('access_fox_api.php')
    // Der fetch() Aufruf erwartet eine Antwort (response)
    .then((antwort) => {
        // Definieren, welches Format die Antwort hat (wichtig für den nächsten Teil)
        // hier text (die URL eines Bildes ist auch ein Text)
        return antwort.text();
    })
    // Wenn die Antwort eintrifft ...
    .then((meineDaten) => {
        // ... wird sie weiterverarbeitet (hier: Ausgabe in die Konsole)
        console.log("Bild Fuchs: " + meineDaten);
        document.querySelector("#output_fox").src = meineDaten;
    })
    // Nur wenn etwas nicht funktioniert hat ...
    .catch(function(error) {
        // ... wird eine Fehlermeldung ausgegeben.
        console.log('Error: ' + error.message);
    });
}
setInterval(neuLaden, 5000); // alle 5000ms neu aufrufen
neuLaden();
