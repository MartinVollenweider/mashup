<?php
// Koordinaten Paris
    $lat = "48.858093";
    $lon = "2.294694";
// Externe Datei mit API-Key
    require_once("webcam_key.php");
// URL der Daten
    $dataURL = "https://api.windy.com/api/webcams/v2/list/nearby=".$lat.",".$lon.",5?show=webcams:location,image&key=".$keyCam;
// Liest die gesamte Datei in einen String
    $allData = file_get_contents($dataURL);
// Konvertiert eine JSON-kodierte Zeichenkette in eine PHP-Variable,
// mit Parameter true: Dekodiert JSON-Objekte als assoziative PHP-Arrays
    $jsonData = json_decode($allData, true);
// Zufallsbild auswählen
    $randomImage = mt_rand(0,count($jsonData['result']['webcams'])-1);
// Zugriff auf den Schlüssel
    $dataURL = $jsonData['result']['webcams'][$randomImage]['image']['current']['icon'];
// Ersetze icon- durch full-Darstellung
    $data = str_replace('icon', 'full', $dataURL );

// Daten zurückgeben
    echo $data;
?>