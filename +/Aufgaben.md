**Inhalt**

- [[#Aufgaben aus den DailyNotes|Aufgaben aus den DailyNotes]]
- [[#Produkterstellung|Produkterstellung]]
- [[#Blog|Blog]]
- [[#Alle sonstigen Aufgaben|Alle sonstigen Aufgaben]]

# Aufgaben aus den DailyNotes
```tasks
not done
is not blocked
filter by function task.file.folder.includes('Journal')

sort by due reverse
hide task count
```
# Alle sonstigen Aufgaben
```tasks
not done
is not blocked
filter by function !task.file.folder.includes('Journal')
filter by function !task.file.folder.includes('Ausgeklügelt/Blog')
filter by function !task.file.folder.includes('Ausgeklügelt/Party-Mottos')

sort by due reverse

hide task count
```

# Produkterstellung
```tasks
not done
is not blocked
filter by function !task.file.folder.includes('Journal')
filter by function task.file.folder.includes('Ausgeklügelt/Party-Mottos')

group by filename
sort by due reverse

hide backlink
hide task count
```

# Blog
```tasks
not done
is not blocked
filter by function !task.file.folder.includes('Journal')
filter by function task.file.folder.includes('Ausgeklügelt/Blog')

group by filename
sort by due reverse

hide backlink
hide task count
```

