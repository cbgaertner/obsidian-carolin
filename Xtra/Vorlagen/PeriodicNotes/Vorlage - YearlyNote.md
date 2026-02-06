<%*
const year = tp.file.title;
const firstOfYear = moment(tp.file.title, "YYYY").startOf("year");
const lastOfYear = firstOfYear.clone().endOf("year");
const yearStart = firstOfYear.format("YYYY-MM-DD");
const yearEnd = lastOfYear.format("YYYY-MM-DD");

const previousYear = firstOfYear.clone().subtract(1, "years").format("YYYY");
const nextYear = firstOfYear.clone().add(1, "years").format("YYYY");

let monthList = "[";
let currentMonth = firstOfYear.clone();
while(currentMonth <= lastOfYear) {
	if (monthList.length > 1) monthList += ", ";
	monthList += "'[[" + currentMonth.format("YYYY-MM MMMM") + "]]'";
	currentMonth.add(1, "months");
}
monthList += "]";

let quarterList = "[";
let currentQuarter = firstOfYear.clone();
while(currentQuarter <= lastOfYear) {
	if (quarterList.length > 1) quarterList += ", ";
	quarterList += "'[[" + currentQuarter.format("YYYY-[Q]Q") + "]]'";
	currentQuarter.add(1, "quarters");
}
quarterList += "]";
-%>
---
fileClass: YearlyNote
tags: "Periodic/Yearly"
banner: '[[BannerJahr<% year %>.jpg]]'
icon: CgKalenderJahr
iconize-color-css: var(--color-yellow)
cssclasses:
  - icon-color-yellow
Von: '[[<% yearStart %>]]'
Bis: '[[<% yearEnd %>]]'
Monate: <% monthList %>
Quartale: <% quarterList %>
---
![[BannerJahr<% year %>.jpg]]
# <% year %>
« [[<% previousYear %>|Vorheriges Jahr]] | [[<% nextYear %>|Nächstes Jahr]] »
