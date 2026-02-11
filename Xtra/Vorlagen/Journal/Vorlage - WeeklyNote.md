<%*
const firstOfWeek = moment(tp.file.title, "YYYY-[KW]WW").startOf("week");
const lastOfWeek = firstOfWeek.clone().endOf("week");
const weekTitle = tp.date.now("[Kalenderwoche] W [/] YYYY", 0, tp.file.title, "YYYY-[KW]WW");
const weekNumber = tp.date.now("WW", 0, tp.file.title, "YYYY-[KW]WW");
const weekStart = firstOfWeek.format("YYYY-MM-DD");
const weekEnd = lastOfWeek.format("YYYY-MM-DD");

const month = tp.date.now("YYYY-MM MMMM", 0, tp.file.title, "YYYY-[KW]WW");
const monthName = tp.date.now("MMMM", 0 , tp.file.title, "YYYY-[KW]WW");
const quarter = tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-[KW]WW");
const quarterNumber = tp.date.now("Q", 0, tp.file.title, "YYYY-[KW]WW");
const year = tp.date.now("YYYY", 0, tp.file.title, "YYYY-[KW]WW");

const previousWeek = firstOfWeek.clone().subtract(1, "weeks").format("YYYY-MM MMMM");
const nextWeek = firstOfWeek.clone().add(1, "weeks").format("YYYY-MM MMMM");

let dayList = "[";
let current = firstOfWeek.clone();
while(current <= lastOfWeek) {
	if (dayList.length > 1) dayList += ", ";
	dayList += "'[[" + current.format("YYYY-MM-DD") + "]]'";
	current.add(1, "days");
}
dayList += "]";
-%>
---
fileClass: WeeklyNote
tags: "Periodic/Weekly"
banner: '[[BannerKW<% weekNumber %>.jpg]]'
icon: CgKalenderWoche
iconize-color-css: var(--color-yellow)
cssclasses:
  - icon-color-yellow
  - banner
  - banner-fade
Von: '[[<% weekStart %>]]'
Bis: '[[<% weekEnd %>]]'
Tage: <% dayList %>
Monat: '[[<% month %>]]'
Quartal: '[[<% quarter %>]]'
Jahr: '[[<% year %>]]'
---
# <% weekTitle %>

> [!journal-nav] « [[<% previousWeek %>|Vorherige Woche]] | [[<% month %>|<% monthName %>]] | [[<% quarter %>|Quartal <% quarterNumber %>]] | [[<% year %>]] | [[<% nextWeek %>|Nächste Woche]] »
