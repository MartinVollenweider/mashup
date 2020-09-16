<?php
	/*
	 * Diese Datei muss mit einem GET-Parameter aufgerufen werden, Beispiel:
	 *
	 * access_superhero_api.php?suchbegriff=Batman
	 * 
	 * In der GET-Variable "suchbegriff" muss der Suchbegriff stehen, den der Benutzer im Textfeld eingegeben hat
	 */
	 
	// URL der Daten
    $dataURL = "https://superheroapi.com/api/2727400457530188/search/". $_GET['suchbegriff'];
	
	// Liest die gesamte Datei in einen String
    $allData = file_get_contents($dataURL);
	
	// Konvertiert eine JSON-kodierte Zeichenkette in eine PHP-Variable,
	// mit Parameter true: Dekodiert JSON-Objekte als assoziative PHP-Arrays
    $jsonData = json_decode($allData, true);
	
	// Zugriff auf den Schlüssel 'results'
    $results = $jsonData['results'];
	
	// $results ist ein Array, von dem brauchen wir aber gemäss Aufgabenstellung nur das erste Element
	$data = $results[0];
	
	// Daten zurückgeben
    echo json_encode($data);
?>
