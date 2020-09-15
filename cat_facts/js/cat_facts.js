/* JS kommt hinein */
console.log("Verbunden mit HTML");

/* gemäss Folien Wolfgang */

function wiederhole() {

  fetch('cat_facts.php')
      .then((antwort) => {
        return antwort.text();  // kein Zusammenhang mit text von API
      })
      .then((daten) => {
        console.log("Spruch: " + daten);
        document.querySelector("#ausgabe").innerHTML = daten;
      })
      .catch(function(error) {
        console.log('Error: ' + error.message);
      });
}

setInterval(wiederhole, 3000);
wiederhole();
