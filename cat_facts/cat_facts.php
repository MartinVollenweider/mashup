<?php

/* PHP ruft API auf */
$katzenURL = "https://cat-fact.herokuapp.com/facts";
// In einen String laden
$alleDaten = file_get_contents($katzenURL);
$daten = json_decode($alleDaten, true);

$min = 0;
$max = count($daten['all']) -1;

$zufallszahl = rand($min,   $max);


$ausgabe = $daten['all'][$zufallszahl]['text'];



echo $ausgabe;


?>
