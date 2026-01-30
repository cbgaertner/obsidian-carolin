<%*
const weekString = tp.file.title;
const date = moment(weekString, "GGGG-[KW]WW");
const weekStringLong = date.format("[Kalenderwoche] W [/] GGGG");
const weekStringNumber = date.format("WW");
const dateStart = date.clone().startOf("week");
const dateStringStart = dateStart.format("YYYY-MM-DD");
const dateEnd = date.clone().endOf("week");
const dateStringEnd = dateEnd.format("YYYY-MM-DD");
const weekPrevious = date.clone().subtract(1, 'weeks');
const weekStringPrevious = weekPrevious.format("GGGG-[KW]WW");
const weekNext = date.clone().add(1, 'weeks');
const weekStringNext = weekNext.format("GGGG-[KW]WW");
const monthString = date.format("YYYY-MM MMMM");
const quarterString = date.format("YYYY-[Q]Q");
const yearString = date.format("YYYY");

let dayList = "[";
let current = dateStart.clone();
while(current <= dateEnd) {
	if (dayList.length > 1) dayList += ", ";
	dayList += "'[[" + current.format("YYYY-MM-DD") + "]]'";
	current.add(1, "days");
}
dayList += "]";
-%>
---
fileClass: WeeklyNote
tags: Periodic/Weekly
Von: '[[<% dateStringStart %>]]'
Bis: '[[<% dateStringEnd %>]]'
Tage: <% dayList %>
Monat: '[[<% monthString %>]]'
Quartal: '[[<% quarterString %>]]'
Jahr: '[[<% yearString %>]]'
banner: '[[BannerKW<% weekStringNumber %>.jpg]]'
icon: "[[IconWoche.png]]"
---
# <% weekStringLong %>
« [[<% weekStringPrevious %>|Vorherige Woche]] | [[<% weekStringNext %>|Nächste Woche]] »
