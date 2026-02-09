<%*
const firstOfQuarter = moment(tp.file.title, "YYYY-[Q]Q");
const lastOfQuarter = firstOfQuarter.clone().endOf("quarter");
const quarterTitle = tp.date.now("[Quartal] Q [/] YYYY", 0, tp.file.title, "YYYY-[Q]Q");
const quarterNumber = tp.date.now("Q", 0, tp.file.title, "YYYY-[Q]Q");
const quarterName = tp.date.now("[Q]Q", 0, tp.file.title, "YYYY-[Q]Q");
const quarterStart = firstOfQuarter.format("YYYY-MM-DD");
const quarterEnd = lastOfQuarter.format("YYYY-MM-DD");

const year = tp.date.now("YYYY", 0, tp.file.title, "YYYY-[Q]Q");

const previousQuarter = firstOfQuarter.clone().subtract(1, "quarters").format("YYYY-[Q]Q");
const nextQuarter = firstOfQuarter.clone().add(1, "quarters").format("YYYY-[Q]Q");

let monthList = "[";
let currentMonth = firstOfQuarter.clone();
while(currentMonth <= lastOfQuarter) {
	if (monthList.length > 1) monthList += ", ";
	monthList += "'[[" + currentMonth.format("YYYY-MM MMMM") + "]]'";
	currentMonth.add(1, "months");
}
monthList += "]";

let weekList = "[";
let currentWeek = firstOfQuarter.clone();
while(currentWeek <= lastOfQuarter) {
	if (weekList.length > 1) weekList += ", ";
	weekList += "'[[" + currentWeek.format("GGGG-[KW]WW") + "]]'";
	currentWeek.add(1, "weeks");
}
weekList += "]";
-%>
---
fileClass: QuarterlyNote
tags: "Periodic/Quarterly"
banner: '[[BannerQuartal<% quarterNumber %>.jpg]]'
icon: CgKalenderQuartal<% quarterNumber %>
iconize-color-css: var(--color-yellow)
cssclasses:
  - icon-color-yellow
  - banner
  - banner-fade
Quartal: <% quarterName %>
KWs: <% weekList %>
Monate: <% monthList %>
Jahr: '[[<% year %>]]'
---
![[BannerQuartal<% quarterNumber %>.jpg]]
# <% quarterTitle %>

> [!journal-nav] « [[<% previousQuarter %>|Vorheriges Quartal]] | [[<% year %>]] | [[<% nextQuarter %>|Nächstes Quartal]] »
