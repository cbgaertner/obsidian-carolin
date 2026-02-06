<%*
const firstOfMonth = moment(tp.file.title, "YYYY-MM MMMM");
const lastOfMonth = firstOfMonth.clone().endOf("month");
const monthTitle = tp.date.now("MMMM YYYY", 0, tp.file.title);
const monthNumber = tp.date.now("MM", 0, tp.file.title);
const monthName = tp.date.now("MMMM", 0 , tp.file.title);
const monthStart = firstOfMonth.format("YYYY-MM-DD");
const monthEnd = lastOfMonth.format("YYYY-MM-DD");

const week = tp.date.now("YYYY-[KW]WW", 0, tp.file.title);
const weekNumber = tp.date.now("WW", 0, tp.file.title);
const quarter = tp.date.now("YYYY-[Q]Q", 0, tp.file.title);
const quarterNumber = tp.date.now("Q", 0, tp.file.title);
const year = tp.date.now("YYYY", 0, tp.file.title);

const previousMonth = firstOfMonth.clone().subtract(1, "months").format("YYYY-MM MMMM");
const nextMonth = firstOfMonth.clone().add(1, "months").format("YYYY-MM MMMM");

let dayList = "[";
let currentDay = firstOfMonth.clone();
while(currentDay <= lastOfMonth) {
	if (dayList.length > 1) dayList += ", ";
	dayList += "'[[" + currentDay.format("YYYY-MM-DD") + "]]'";
	currentDay.add(1, "days");
}
dayList += "]";

let weekList = "[";
let currentWeek = firstOfMonth.clone();
while(currentWeek <= lastOfMonth) {
	if (weekList.length > 1) weekList += ", ";
	weekList += "'[[" + currentWeek.format("GGGG-[KW]WW") + "]]'";
	currentWeek.add(1, "weeks");
}
weekList += "]";
-%>
---
fileClass: MonthlyNote
tags: "Periodic/Monthly"
banner: '[[BannerMonat<% monthNumber %>.jpg]]'
icon: CgKalenderMonat<% monthNumber %>
iconize-color-css: var(--color-yellow)
cssclasses:
  - icon-color-yellow
Von: '[[<% monthStart %>]]'
Bis: '[[<% monthEnd %>]]'
Monat: <% monthName %>
Tage: <% dayList %>
KWs: <% weekList %>
Quartal: '[[<% quarter %>]]'
Jahr: '[[<% year %>]]'
---
# <% monthTitle %>

> [!journal-nav] « [[<% previousMonth %>|Vorheriger Monat]] | [[<% quarter %>|Quartal <% quarterNumber %>]] | [[<% year %>]] | [[<% nextMonth %>|Nächster Monat]] »

