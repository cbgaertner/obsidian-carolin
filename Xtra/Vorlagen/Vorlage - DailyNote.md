<%*
const dateString = tp.file.title;
const date = moment(dateString, "YYYY-MM-DD");
const dateStringLong = date.format("dddd, D. MMMM YYYY");
const datePrevious = date.clone().subtract(1, 'days');
const dateStringPrevious = datePrevious.format("YYYY-MM-DD");
const dateNext = date.clone().add(1, 'days');
const dateStringNext = dateNext.format("YYYY-MM-DD");
const weekDayString = date.format("dddd");
const weekString = date.format("YYYY-[KW]WW");
const monthString = date.format("YYYY-MM MMMM");
const quarterString = date.format("YYYY-[Q]Q");
const yearString = date.format("YYYY");
-%>
---
fileClass: DailyNote
tags: "Periodic/Daily"
Datum: <% dateString %>
Wochentag: <% weekDayString %>
KW: '[[<% weekString %>]]'
Monat: '[[<% monthString %>]]'
Quartal: '[[<% quarterString %>]]'
Jahr: '[[<% yearString %>]]'
banner: '[[BannerWochentag<% weekDayString %>.jpg]]'
icon: '[[IconWochentag<% weekDayString %>.png]]'
---
# <% dateStringLong %>

« [[<% dateStringPrevious %>|Vorheriger Tag]] | [[<% dateStringNext %>|Nächster Tag]] »

## Ereignisse

- 