---
fileClass: YearlyNote
tags: Periodic/Yearly
banner: <% tp.user.periodicNotes.getBannerLink(tp.file.title, "year") %>
icon: '[[IconJahr.png]]'
Monate: <% tp.user.periodicNotes.getNoteList(tp.file.title, "month", "year") %>
Quartale: <% tp.user.periodicNotes.getNoteList(tp.file.title, "quarter", "year") %>
---
