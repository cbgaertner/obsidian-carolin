[[10er-Karte 2025-10-10]]
# Reitstunden

``` tracker
searchType: tag
searchTarget: Reiten
folder: Journal
startDate:
endDate:
summary:
    template: "I have {{sum()}} stars in total."
    style: "font-size:20px;color:yellow;margin-left: 50px;margin-top:00px;"
```
``` tracker
searchType: tag
searchTarget: Reiten
folder: Journal
bar:
    title: Reiten
    yAxisLabel: Reitstunde
    xAxisPadding: 1
    yAxisUnit: x
    yMin: 0
    barColor: darkolivegreen
```
``` tracker
searchType: tag
searchTarget: Reiten
folder: Journal
bullet:
    title: "Clean Up"
    dataset: 0
    orientation: horizontal
    range: 10
    rangeColor: darkgray
    value: 1
    valueUnit: times
    valueColor: '#69b3a2'
    showMarker: true
    markerValue: 10
    markerColor: black
```



``` tracker
searchType: task.done
searchTarget: Reitstunde Lukas, Reitstunde Rosalie
folder: Journal
stack: true
bullet:
    title: "Reiten 10er-Karte"
    dataset: 0
    orientation: horizontal
    range: 10
    rangeColor: darkgray
    value: 1
    valueUnit: times
    valueColor: '#69b3a2'
    showMarker: true
    markerValue: 10
    markerColor: black
```
```dataview
TABLE reiten, reitenLukas
FROM #Reiten
```



test1:: test2


