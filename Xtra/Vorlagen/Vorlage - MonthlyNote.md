---
fileClass: MonthlyNote
tags: Periodic/Monthly
banner: <% tp.user.periodicNotes.getBannerLink(tp.file.title, "month") %>
icon: <% tp.user.periodicNotes.getIconLink(tp.file.title, "month") %>
Von: <% tp.user.periodicNotes.getStartOf(tp.file.title, "month") %>
Bis: <% tp.user.periodicNotes.getEndOf(tp.file.title, "month") %>
Monat: <%tp.user.periodicNotes.getMonthName(tp.file.title, "month") %>
Tage: <% tp.user.periodicNotes.getNoteList(tp.file.title, "day", "month") %>
KWs: <% tp.user.periodicNotes.getNoteList(tp.file.title, "week", "month") %>
Quartal: <% tp.user.periodicNotes.getLink(tp.file.title, "quarter", "month") %>
Jahr: <% tp.user.periodicNotes.getLink(tp.file.title, "year", "month") %>
---
