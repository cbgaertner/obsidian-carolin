---
fileClass: DailyNote
tags: Periodic/Daily
Datum: <% tp.user.periodicNotes.getDay(tp.file.title, "day") %>
Wochentag: <% tp.user.periodicNotes.getWeekDay(tp.file.title, "day") %>
KW: <% tp.user.periodicNotes.getLink(tp.file.title, "week", "day") %>
Monat: <% tp.user.periodicNotes.getLink(tp.file.title, "month", "day") %>
Quartal: <% tp.user.periodicNotes.getLink(tp.file.title, "quarter", "day") %>
Jahr: <% tp.user.periodicNotes.getLink(tp.file.title, "year", "day") %>
banner: <% tp.user.periodicNotes.getBannerLink(tp.file.title, "day") %>
icon: <% tp.user.periodicNotes.getIconLink(tp.file.title, "day") %>
---
