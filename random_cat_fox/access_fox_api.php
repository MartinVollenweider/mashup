<?php
// URL der Daten
    $dataURL = "https://randomfox.ca/floof/";
// Liest die gesamte Datei in einen String
    $allData = file_get_contents($dataURL);
// Konvertiert eine JSON-kodierte Zeichenkette in eine PHP-Variable,
// mit Parameter true: Dekodiert JSON-Objekte als assoziative PHP-Arrays
    $jsonData = json_decode($allData, true);
// Zugriff auf den Schlüssel 'message'
    $data = $jsonData['image'];
// Daten zurückgeben
    echo $data;
?>
