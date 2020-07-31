<?php
// URL der Daten
    $dataURL = "https://images-api.nasa.gov/search?q=mars&media_type=image";
// Liest die gesamte Datei in einen String
    $allData = file_get_contents($dataURL);
// Konvertiert eine JSON-kodierte Zeichenkette in eine PHP-Variable,
// mit Parameter true: Dekodiert JSON-Objekte als assoziative PHP-Arrays
    $jsonData = json_decode($allData, true);
// Zufallsbild auswählen
    $randomImage = mt_rand(0,count($jsonData['collection']['items'])-1);
// Zugriff auf den Schlüssel
// Ergibt https://images-assets.nasa.gov/image/PIA06767/collection.json
    $dataURL = $jsonData['collection']['items'][$randomImage]['href'];

// Detailbild herausfinden
    $allData = file_get_contents($dataURL);
    $jsonData = json_decode($allData, true);
    $data = $jsonData[0];  // ist immer 0, das beste Bild
// Oft seltsame oder nicht brauchbare Erweiterungen, z.B. .tif oder tiff
    $extension = substr($data, -3);
    if ($extension == "tif" || $extension == "iff" || $extension == "") {
        $data = "img/mars.jpg";
    }

// Daten zurückgeben
    echo $data;
?>