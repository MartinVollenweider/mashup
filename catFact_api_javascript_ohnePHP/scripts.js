//Definition der Anzeige der Cocktails in einer Variable
const app = document.getElementById('root');

//Erzeugen eines Containers für die Verwaltung der einzelnen Datensätze
const container = document.createElement('div');
container.setAttribute('class', 'container');
container.setAttribute('id', 'container');
//Der Containenr wird der app hinzugefügt
app.appendChild(container);
//________________________________________________________________________________________________________________________________________________________________________________________________________
//Funktion für den Abruf der API und das befüllen der Daten
function getFact() {
	
//Dies ist die "ältere" Variante für einen Aufruf von Daten. Sämtliche Details findet ihr hier: https://www.w3schools.com/xml/xml_http.asp
var request = new XMLHttpRequest();
//Der API Zugriff
request.open('GET', 'https://cat-fact.herokuapp.com/facts', true);

//Wenn das Laden der Daten erfolgreich war, wird dieser Bereich ausgeführt.
request.onload = function () {

//mit diesem Befehlt wird die JSON Datei in ein Objetk umgewandelt, so können wir die einzelnen Daten leicht erreichen
var obj = JSON.parse(this.response);
//Hier wird das Objekt überprüft
 //console.log(obj);
 

 
 //Hier startet das Verarbeiten der Daten
 if (request.status >= 200 && request.status < 400) {
	 //Das Objekt besitzt das Element Drinks. Dort sind sämtliche Drins vorhanden. Wir befüllen die Variable drinks nun damit und bekommen ein Array
	 var facts = obj.all;
	 //Überprüfen der einzelnen Drinks
	 console.log(facts);
	 randomNumber = getRndInteger(0,facts.length);
	 console.log(randomNumber);
	 
	 //facts.randomNumber;
	 const card = document.createElement('div');
	 card.setAttribute('class', 'card');
	 const h1 = document.createElement('h1');
	 h1.textContent = facts[randomNumber].text;
	 container.appendChild(card);
	 card.appendChild(h1);

 }
 //Falls es keinen Treffer gibt, wird dieser Text angezeigt.
 else{
  console.log("Es gibt keine Fakten zu Katzen ^O.o^");
 }
}

request.send();

}
//________________________________________________________________________________________________________________________________________________________________________________________________________
//Dies ist der Listener für das Suchfeld. Jedesmal wenn sich der Wert im Feld ändert, wird die Funktion getDrinks ausgeführt.
function newFact() {
	//var searchString = document.getElementById("newSearchField").value;
	//Bevor neue Daten ins Dom geschrieben werden, werden die alten mit dieser Funktion gelöscht.
	clearDOM();
	getFact();
}
//________________________________________________________________________________________________________________________________________________________________________________________________________
//Diese Funktion leert das DOM.
function clearDOM(){	
	while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
}
	
}
//________________________________________________________________________________________________________________________________________________________________________________________________________
function getRndInteger(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}