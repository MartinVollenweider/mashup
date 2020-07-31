<?php
// URL der Daten, siehe https://dog.ceo/dog-api/documentation/
    $dataURL = "https://dog.ceo/api/breeds/list/all";
// Liest die gesamte Datei in einen String
    $allData = file_get_contents($dataURL);
// Konvertiert eine JSON-kodierte Zeichenkette in eine PHP-Variable,
// mit Parameter true: Dekodiert JSON-Objekte als assoziative PHP-Arrays
    $jsonData = json_decode($allData, true);
// Zugriff auf den Schlüssel 'message'
    $data = $jsonData['message'];
// Es gibt nur Schlüsselwerte (siehe dog APT Doku), man baut einen Array,
// welcher die Schlüssel enthält
// siehe JS-Beispiel https://medium.com/swlh/dog-app-using-javascript-with-an-api-72d944af6773
// Object.keys in PHP ist array_keys, siehe https://www.w3schools.com/php/func_array_keys.asp
    $arrayData = array_keys($data);

// Daten zurückgeben
    for ($i=0; $i<count($arrayData); $i++) {
        echo ucfirst($arrayData[$i]), "<br>";  // ucfirst: Erster Buchstabe versal
    }
?>