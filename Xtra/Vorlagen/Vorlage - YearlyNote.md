<%*
const yearString = tp.file.title;
const date = moment(yearString, "YYYY");
const dateStart = date.clone().startOf("year");
const dateStringStart = dateStart.format("YYYY");
const dateEnd = date.clone().endOf("year");
const dateStringEnd = dateEnd.format("YYYY");
const yearPrevious = date.clone().subtract(1, 'years');
const yearStringPrevious = yearPrevious.format("YYYY");
const yearNext = date.clone().add(1, 'years');
const yearStringNext = yearNext.format("YYYY");

let monthList = "[";
let currentMonth = dateStart.clone();
while(currentMonth <= dateEnd) {
	if (monthList.length > 1) monthList += ", ";
	monthList += "'[[" + currentMonth.format("YYYY-MM MMMM") + "]]'";
	currentMonth.add(1, "months");
}
monthList += "]";

let quarterList = "[";
let currentQuarter = dateStart.clone();
while(currentQuarter <= dateEnd) {
	if (quarterList.length > 1) quarterList += ", ";
	quarterList += "'[[" + currentQuarter.format("YYYY-[Q]Q") + "]]'";
	currentQuarter.add(1, "quarters");
}
quarterList += "]";
-%>
---
fileClass: YearlyNote
tags: "Periodic/Yearly"
banner: '[[BannerJahr<% yearString %>.jpg]]'
icon: '[[IconJahr.png]]'
Monate: <% monthList %>
Quartale: <% quarterList %>
---
# <% yearString %>
« [[<% yearStringPrevious %>|Vorheriges Jahr]] | [[<% yearStringNext %>|Nächstes Jahr]] »
