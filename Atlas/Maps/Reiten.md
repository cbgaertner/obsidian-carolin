#Reiten
# 10er-Karten
```dataviewjs
const cards = dv.pages('#Periodic/Daily').where(page => page.file.tags.includes('#Reiten/10erKarte')).sort(c => c.Datum);

let lukas = dv.pages('#Periodic/Daily').where(page => page.file.tags.includes('#Reiten/Lukas'));
for (const element of lukas) {
	element["type"] = "Lukas";
}

let rosalie = dv.pages('#Periodic/Daily').where(page => page.file.tags.includes('#Reiten/Rosalie'));
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



```dataviewjs
let pages = dv.pages('#Periodic/Daily').where(p => p.ZehnerKarte);
dv.list(pages.file.link);
```
