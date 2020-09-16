function doFetch() {
    // mit fetch() das Laden einer externen Datei starten.
    // Als Parameter benötigt fetch() den Pfad zur externen Datei.
    fetch('joke_01.php')
    // Der fetch() Aufruf erwartet eine Antwort (response)
    .then((response) => {
        // Definieren, welches Format die Antwort hat (wichtig für den nächsten Teil)
        return response.text();
    })
    // Wenn die Antwort eintrifft ...
    .then((data) => {
        // ... wird sie weiterverarbeitet (hier: Ausgabe in die Konsole)
        console.log("String: " + data);
        // Und der Witz wird im Paragraph ausgegeben
        document.querySelector("#joke").innerHTML = data;
    })
    // Nur wenn etwas nicht funktioniert hat ...
    .catch(function(error) {
        // ... wird eine Fehlermeldung ausgegeben.
        console.log('Error: ' + error.message);
    });
}
setInterval(doFetch, 10000);// call fetch every 10 seconds
doFetch();
