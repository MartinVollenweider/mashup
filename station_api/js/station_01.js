function doFetch(paraEvent) {
    // verhindern, dass die Seite neu geladen wird
    paraEvent.preventDefault()

    // Den eingegebenen Ort auswählen
    let inputStation = document.querySelector('#station').value

    // mit fetch() das Laden einer externen Datei starten.
    // an die externe Datei wird ein Parameter "station" mit dem eingegebenen Text gehängt
    fetch('station_01.php?station='+inputStation)
    // Der fetch() Aufruf erwartet eine Antwort (response)
    .then((response) => {
        // Definieren, welches Format die Antwort hat (wichtig für den nächsten Teil)
        return response.text();
    })
    // Wenn die Antwort eintrifft ...
    .then((data) => {
        // ... wird sie weiterverarbeitet (hier: Ausgabe in die Konsole)
        console.log("String: " + data);
        // In den Paragraph "result" wird der Text mit der Eingabe und dem Resultat (data) geschrieben.
        document.querySelector("#result").innerHTML = 'Nächste Abfahrt von ' + inputStation + ': ' + data;
    })
    // Nur wenn etwas nicht funktioniert hat ...
    .catch(function(error) {
        // ... wird eine Fehlermeldung in der Konsole ...
        console.log('Error: ' + error.message);
        // ... und im Paragraph ausgegeben.
        document.querySelector("#result").src = "Es trat leider einen Fehler auf!";
    });
}

// füge einen EventListener hinzu, um auf das Absenden des Formulares zu hören
document.querySelector('#form').addEventListener('submit', doFetch)
