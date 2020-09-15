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
function getDrinks(searchString) {
	
//Dies ist die "ältere" Variante für einen Aufruf von Daten. Sämtliche Details findet ihr hier: https://www.w3schools.com/xml/xml_http.asp
var request = new XMLHttpRequest();
//Hier wird der Request vorbereitet. Der searchString sit eine Variable aus der Funtkion newSearch.
request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+searchString+'', true);

//Wenn das Laden der Daten erfolgreich war, wird dieser Bereich ausgeführt.
request.onload = function () {

//mit diesem Befehlt wird die JSON Datei in ein Objetk umgewandelt, so können wir die einzelnen Daten leicht erreichen
var obj = JSON.parse(this.response);
//Hier wird das Objekt überprüft
 console.log(obj);
 
 //Hier startet das Verarbeiten der Daten
 if (request.status >= 200 && request.status < 400) {
	 //Das Objekt besitzt das Element Drinks. Dort sind sämtliche Drins vorhanden. Wir befüllen die Variable drinks nun damit und bekommen ein Array
	 var drinks = obj.drinks;
	 //Überprüfen der einzelnen Drinks
	 console.log(drinks);
	 		//Hier staret die forEach Schleife. Für jedes Element im Array wird ausgeführt.
			 drinks.forEach(function(element) {
				 //überprüfen des einzelnen Namen des Drinks
			 	console.log(element.strDrink);
			 	//Anschliessend werden die gewünschten Daten im HTML angeordnet
			 	//card ist die Hülle eines einzelnen Drinks
		      const card = document.createElement('div');
		      card.setAttribute('class', 'card');
			  //Hier wird der titel gesetzt
		      const h1 = document.createElement('h1');
		      //strDrink ist der Name des Drinks
		      h1.textContent = element.strDrink;	
		      
		      var p = document.createElement('p');
		      //strInstructionsDE ist die Anleitung für das mixen. Gekürzt auf 600 Zeichen, wegen des Designs.
            var drinkDescription = element.strInstructionsDE.substring(0, 600);
            p.textContent = drinkDescription;
		      
		      //Hier wird das DOM abschliessend manipuliert.
		      container.appendChild(card);
			  card.appendChild(h1);
			  card.appendChild(p); 
	 	
			 	
		});
 }
 //Falls es keinen Treffer gibt, wird dieser Text angezeigt.
 else{
  console.log("Der Drink existiert nicht!");
 }
}

request.send();

}
//________________________________________________________________________________________________________________________________________________________________________________________________________
//Dies ist der Listener für das Suchfeld. Jedesmal wenn sich der Wert im Feld ändert, wird die Funktion getDrinks ausgeführt.
function newSearch() {
	var searchString = document.getElementById("newSearchField").value;
	//Bevor neue Daten ins Dom geschrieben werden, werden die alten mit dieser Funktion gelöscht.
	clearDOM();
	getDrinks(searchString);
}
//________________________________________________________________________________________________________________________________________________________________________________________________________
//Diese Funktion leert das DOM.
function clearDOM(){	
	while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
}
	
}
//________________________________________________________________________________________________________________________________________________________________________________________________________
