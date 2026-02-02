<%*
const quarterString = tp.file.title;
const date = moment(quarterString, "YYYY-[Q]Q");
const quarterStringLong = date.format("[Quartal] Q [/] YYYY");
const quarterStringShort = date.format("[Q]Q");
const quarterStringNumber = date.format("Q");
const dateStart = date.clone().startOf("quarter");
const dateStringStart = dateStart.format("YYYY-MM-DD");
const dateEnd = date.clone().endOf("quarter");
const dateStringEnd = dateEnd.format("YYYY-MM-DD");
const quarterPrevious = date.clone().subtract(1, 'quarters');
const quarterStringPrevious = quarterPrevious.format("YYYY-[Q]Q");
const quarterNext = date.clone().add(1, 'quarters');
const quarterStringNext = quarterNext.format("YYYY-[Q]Q");
const yearString = date.format("YYYY");

let monthList = "[";
let currentMonth = dateStart.clone();
while(currentMonth <= dateEnd) {
	if (monthList.length > 1) monthList += ", ";
	monthList += "'[[" + currentMonth.format("YYYY-MM MMMM") + "]]'";
	currentMonth.add(1, "months");
}
monthList += "]";

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
fileClass: QuarterlyNote
tags: "Periodic/Quarterly"
banner: '[[BannerQuartal<% quarterStringNumber %>.jpg]]'
icon: '[[IconQuartal<% quarterStringNumber %>.png]]'
Quartal: <% quarterStringShort %>
KWs: <% weekList %>
Monate: <% monthList %>
Jahr: '[[<% yearString %>]]'
---
# <% quarterStringLong %>
« [[<% quarterStringPrevious %>|Vorheriges Quartal]] | [[<% quarterStringNext %>|Nächstes Quartal]] »
