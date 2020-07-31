<?php
// URL der Daten
    $dataURL = "https://dog.ceo/api/breeds/image/random";
// Liest die gesamte Datei in einen String
    $allData = file_get_contents($dataURL);
// Konvertiert eine JSON-kodierte Zeichenkette in eine PHP-Variable,
// mit Parameter true: Dekodiert JSON-Objekte als assoziative PHP-Arrays
    $jsonData = json_decode($allData, true);
// Zugriff auf den Schlüssel 'message'
    $data = $jsonData['message'];

// Daten zurückgeben
    echo $data;
?>