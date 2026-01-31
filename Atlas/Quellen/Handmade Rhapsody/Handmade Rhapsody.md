---
fileClass: Quelle
Typ: Kurs
---
```base
views:
  - type: cards
    name: Tabelle
    filters:
      and:
        - Kurs == link("Handmade Rhapsody")
        - Typ == "Lektion"
    groupBy:
      property: Modul
      direction: ASC
    image: note.banner
    imageAspectRatio: 0.6

```
