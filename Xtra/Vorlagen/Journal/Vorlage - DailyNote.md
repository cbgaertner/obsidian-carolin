<%*
const weekday = tp.date.now("dddd", 0, tp.file.title, "YYYY-MM-DD");
const previousDay = tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD");
const nextDay = tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD");
const week = tp.date.now("YYYY-[KW]WW", 0, tp.file.title, "YYYY-MM-DD");
const weekNumber = tp.date.now("WW", 0, tp.file.title, "YYYY-MM-DD");
const month = tp.date.now("YYYY-MM MMMM", 0, tp.file.title, "YYYY-MM-DD");
const monthName = tp.date.now("MMMM", 0 , tp.file.title, "YYYY-MM-DD");
const quarter = tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD");
const quarterNumber = tp.date.now("Q", 0, tp.file.title, "YYYY-MM-DD");
const year = tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD");
-%>
---
fileClass: DailyNote
banner: '[[BannerWochentag<% weekday %>.jpg]]'
icon: 'CgKalenderWochentag<% weekday %>'
iconize-color-css: var(--color-yellow)
cssclasses: 
  - icon-color-yellow
  - banner
  - banner-fade
tags: Periodic/Daily
Datum: <% tp.file.title %>
Wochentag: <% weekday %>
KW: '[[<% week %>]]'
Monat: '[[<% month %>]]'
Quartal: '[[<% quarter %>]]'
Jahr: '[[<% year %>]]'
---
# <% tp.date.now("dddd, D. MMMM YYYY", 0, tp.file.title, "YYYY-MM-DD") %>

> [!journal-nav] « [[<% previousDay %>|Vorheriger Tag]] | [[<% week %>|KW <% weekNumber %>]] | [[<% month %>|<% monthName %>]] | [[<% quarter %>|Quartal <% quarterNumber %>]] | [[<% year %>]] | [[<% nextDay %>|Nächster Tag]] »

## Ereignisse

- 

> [!agenda] Heute erledigt
> ```tasks
> done on <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
> hide task count
> ```