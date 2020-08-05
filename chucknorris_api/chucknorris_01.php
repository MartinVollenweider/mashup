<?php
// URL der Daten
    $dataURL = "https://api.chucknorris.io/jokes/random";
// Liest die gesamte Datei in einen String
    $allData = file_get_contents($dataURL);
// Konvertiert eine JSON-kodierte Zeichenkette in eine PHP-Variable,
// mit Parameter true: Dekodiert JSON-Objekte als assoziative PHP-Arrays
    $jsonData = json_decode($allData, true);
// Aus dem Resultat den Witz auswählen.
    $data = $jsonData['value'];
// Daten zurückgeben
    echo $data;
?>