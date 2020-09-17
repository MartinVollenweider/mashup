# Client - Server - Modell
# Die Anatomie des Web
# Entmystifizierung des Web
Das Web ist ein technisches Gebilde, ein technisches Konstrukt, dass auf einem sehr simplen Modell beruht, dem
## Client - Server - Modell.
Dieses Modell und einige andere technische Grundlagen möchte ich im folgenden möglichst untechnisch erklären. Es geht darum einen Überblick über die Abläufe Internet bekommen.
Wie kommen wir an die Informationen aus dem Web? 
Wie weiss das Web, welche Informationen es uns schicken soll? Woraus setzen sich Webseiten zusammen?
Auf diese und andere Fragen versuche ich hier eine Code-freie Antwort zu geben.
Los geht's.
Wir alle sehen, lesen, nutzen, konsumieren jeden Tag Webseiten der unterschiedlichsten Art. Da wir als Mensch jedoch nicht im mindesten internetfähig sind, brauchen wir eine technische Lösung.
## Das Gerät
Um ins Internet zu gehen brauchen wir ein technisches Gerät, das in der Lage ist, sich mit dem Internet zu verbinden. Das kann ein Laptop, ein Smartphone, ein Tablet, oder irgend ein anderes Gerät sein. Alle diese Geräte sind aus technischer Sicht sehr ähnlich aufgebaut. Sie bestehen alle aus ähnlichen Komponenten und diese Komponenten versetzen sie in die Lage sich mit dem Internet zu verbinden.
Ein internetfähiges Gerät ist aber nur ein Teil der Lösung. Ein Computer alleine kann nichts. Erst durch ein Betriebssystem wie Windows, MacOS, Android, iOS etc. werden sie zum Leben erweckt und erst durch Programme, die auf diesem Betriebssystem laufen ist er auch vielseitig einsetzbar. Das Programm, ein App, mit der wir die Webseiten aufrufen ist …
### Der Browser
Die bekanntesten Browser sind Chrome, Firefox, Edge und Safari. Die ersten drei gibt es für Windows, Android, MacOS und abgesehen von Edge auch auf iOS. Safari lebt nur auf MacOS und iOS, spielt aber gerade auf letzterem eine herausragende Rolle.
Im Grunde machen alle Browser das Selbe. Sie laden die den Code für die Webseiten aus dem Netz stellen anhand diese Codes dar. Eine Webseite sind also normalerweise nicht auf unseren Geräten gespeichert, sondern im Web. 
Um die gewünschte Seite aus dem Web zu laden müssen wir eine URL  in die Adresszeile des Browsers eingeben, oder einen Link anklicken. Mit diesen Angaben verbindet sich unser Browser mit dem 
## Computer im Web
Wie diese Verbindung zustande kommt ist eine eigene Geschichte und spielt hier keine Rolle. Wenn wir also z. B. https://www.fhgr.ch als URL eingeben, stellt der Browser automatisch eine Verbindung zu dem Computer im Web her, auf dem die Informationen, der Code für die FHGR-Webseite gespeichert ist.
Solch ein Computer im Web sieht zwar anders aus, als unser eigener Computer, er funktioniert im Prinzip genau so, wie unser Gerät zu Hause. Er besteht aus ähnlichen Bausteinen und hat ein Betriebssystem auf dem Programme laufen. Natürlich sind die Bausteine auf die benötigte Leistung zugeschnitten, das Betriebssystem etwas anders konfiguriert. 
Und genauso, wie bei unserem Laptop reicht ein Gerät mit Betriebssystem alleine nicht aus. Um die Informationen für den Browser bereitzustellen läuft auf dem Computer im Web  ein spezialisiertes
### Dienstprogramm
Dieses Dienstprogramm empfängt die Angaben vom Browser (den Link), sucht die benötigten Informationen auf dem Web-Computer, auf dem es selbst läuft und schickt diesen Webseiten-Code als Antwort an den Browser.
## Der Browser 
Der vom Dienstprogramm geschickte Informationscode wird jetzt vom Browser empfangen und als Webseite dargestellt. 
## Zusammenfassung
- Das Browser-Programm auf dem Anwender-Computer fordert von einem Dienst-Programm auf dem Netz-Computer Informationen an. Dazu schickt es eine Anfrage (die URL). 
- Das Dienst-Programm auf dem Netz-Computer sammelt die gewünschten Informationen und schickt sie als Antwort an das Browser-Programm auf dem Anwender-Computer. 
- Das Browser-Programm empfängt und verarbeitet diese Informationen. 
## Übersetzung
Und jetzt anglifizieren wir diese Formulierung ein wenig. 
### Schritt 1
Eine mögliche englische Übersetzung von "jemandem dienen" ist "to serve someone". Ersetzen wir also das Substantiv "Dienst" durch "Server" liest sich der Absatz wie folgt:

- Das Browser-Programm auf dem Anwender-Computer fordert von einem Server-Programm auf dem Netz-Computer Informationen an. Dazu schickt es eine Anfrage. 
- Das Server-Programm auf dem Netz-Computer sammelt die gewünschten Informationen und schickt sie als Antwort an das Browser-Programm auf dem Anwender-Computer. 
- Das Browser-Programm empfängt und verarbeitet diese Informationen. 

### Schritt 2 
Ein Dienst ist erst dann sinnvoll, wenn er von einem Kunden angefordert wird. Im Falle des Web(-seiten)-Dienst, des Web-Servers ist der Browser der Kunde, im Englischen "Client". Ersetzen wir also Browser durch den allgemeineren und englischen Begriff "Client" kommen wir zu folgender Definition:

- Das Client-Programm auf dem Anwender-Computer fordert von einem Server-Programm auf dem Netz-Computer Informationen an. Dazu schickt es eine Anfrage. 
- Das Server-Programm auf dem Netz-Computer sammelt die gewünschten Informationen und schickt sie als Antwort an das Client-Programm auf dem Anwender-Computer. 
- Das Client-Programm empfängt und verarbeitet diese Informationen. 

### Schritt 3
Im Grunde sind wir fertig. Ich möchte aber noch ein bisschen weiter gehen um zwei andere englische Begriffe einzuführen, die in diesem Zusammenhang immer wieder vorkommen und gerade bei Einsteigern sehr leicht zu völlig unbegründeter, ehrfürchtiger Schockstarre führen.
Anfrage = Request
Antwort = Response

- Das Client-Programm auf dem Anwender-Computer fordert von einem Server-Programm auf dem Netz-Computer Informationen an. Dazu schickt es einem Request. 
- Das Server-Programm auf dem Netz-Computer sammelt die gewünschten Informationen und schickt sie als Response an das Client-Programm auf dem Anwender-Computer. 
- Das Client-Programm empfängt und verarbeitet diese Informationen.

Dieses Modell ist die Grundlage des gesamten Internet. Sie gilt im übrigen nicht nur für Webseiten (WWW), sondern ebenso für andere Dienste wie E-Mail, Dateiverwaltung (FTP), Telefonie (VoIP), Fernsehen (VoD) usw.

## Verallgemeinerung
Korrekterweise bezeichnen die Begriffe Client und Server nur die  jeweiligen Programme, nicht die Computer, auf denen sie laufen. Im allgemeinen Sprachgebrauch werden beide Begriffe jedoch häufig für die Computer gebraucht. 
Kein Entwickler wird sagen: "Das Bild muss auf den Hostrechner geladen werden, damit die Serversoftware darauf zugreifen kann.", sondern: "Das Bild muss auf den Server, damit er darauf zugreifen kann."
Nehmen wir uns also die Definition ein letztes Mal vor und passen sie entsprechend an:

- Das Client-Programm auf dem Client-Computer fordert von einem  Server Informationen an. Dazu schickt es einem Request. 
- Der Server sammelt die gewünschten Informationen und schickt sie als Response an das Client-Programm auf dem Client-Computer. 
- Das Client-Programm empfängt und verarbeitet diese Informationen.

Oder noch kürzer:
- Der Client schickt einen Request an den Server.
- Der Server sammelt die gewünschten Informationen und schickt sie als Response an den Client. 
- Der Client verarbeitet diese Informationen.

Das klingt jetzt schon sehr nerdig, ist aber nichts weiter, als die Kurzform unserer ersten Zusammenfassung.

Nachdem wir das grundlegende Client-Server-Modell kennen, schauen wir uns die einzelnen Bestandteile etwas genauer an.
Dabei bleiben wir erst einmal auf unserem eigenen Computer und betrachten die Arbeitsweise des Browsers.




# Was verarbeitet ein Browser?
# Woraus besteht eine Webseite?
Eine Webseite besteht normalerweise aus vier verschiedenen Komponenten: HTML, CSS, JavaScript und Mediendateien.
## HTML (HyperText Markup Language)
Jede Webseite im Netz besteht in erster Linie aus HTML. Der HTML-Code ist das Rückgrad jeder Webseite. 
Die Aufgabe einer HTML-Datei ist es Inhalte sinnvoll zu strukturieren. 
### Struktur
Jede HTML-Datei hat eine vorgegebene Grundstruktur, innerhalb derer vom Entwickler eine eigene Struktur nach einigen wenigen, standardisierten Regeln Strukturen angelegt werden können. Vergleichbar ist diese Struktur mit einem Haus. Ein Haus muss ein Dach, rundherum Wände und eine Öffnung zum hineingehen haben. Anzahl der Zimmer, Farbe, Ort, Möbel, Bewohner und alles andere sieht bei jedem Haus unterschiedlich aus und ist Sache des Eigentümers.
Dennoch haben sich gewisse Strukturen (sowohl beim Haus, als auch bei HTML-Dateien) bewährt. Genauso, wie in einem mehrstöckigen Haus eine Treppe sehr sinnvoll ist, sollte man sich als Entwickler an etablierte Strukturen halten, damit die Webseiten gut zugänglich und benutzbar sind.
Z. B. ist es sinnvoll Texte in Absätzen zusammenzufassen und mit einer Überschrift zu versehen. Solch eine Überschrift mit Absatz-Text wäre dann eine Informationseinheit, die wiederum in eine übergeordnete Struktur eingebettet sein kann, u.s.w.
### Inhalte
Alle Textinhalte, wie Überschriften, Absätze, Beschriftungen, Tabellen usw. sind Bestandteil der HTML-Datei und der vom Entwickler festgelegten Struktur.

HTML-Dateien beinhalten also vor allem unformatiertem, strukturiertem Text.
## CSS (CascadingStyleSheets)
CSS sind Regeln, mit deren Hilfe wir die Elemente einer HTML-Datei formatieren können.
Wie bereits erwähnt besitzen HTML-Dateien Struktur, jedoch keine Formatierung. Dass reine HTML-Inhalte im Browser dennoch mit einer (bescheidenen) Formatierung angezeigt werden, liegt an den Einstellungen des Browsers. Diese Formatierung ist jedoch nur etwas für Puristen oder Nostalgiker, modernen Designvorstellungen wird sie nicht gerecht. 
CSS werden meist in eine eigene Datei geschrieben. Im HTML-Code findet sich dann ein Verweis auf die entsprechende CSS-Datei. So können mehrere HTML-Dateien auf eine, zentrale CSS-Datei zugreifen. Änderungen in dieser CSS-Datei betreffen dann alle HTML-Dateien, welche diese CSS laden.
Das Laden der CSS-Datei übernimmt der Browser automatisch und funktioniert wieder nach dem Client-Server-Modell, allerdings ohne dass der User etwas dazu tun muss.
## JavaScript
HTML ist streng genommen keine Programmiersprache, sondern eine Seitenbeschreibungssprache. In HTML geben wir Text eine Struktur.
Auch CSS ist keine Programmiersprache. Es dient lediglich zur Formatierung von HTML-Inhalten. Mittlerweile sind zwar auch CSS-Animationen möglich, aber logische Abläufe können wir weder mit HTML, noch mit CSS programmieren.
Die Lücke zur Programmiersprache schliesst JavaScript (JS). Mit JS können wir logische Abläufe wie Bedingungen, Schleifen, Ereignisse usw. in Webseiten programmieren und nutzen. Keine moderne Webseite kommt heute ohne JS aus.
Auch JavaScript steht normalerweise in eigenen Dateien. Auch bei JS befindet sich im HTML-Code ein Verweis auf die zu ladende JS-Datei. Und ebenso wie bei CSS übernimmt der Browser den Ladevorgang, ohne dass sich der User darum kümmern muss.
## Mediadateien
Nun besteht eine moderne Webseite nicht nur aus gut strukturiertem und schön formatiertem Text mit einem individuellen Mass an Programmierlogik. Unverzichtbarer Bestandteil von Webseiten sind heute Bilder, Videos oder andere Mediendateien. HTML ist ein reines Textformat und beinhaltet direkt keinerlei Mediendateien. Jedoch können ähnlich wie zu CSS - oder JS-Dateien Verweise auf Mediendateien in HTML hinterlegt werden. Auch hier lädt der Browser diese Mediendateien automatisch und ohne Zutun des Users.
## Zusammenfassung
Eine formatierte, Webseite mit Programmierlogik, fünf Bildern und einem Video besteht also nicht nur aus einer einzigen Datei, sondern aus der 
- grundlegenden HTML-Datei, 
- einer CSS-Datei, sowie einer 
- JS-Datei, aus 
- fünf Bilddateien und 
- einer Videodatei.
Diese Dateien werden vom Browser nacheinander geladen und dann verarbeitet. HTML, CSS und JavaScript werden dabei als Text übertragen und erst vom Browser interpretiert und ausgeführt. Man sagt auch "Webseiten werden vom Browser gerendert". Dabei werden die geladenen Mediendateien nach Anweisungen des HTML-, CSS oder JavaScript-Code in die Darstellung eingefügt.
Alle Rechenarbeit wird somit vom Browser, also vom Client übernommen. Die Verarbeitungsgeschwindigkeit hängt also nur von der Leistungsfähigkeit des Client-Computers (der Computer auf dem das Client-Programm läuft) ab. Den Server, oder genauer das Server-Programm benötigt der Client nur als zentrales Speichermedium im Web. 
Aus Entwicklersicht ist es ebenso möglich die Dateien während der Entwicklung auf dem eigenen Computer zu speichern und im Browser zu testen. Zu empfehlen ist dieses Vorgehen jedoch nicht. Webseiten sollten immer von einem Server aus getestet werden. Sie leben im Browser, aber schlafen auf dem Server.




# Wie kommen die Dateien auf den Server-Computer
Damit wir die Infos vom Server abrufen können, müssen wir sie zuerst auf den Server kopieren. Um Dateien auf einen Server zu spielen benutzen wir ein anderes Client-Programm, einen …
## FTP-Client
Das WorldWide Web ist nur einer von vielen Diensten im Internet. Das WWW bringt Webseiten zum User. Zum übertragen von Daten gibt es einen eigenen Dienst, 
## das File Transfer Protocol (FTP). 
Mit FTP können wir die Dateien auf dem Server verwalten. Der Ablauf funktioniert dabei aus technischer Sicht ganz ähnlich, wie das laden einer Webseite mit dem Browser. 
Auch hier haben wir wieder unser Client-Server-Modell, nur mit der Aufgabe angepasstem Workflow.

- Das Client-Programm auf dem Client-Computer möchte einen Zugang zum Dateisystem des Server-Computers haben. Dazu schickt es Benutzernamen und Passwort.
- Der Server prüft die Angaben und schickt einen Antwort an den Client, dass der Zugang frei ist.
- Der Client kann jetzt auf die Dateistruktur des Servers zugreifen und Dateien schreiben, löschen und verschieben.

Damit diese Dateien für einen Browser zugänglich sind, müssen sie nur in ein bestimmtes Verzeichnis kopiert werden. Der Name des Verzeichnisses ist von Server-Software zu Server-Software unterschiedlich.
Alle benötigten Informationen (Benutzername, Passwort und Web-Verzeichnis) erhalten sie von dem Anbieter ihrer Server-Software.
Es ist übrigens nicht immer ein eigenes FTP-Client-Programm nötig. Viele Code-Editoren bieten auch die Möglichkeit Dateien beim speischern direkt per FTP auf einen Server zu übertragen.
Wir Wissen jetzt, wie das Client-Server-Modell funktioniert, aus welchen Dateien der Browser eine Webseite zusammenbaut und wie wir diese Dateien auf den Web-Computer bekommen. Mit diesem Wissen können wir schon sehr schöne Webseiten entwickeln. Allerdings sind diese Webseiten statisch. Das heisst, sie sehen bei allen Usern nicht nur in der Form, sondern auch im Inhalt identisch aus. 
Wenn wir Inhalte Anzeigen wollen, die auf den User zugeschnitten sind, benötigen wir 


# Dynamische Webseiten
Dynamische Webseiten sind heutzutage nicht die Ausnahme, sondern die Regel. Bei dynamischen Webseiten werden individuelle Informationen auf den einzelnen Nutzer zugeschnitten.
Wenn wir uns beispielsweise bei einer Plattform wie Moodle einloggen, bekommen wir unseren individuellen Inhalt angezeigt, abhängig davon, für welche Kurse wir eingeschrieben sind.
Nun ist nicht für jeden User eine eigene Dateistruktur mit individuellen HTML-Dateien angelegt. Stattdessen wird der HTML-Code vom Server in dem Moment generiert, in dem der User die Seite anfordert, indem abhängig vom eingeloggten User unterschiedliche Informationen sammelt und bereitstellt. Dazu bedarf es einer Programmierlogik auf dem Server. Der Server dient also nicht mehr nur als Dateiverwaltung, sondern führt auch Programmierbefehle aus.
Für diesen Zweck gibt es verschiedene Programmiersprachen. Die vermutlich am weitesten verbreitete, Server-Programmiersprache ist …
## PHP
Mit PHP können wir dynamische Webseiten erzeugen. PHP ist ein vollwertige Programmiersprache.
Zwischen PHP und JavaScript gibt es viele Ähnlichkeiten. Der grosse Unterschied ist, dass PHP auf dem Server-Computer und JavaScript auf dem Client-Computer ausgeführt wird.
JavaScript ist eine clientseitige Programmiersprache.
PHP ist eine serverseitige Programmiersprache.
PHP kann nur von einem Server-Programm verarbeitet werden, niemals von einem Client-Programm. PHP muss also auf einem Server laufen!
### Was für Code erzeugt PHP?
Um diese Frage zu beantworten gehen wir nochmal kurz einen Schritt zurück: Ein Browser versteht nur HTML, CSS, JavaScript und kann Medienformate anzeigen. Für die Inhalte und die Verknüpfung mit den anderen Dateien ist ausschliesslich die HTML-Datei verantwortlich. Eine andere Art von Code versteht der Browser nicht.
Als Entwickler müssen wir also dafür sorgen, dass durch PHP valider HTML-Code erzeugt wird. 
Der Browser bekommt also nie einen anderen Code als HTML, CSS und JavaScript zu sehen.
Was sich momentan so kompliziert anhört heisst letztlich nur eines: PHP erzeugt HTML-Code mit Hilfe von Programmier-Logik. Dieser von PHP erzeugte HTML-Code wird vom Browser verarbeitet.
## Datenbanken
Mit PHP alleine kommen wir aber auch sehr nicht weit. Denn PHP kann zwar HTML-Code beim Aufruf der Datei erzeugen, doch ohne individuelle Daten ist die Einsatzmöglichkeit relativ begrenzt und diese Daten erhalten wir aus einer Datenbank. Erst im Zusammenspiel mit Datenbanken entfaltet sich das gesamte Potential. Denn wenn wir den Inhalt der Webseiten auf den einzelnen User zuschneiden wollen, müssen wir ihm auch individuelle Daten liefern. Und diese Daten sind am besten in Datenbanken aufgehoben. Genauso wie PHP leben die Datenbanken ausschliesslich auf dem Server. 
Vom dort aus können Informationen allen zugänglich gemacht werden, sind aber gleichzeitig vor unbefugtem Zugriff geschützt.
Denn auf die Daten einer Server-Datenbank zuzugreifen ist nur mit den richtigen Verbindungsdaten möglich. Direkt über das Web geht das nicht. Wir brauchen eine Möglichkeit, um die gewünschten Daten aus der Datenbank zu holen und in Browser-lesbare Informationen umzuwandeln. Und genau das kann PHP.
PHP ist also in erster Linie eine Schnittstelle, die gezielt Daten aus der Datenbank holt (nach Anweisung des Entwicklers) und diese als HTML-Code dem Browser zugänglich macht.
### Was passiert beim Laden einer Webseite
#### statische Webseiten
Der User ruft mit dem Browser eine statische Webseite (.html) auf.
- Der Browser verbindet sich mit dem Server.
- Der Server sucht in seinem Dateisystem die HTML-Datei.
- Der Server schickt den HTML-Code an den Browser.
- Der Browser verarbeitet den HTML-Code
	- Der erkennt Verweise auf CSS-, JS- und Medien-Dateien und lädt diese Dateien vom Server (analog zur HTML-Datei).
	- Der Browser verarbeitet alle Dateien gemäss der Anweisungen

#### dynamische Webseiten
Der User ruft mit dem Browser eine dynamische Webseite (.php) auf.
- Der Browser verbindet sich mit dem Server.
- Der Server sucht in seinem Dateisystem die PHP-Datei.
- Der Server verarbeitet die PHP-Datei.
	- PHP stellt eine Verbindung zur Datenbank her.
	- PHP teilt der Datenbank mit, welche Daten benötigt werden
		- Die Datenbank sucht die gewünschten Daten
		- Die Datenbank übergibt die Daten an PHP.
	- PHP erzeugt anhand der DB-Daten validen HTML-Code.
- Der Server schickt den HTML-Code an den Browser.
- Der Browser verarbeitet den HTML-Code.
	- Er erkennt im HTML-Code Verweise auf CSS-, JS- und Medien-Dateien und lädt diese Dateien selbstständig vom Server (analog zur HTML-Datei).
	- Der Browser verarbeitet alle Dateien gemäss der Anweisungen.

### Workflow des Entwicklers
Wenn wir unsere ersten Webseiten entwickeln kommt immer die Frage auf "Wie muss ich vorgehen?".
Deshalb folgt gleich eine schematische Abfolge, die ich für sinnvoll halte. Die einzelnen Schritte laufen in der Realität allerdings niemals so nacheinander ab. Viele Prozesse passieren gleichzeitig oder können auch in einer anderen Reihenfolge ablaufen. Letztlich muss ein Projekt jedoch alle diese Schritte irgendwann durchlaufen. Es ist also eher eine Checkliste, als ein exakter Ablaufplan.
#### statische Webseiten
- Mediendateien sammeln und kontrollieren, ob sie webtauglich sind (Dateigrösse, Datenformat, Auflösung)
- sinnvolle Ordnerstruktur anlegen
- Verbindung zum Testserver anlegen, alle bereits vorhandenen Dateien auf den Testserver hochladen und dafür sorgen, dass alle Projektdateien beim speichern automatisch auf den Testserver hochgeladen werden.
- sinnvolle HTML-Struktur anhand des Inhalts entwickeln
- Textinhalte in HTML-Struktur einfügen
- Mediendateien verknüpfen
- CSS-Datei anlegen, verknüpfen und HTML-Seite mittels CSS gestalten
- JavaScript-Datei anlegen, verknüpfen und gewünschte Funktionen  programmieren
#### dynamische Webseiten
Alle Schritte aus der Entwicklung statischer Seiten müssen wir auch bei der Entwicklung dynamischer Webseiten durchlaufen. 
Der grosse Unterschied liegt in der Datenquelle
Bei statischen Seiten schreiben wir die Inhalte direkt in den HTML-Code. Bei dynamischen Seiten holen wir mit Hilfe von PHP die Inhalte aus einer Datenbank und erzeugen mit PHP nach logischen Regeln eine HTML-Struktur mit den Inhalten aus der Datenbank. Wir erzeugen also mit PHP validen HTML-Code, den wir bei statischen Seiten von Hand schreiben müssten. Das passiert auf dem Server (in der Server-Software). Der Client, unser Browser erhält ausschliesslich HTML-Code (und natürlich die verknüpften CSS-, JS- und Mediendateien).

