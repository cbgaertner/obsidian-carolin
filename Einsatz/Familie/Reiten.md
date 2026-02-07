#Sport/Reiten
# 10er-Karten
```dataviewjs
// Alle DailyNotes mit dem Tag '#Reiten/10erKarte'
const zehnerkarten = dv.pages('#Periodic/Daily').where(page => page.file.tags.includes('#Sport/Reiten/10erKarte')).sort(c => c.Datum);

// Alle DailyNotes mit dem Tag '#Reiten/Lukas'
const reitstundenLukas = dv.pages('#Periodic/Daily').where(page => page.file.tags.includes('#Sport/Reiten/Lukas'));
for (const element of reitstundenLukas) {
	element["typ"] = "Lukas";
}

// Alle DailyNotes mit dem Tag '#Reiten/Rosalie'
const reitstundenRosalie = dv.pages('#Periodic/Daily').where(page => page.file.tags.includes('#Sport/Reiten/Rosalie'));
for (const element of reitstundenRosalie) {
	element["typ"] = "Rosalie";
}

// Die beiden Listen mit den Reitstunden-DailyNotes zusammenfassen
// und nach Datum sortieren
const reitstundenGesamt = reitstundenLukas.concat(reitstundenRosalie).sort(r => r.Datum);

// Reitstunden auf die Zehnerkarten verteilen
let indexReitstunde = 0;
for (const karte of zehnerkarten) {
	// Datum als Text in ein Property der Zehnerkarte setzen
	let datumKarte = karte.Datum.toLocaleString(DateTime.DATE_FULL);
	datumKarte = datumKarte.replace(".", "\\.");
	console.log(datumKarte);
	karte.Name = datumKarte;
	
	// Properties für die Listen der Reitstunden der Kinder
	// anlegen
	karte.Lukas = [];
	karte.Rosalie = [];
	
	// die Reitstunden den entsprechenden Listen zuweisen
	for (let count = 0; count < 10 && indexReitstunde < reitstundenGesamt.length; count++) {
		let reitstunde = reitstundenGesamt[indexReitstunde];
		karte[reitstunde["typ"]].push(reitstunde.Datum);
		indexReitstunde++;
	}
}

// falls noch Reitstunden übrig sind, eine Zehnerkarte ohne Datum hinzufügen
let alleZehnerkarten = zehnerkarten;
if (indexReitstunde < reitstundenGesamt.length) {
	// letzte DailyNote zu einer Zehnerkarte machen, um ein
	// Element für eine nicht vorhandene Zehnerkarte zu haben,
	// die noch bezahlt werden muss
	const letzteDailyNote = dv.pages('#Periodic/Daily').sort(c => c.Datum, "desc").limit(1);
	letzteDailyNote[0].Lukas = [];
	letzteDailyNote[0].Rosalie = [];
	letzteDailyNote[0].Name = "noch nicht bezahlt";
	
	// die übrigen Reitstunden, die noch nicht mit einer
	// Zehnerkarte bezahlt wurden, auf die neue, unbezahlte
	// Zehnerkarte buchen
	for (let index = indexReitstunde; index < reitstundenGesamt.length; index++) {
		let reitstunde = reitstundenGesamt[index];
		letzteDailyNote[0][reitstunde["typ"]].push(reitstunde.Datum);
	}
	
	// die unbezahlte Zehnerkarte zu den anderen hinzufügen
	alleZehnerkarten = zehnerkarten.concat(letzteDailyNote);
}

// Verbleibende, bezahlte Reitstunden berechnen
const anzahlVerbleibend = alleZehnerkarten.length * 10 - reitstundenLukas.length - reitstundenRosalie.length;


// Ausgabe
dv.paragraph("Noch übrig von der aktuellen 10er-Karte: <b>" + anzahlVerbleibend + "</b>");

dv.table([
			"10er-Karte", 
			"Lukas", 
			"Rosalie"
		], 
		alleZehnerkarten.sort(z => z.Datum, "desc").map(z => [
			z.Name,
			z.Lukas,
			z.Rosalie
		]));
```

# Liste 10er-Karten
```dataviewjs
const cards = dv.pages('#Periodic/Daily').where(page => page.file.tags.includes('#Sport/Reiten/10erKarte')).sort(c => c.Datum);

let lukas = dv.pages('#Periodic/Daily').where(page => page.file.tags.includes('#Sport/Reiten/Lukas'));
for (const element of lukas) {
	element["type"] = "Lukas";
}

let rosalie = dv.pages('#Periodic/Daily').where(page => page.file.tags.includes('#Sport/Reiten/Rosalie'));
for (const element of rosalie) {
	element["type"] = "Rosalie";
}

const countRemaining = cards.length * 10 - lukas.length - rosalie.length;

let lukasAndRosalie = lukas.concat(rosalie).sort(b => b.Datum);
let index = 0;
let count = 0;
for (const element of lukasAndRosalie) {
	if (count == 10) {
		index++;
		count = 0;
	}
	element["10er-Karte"] = cards[index];
	count++;
}
let lukasAndRosalieGrouped = lukasAndRosalie.sort(g => g.Datum, "desc").groupBy(b => b["10er-Karte"]);

dv.paragraph("Noch übrig von der aktuellen 10er-Karte: <b>" + countRemaining + "</b>");

for (let group of lukasAndRosalieGrouped.sort(g => g.key, "desc")) {
	dv.header(5, group.key.Datum.toLocaleString());
	dv.table([
			"Name", 
			"Typ"
		], 
		group.rows.sort(b => b["10er-Karte"]).map(b => [
			b.file.name, 
			b["type"]
		]));
}
```

