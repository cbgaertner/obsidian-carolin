<%*
const monthString = tp.file.title;
const date = moment(monthString, "YYYY-MM MMMM");
const monthStringLong = date.format("MMMM YYYY");
const monthStringNumber = date.format("MM");
const monthStringName = date.format("MMMM");
const dateStart = date.clone().startOf("month");
const dateStringStart = dateStart.format("YYYY-MM-DD");
const dateEnd = date.clone().endOf("month");
const dateStringEnd = dateEnd.format("YYYY-MM-DD");
const monthPrevious = date.clone().subtract(1, 'months');
const monthStringPrevious = monthPrevious.format("YYYY-MM MMMM");
const monthNext = date.clone().add(1, 'months');
const monthStringNext = monthNext.format("YYYY-MM MMMM");
const quarterString = date.format("YYYY-[Q]Q");
const yearString = date.format("YYYY");

let dayList = "[";
let currentDay = dateStart.clone();
while(currentDay <= dateEnd) {
	if (dayList.length > 1) dayList += ", ";
	dayList += "'[[" + currentDay.format("YYYY-MM-DD") + "]]'";
	currentDay.add(1, "days");
}
dayList += "]";

let weekList = "[";
let currentWeek = dateStart.clone();
while(currentWeek <= dateEnd) {
	if (weekList.length > 1) weekList += ", ";
	weekList += "'[[" + currentWeek.format("GGGG-[KW]WW") + "]]'";
	currentWeek.add(1, "weeks");
}
weekList += "]";
-%>
---
fileClass: MonthlyNote
tags: Periodic/Monthly
banner: '[[BannerMonat<% monthStringNumber %>.jpg]]'
icon: '[[IconMonat<% monthStringNumber %>.png]]'
Von: '[[<% dateStringStart %>]]'
Bis: '[[<% dateStringEnd %>]]'
Monat: <% monthStringName %>
Tage: <% dayList %>
KWs: <% weekList %>
Quartal: '[[<% quarterString %>]]'
Jahr: '[[<% yearString %>]]'
---
# <% monthStringLong %>
« [[<% monthStringPrevious %>|Vorheriger Monat]] | [[<% monthStringNext %>|Nächster Monat]] »
