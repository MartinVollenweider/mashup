// Damit wir die HTML-Elemente im Skript verwenden können,
// speichern wir sie mit Hilfe der ID in JS-Variablen.

let plz_input = document.querySelector('#plz__input_field');
let plz_list = document.querySelector('#plz__datalist');
let ort_input = document.querySelector('#ort__input_field');

// EventListener: Sobald bei der Eingabe in das Feld eine Taste losgelassen wird...
plz_input.addEventListener("keyup", function() {
  if(this.value.length > 1){
    // URL-String mit GET-Variable "plz" erzeugen.
    // Variable und Wert benötigt PHP zur Suche in der DB.
    let url = 'server_scripts/plz.php?plz=' + this.value;
    fetch(url)
        .then((response) => {
          // als Antwort wird JSON erwartet.
          return response.json();
        })
        .then((data) => {
          // data-JSON wird automatisch in ein JS-Objekt umgewandelt.
          // Aufruf der update_plz_list()-Funktion mit data als zu übergebender Wert.
          update_plz_list(data);
        })
        .catch(function(error) {
          console.log('Error: ' + error.message);
        });
  }
});

// "orte" ist ein Objekt
// Es besteht aus mehreren JS-Objekten, in denen jeweils die Informationen
// zu einem Ort gespeichert sind.
// Die ersten beiden Werte für die Eingabe "123" sehen wie folgt aus:
//  {
//    0: {id: "194", postleitzahl: "1231", name: "Conches", kanton: "Genf", abk: "GE"}
//    1: {id: "195", postleitzahl: "1232", name: "Confignon", kanton: "Genf", abk: "GE"}
//    ...
//  }
function update_plz_list(orte){
  // Inhalt der datalist löschen
  plz_list.innerHTML = '';
  // für alle Elemente im Objelt "orte"
  for (let i in orte) {
    // "ort" ist das aktuelle Schleifen-Objekt aus "orte".
    let ort = orte[i];
    // Neues <option> Element für die datalist erzeugen. (noch nicht in HTML eingefügt)
    let datalist_opt = document.createElement('option');
    // Wert der option ist die "postleitzahl" des aktuellen Orts.
    datalist_opt.value = ort.postleitzahl;
    // Name des Orts und Abkürzung des Kantons werden ebenso angezeigt.
    datalist_opt.textContent = ort.name + ", " + ort.abk;
    // <option> Element in die datalist schreiben (in HTML sichtbar)
    plz_list.appendChild(datalist_opt);
  }
}

// EventListener: Sobald bei der Inhalt des Felds geändert wurde und der Fokus das Feld verlässt...
plz_input.addEventListener("change", function() {
  if(this.value.length > 1){
    let url = 'server_scripts/plz.php?plz=' + this.value;
    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let ort = data[0];
          ort_input.value = ort.name;
        })
        .catch(function(error) {
          console.log('Error: ' + error.message);
        });
  }
});
