---
fileClass: QuarterlyNote
tags: Periodic/Quarterly
banner: <% tp.user.periodicNotes.getBannerLink(tp.file.title, "quarter") %>
icon: <% tp.user.periodicNotes.getIconLink(tp.file.title, "quarter") %>
Quartal: <% tp.user.periodicNotes.getQuarter(tp.file.title, "quarter") %>
KWs: <% tp.user.periodicNotes.getNoteList(tp.file.title, "week", "quarter") %>
Monate: <% tp.user.periodicNotes.getNoteList(tp.file.title, "month", "quarter") %>
Jahr: <% tp.user.periodicNotes.getLink(tp.file.title, "year", "quarter") %>
---
