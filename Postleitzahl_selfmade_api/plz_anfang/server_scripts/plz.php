<?php
// Funktion, um eine Datenbankverbindung herzustellen
function get_db_connection(){ // erzeugt ein neues DB-Verbindungsobkelt (mysqli-Objekt)
  $db = new mysqli('localhost','539197_10_1','ZiQmovUMDbyB','539197_10_1'); // objektorientierte Schreibweise von mysqli_connect
  $db->query("SET NAMES 'utf8'"); // objektorientierte Schreibweise von mysqli_query
  return $db;
}
/*
$_GET["plz"] gibt den Wert de Bezeichners (key) zurück,
  den wir zuvor in der data-Option des Ajax-Requests definiert und
  dem wir den Inhalt der JavaScript-Variablen "js_plz" übergeben haben.
        "data: { transfer_plz : js_plz},"
  Das Bezeichner-Wert-Paar wird bei der GET-Sendemethode an die Adresse
  des Scripts angehängt.
        "...plz.php?plz=123"
  In "$php_plz" ist in unserem Beispiel jetzt der Wert "123"
  gespeichert.

  Browser|          ..plz.php?plz=123"
         |                    ↓↓↓
      PHP|  $php_plz = $_GET['plz'];
  */
  $php_plz = $_GET['plz'];

  // Holt die DB-Verbindung aus database.php.
  $db = get_db_connection();

  // Abfrage für alle Postleitzahlen, die mit den Zahlen aus $php_plz
  // (im Beispiel: 123) beginnen
  $sql = "SELECT * FROM orte WHERE postleitzahl LIKE '".$php_plz."%' GROUP BY postleitzahl ORDER BY postleitzahl ASC";

  // Abfrage wird an die DB-Verbindung geschickt und erhält ein Ergebnis
  $result = $db->query($sql);

  // Ein Array, in dem alle Ergebniszeilen jeweils als Array gespeichert werden.
  $rows = array();
  // Für jede Ergebniszeile wird  beim Schleifendurchlauf ein assoziatives Array erzeugt
  while ($row = $result->fetch_assoc()) {
    // Speicherung des aktuellen Ergebnis-Arrays im Hauptarray.
    $rows[] = $row;
  }
  // Das Hauptarray wird in JSON umgewandelt und ausgegeben.
  echo json_encode($rows);
  /* Bei eingabe von "123" liefert das Script folgendes zurück:
    [{"id":"194","postleitzahl":"1231","name":"Conches","kanton":"Genf","abk":"GE"},
    {"id":"195","postleitzahl":"1232","name":"Confignon","kanton":"Genf","abk":"GE"},
    {"id":"196","postleitzahl":"1233","name":"Bernex","kanton":"Genf","abk":"GE"},
    {"id":"197","postleitzahl":"1234","name":"Vessy","kanton":"Genf","abk":"GE"},
    {"id":"198","postleitzahl":"1236","name":"Cartigny","kanton":"Genf","abk":"GE"},
    {"id":"199","postleitzahl":"1237","name":"Avully","kanton":"Genf","abk":"GE"},
    {"id":"200","postleitzahl":"1239","name":"Collex","kanton":"Genf","abk":"GE"}]
*/

  // Datenbankverbindung schliessen
  $db->close();
?>
