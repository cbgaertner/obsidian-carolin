---
fileClass: WeeklyNote
Von: <% tp.user.periodicNotes.getStartOf(tp.file.title, "week") %>
Bis: <% tp.user.periodicNotes.getEndOf(tp.file.title, "week") %>
Tage: <% tp.user.periodicNotes.getNoteList(tp.file.title, "day", "week") %>
Monat: <% tp.user.periodicNotes.getLink(tp.file.title, "month", "week") %>
Quartal: <% tp.user.periodicNotes.getLink(tp.file.title, "quarter", "week") %>
Jahr: <% tp.user.periodicNotes.getLink(tp.file.title, "year", "week") %>
banner: <% tp.user.periodicNotes.getBannerLink(tp.file.title, "week") %>
icon: "[[IconWoche.png]]"
---
