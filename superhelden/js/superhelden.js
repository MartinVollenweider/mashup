function search_superhero() {
	// zuerst den Suchbegriff im Textfeld in die Variable "suchbegriff" speichern
	var suchbegriff = document.querySelector("#superhero_name").value;
	
	// Zeige dem Benutzer die Meldung "Wird gesucht ..." an
	document.querySelector("#output_name").innerHTML = "Wird gesucht ...";
	
    // mit fetch() das Laden einer externen Datei starten.
    // Als Parameter benötigt fetch() den Pfad zur externen Datei sowie den Namen des Superhelden, nach dem gesucht werden soll
    fetch('access_superhero_api.php?suchbegriff=' + suchbegriff)
    // Der fetch() Aufruf erwartet eine Antwort (response)
    .then((antwort) => {
        // Definieren, welches Format die Antwort hat (wichtig für den nächsten Teil)
        // hier text (die URL eines Bildes ist auch ein Text)
        return antwort.json();
    })
    // Wenn die Antwort eintrifft ...
    .then((superheld) => {
        // ... wird sie weiterverarbeitet (hier: Ausgabe in die Konsole)
        console.log("Gefundener Superheld: " + superheld);
        document.querySelector("#output_name").innerHTML = superheld.name;
        document.querySelector("#output_superhero").src = superheld.image.url;
    })
    // Nur wenn etwas nicht funktioniert hat ...
    .catch(function(error) {
        // ... wird eine Fehlermeldung ausgegeben.
        console.log('Error: ' + error.message);
    });
}

// Hier weisen wir die Funktion noch dem Suchbutton zu. Wenn der Button gedrückt wird, wird die Funktion aufgerufen.
document.querySelector("#search").onclick = search_superhero;