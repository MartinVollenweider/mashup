function doFetch() {
    // Während dem Laden soll "Laden..." angezeigt werden. Das wird gemacht, sobald geklickt wurde
    document.querySelector(".joke").innerHTML = 'Laden...';
    // mit fetch() das Laden einer externen Datei starten.
    // Als Parameter benötigt fetch() den Pfad zur externen Datei.
    fetch('chucknorris_01.php')
    // Der fetch() Aufruf erwartet eine Antwort (response)
    .then((response) => {
        // Definieren, welches Format die Antwort hat (wichtig für den nächsten Teil)
        // hier text
        return response.text();
    })
    // Wenn die Antwort eintrifft ...
    .then((data) => {
        // ... wird sie weiterverarbeitet (hier: Ausgabe in die Konsole)
        console.log("String: " + data);
        document.querySelector(".joke").innerHTML = data;
    })
    // Nur wenn etwas nicht funktioniert hat ...
    .catch(function(error) {
        // ... wird eine Fehlermeldung ausgegeben.
        console.log('Error: ' + error.message);
    });
}

document.querySelector('#random-joke').addEventListener('click', doFetch)