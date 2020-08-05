<?php
// URL der Daten, wo per "$_GET" die angefragte Station eingegeben wird
    $dataURL = "http://transport.opendata.ch/v1/stationboard?station=" . $_GET['station'] . "&limit=1";
// Liest die angefragte Datei in einen String
    $allData = file_get_contents($dataURL);
// Konvertiert eine JSON-kodierte Zeichenkette in eine PHP-Variable,
// mit Parameter true: Dekodiert JSON-Objekte als assoziative PHP-Arrays
    $jsonData = json_decode($allData, true);

// Durch die Dokumentation herausgefunden, wird der Rückgabe-String zusammengesetzt.
// https://transport.opendata.ch/docs.html#stationboard
    $data = $jsonData['stationboard'][0]['name'];
    $data .= ' nach ';
    $data .= $jsonData['stationboard'][0]['to'];

// Daten zurückgeben
    echo $data;
?>