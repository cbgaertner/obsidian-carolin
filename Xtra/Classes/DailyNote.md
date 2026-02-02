---
limit: 20
mapWithTag: false
icon: package
tagNames:
filesPaths:
bookmarksGroups:
excludes:
extends:
savedViews: []
favoriteView:
fieldsOrder:
  - ccpU1O
  - dqO7O7
  - pAruC6
  - 3Bg4jW
  - CBS1rN
  - utVFws
  - LFEgCs
  - G37r6d
  - V7R8at
version: "2.75"
fields:
  - name: Datum
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: ccpU1O
  - name: KW
    type: File
    options: {}
    path: ""
    id: pAruC6
  - name: Wochentag
    type: Input
    options: {}
    path: ""
    id: dqO7O7
  - name: Jahr
    type: File
    options: {}
    path: ""
    id: utVFws
  - name: Quartal
    type: File
    options: {}
    path: ""
    id: CBS1rN
  - name: Monat
    type: File
    options: {}
    path: ""
    id: 3Bg4jW
  - name: reitenLukas
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": 10er-Karte 2025-10-10
        "2": 10er-Karte 2025-11-07
        "3": 10er-Karte 2025-12-12
        "4": 10er-Karte 2026-01-30
    path: ""
    id: LFEgCs
    style:
      bold: false
  - name: reitenRosalie
    type: Select
    options:
      sourceType: ValuesFromDVQuery
      valuesList:
        "1": ""
      valuesFromDVQuery: dv.pages('"Journal"')
    path: ""
    id: G37r6d
  - name: ZehnerKarte
    type: Boolean
    options: {}
    path: ""
    id: V7R8at
---
