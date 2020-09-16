<?php
// URL der Daten
    $dataURL = "https://official-joke-api.appspot.com/jokes/random";
// Liest die gesamte Datei in einen String
    $allData = file_get_contents($dataURL);
// Konvertiert eine JSON-kodierte Zeichenkette in eine PHP-Variable,
// mit Parameter true: Dekodiert JSON-Objekte als assoziative PHP-Arrays
    $jsonData = json_decode($allData, true);
// Setup und Punchline auswählen
    $setup = $jsonData['setup'];
    $punchline = $jsonData['punchline'];

// Setup und Punchline in einen String geben. Sicherstellen, dass zwei Zeilenumbrüche gemacht werden.
    $data = $setup . ' <br><br> ' . $punchline;

// Daten zurückgeben
    echo $data;
?>
