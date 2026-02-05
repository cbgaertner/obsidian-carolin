---
fileClass: DailyNote
tags: Periodic/Daily
Datum: <% tp.file.title %>
Wochentag: <% tp.date.now("dddd", 0, tp.file.title) %>
KW: '[[<% tp.date.now("YYYY-[KW]WW", 0, tp.file.title) %>]]'
Monat: '[[<% tp.date.now("YYYY-MM MMMM", 0, tp.file.title) %>]]'
Quartal: '[[<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title) %>]]'
Jahr: '[[<% tp.date.now("YYYY", 0, tp.file.title) %>]]'
banner: '[[BannerWochentag<% tp.date.now("dddd", 0, tp.file.title) %>.jpg]]'
icon: '[[IconWochentag<% tp.date.now("dddd", 0, tp.file.title) %>.png]]'
---
# <% tp.date.now("dddd, D. MMMM YYYY", 0, tp.file.title) %>

« [[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title) %>|Vorheriger Tag]] | [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title) %>|Nächster Tag]] »

## Ereignisse

- 

# Agenda

## Aufgaben
### Überfällig
```tasks
not done
due before <% tp.date.now("YYYY-MM-DD", 0, tp.file.title) %>
```

### Heute fällig
```tasks
not done
due on <% tp.date.now("YYYY-MM-DD", 0, tp.file.title) %>
```

### Fällig in den nächsten 2 Wochen
```tasks
not done
due after <% tp.date.now("YYYY-MM-DD", 0, tp.file.title) %>
due before <% tp.date.now("YYYY-MM-DD", 14, tp.file.title) %>
```

### Heute erledigt
```tasks
done on <% tp.date.now("YYYY-MM-DD", 0, tp.file.title) %>
```