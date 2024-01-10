---
title: 07 | Github 
author: Akansel Cengiz
authorContact: akcengiz@gmx.de
pubDate: 2024-01-09
description: "Einmal Desaster und wieder zurück bitte 🥵."
image:
    src: "/src/images/github.png"
    alt: "The Github Cat Logo."
tags: ["Github", "Version Control", "Repository"]
relatedPosts: ["post-2"]

---


Ende Dezember 2023 habe ich vor dem Jahreswechsel noch einmal einen Commit mit dem Inhalt "Mobile Menu implementiert" abgeschickt.
Anfang letzter Woche wollte ich weiter an meiner Seite arbeiten und habe direkt beim Öffnen der Datei gesehen das es lückenhaft gewesen ist.
Es fehlten teile der Komponenten, Seiten, Layouts oder auch komplett wie Package.json oder tsconfig.json.
Ich habe erst mal an nichts schlimmes gedacht weil mein Mac mit der iCloud verbunden ist und die fehlenden Daten werden schon irgendwie wieder auftauchen
weil sie noch nicht aktualisiert worden sind.
Ich habe die iCloud erst off und dann wieder online gesetzt mit der Hoffnung das es aktualisiert wird, aber nichts ist passiert.
Auf Github war das Repository noch in Takt.
Wunderbar dachte ich mir und wollte mit <code>git clone <Pfad></code> die Daten herunter laden und weiter daran arbeiten.
Es erschien ein "unable tree error" oder so. Ich konnte weder Clone noch Fetch benutzen. 
Egal was ich tat "Error Error Error".
Nichts hat funktioniert.
Nebenbei fühlte sich iCloud so lahm beim Laden an (was mir vorher nie so aufgefallen ist)das ich keine Lust mehr darauf hatte und mich nach einer alternative umgesehen habe.
Da ich eh meinen Email Account und einige andere Sachen bei Google habe lag der Gedanke nahe mich dort nieder zu lassen.
Also auf zu Google Drive.
Habe die Ordner angelegt wo Google Drive uploaden darf und es erst mal laufen lassen da ich auch einiges an Bildmaterial mitgebracht habe was sich über die Jahre angesammelt hat.
Aktuell 2.99 € für 200 GB.
Wieder zurück zu meinem Haupt problem "Warum ist mein Repo so lückenhaft?".
Auf zu Google um die verschiedenen Error Meldungen in die Suchleiste einzutippen und zu sehen ob dieses Problem auch bei anderen schon aufgetreten ist.
1. ": unable to read tree a203132ba17332782f2b3662c3cb5b7deda958d3"
2. "fatal: not a git repository (or any of the parent directories): .git"

Erste Adresse "Stack Overflow".
Wie immer nach dem Post mit dem meisten Likes Ausschau halten und lesen was dort geschrieben worden ist.
Ist meist immer ein Indiz dafür das der Code funktioniert was aber nicht heißen soll das die mit weniger Likes schlecht sind. 
Nur hier ist es halt safer das sehr viele andere den Code schon ausprobiert und es für hilfreich befunden haben.
Kann ich den Code gebrauchen ? Was passiert wenn ich den Code eintippe ? 
Zu viele Fragen im Kopf die beim Lesen automatisch aufpoppen.
So wirklich schlau und DIE Antwort auf mein Problem habe ich jetzt nicht finden können.
Nächster halt...Github Community.
Ich bin dort direkt auf einen Post gestoßen der easy peasy aussah und mich wieder auf Spur bringen könnte.
So Code eingetippt und abgeschickt:
<code>git commit -m "Initial commit"
git branch -M main</code>
Schnell zu Github um nachzusehen ob alles ok ist.
Siehe da mein Github Repo mit der Homepage,wo ich seit knapp 2 Monaten dran arbeite, ist auf einmal komplett leer.
Ich suchte wie verrückt nach einem Weg es Rückgängig (Undo) zu machen aber je länger ich suchte umso verrückter hat es mich gemacht.
Und auf einmal habe ich ein Verzeichnis auf Github gefunden wo nur noch rot "deleted" stand.
Mein Herz war so tief auf den Fußboden gerutscht das mir der Atem gestockt ist.
Zum glück waren aber auch die gelöschten Daten noch sichtbar so das ich sie mir per copy + paste erst mal rüber geholt habe.
Ich weiss ja leider auch nicht was morgen ist. 
Vielleicht sind die Daten komplett weg.
Die darauf folgende Nacht war echt mies.
Ich habe mich die folgende Woche nur darauf konzentriert meine Repository die irgendwie da oder doch nicht da ist wieder auf dem Schirm zurück zu holen damit sie wieder im public ordner ist.
Eine nette Github Userin hat mir zwei Links geschickt wo ähnliche Probleme beschrieben werden.
Beide Seiten waren super und einfach erklärt.
Meinem Problem hat es leider nicht weiter geholfen.
Ich kann Gott sei dank im VSC den Git Graphen sehen welche commits schon abgeschickt worden sind.
So dachte ich lösche den "initial commit" dann bist du wieder im "Mobile Menu Implementiert" commit und alles ist wieder wie gehabt.
Da Github nun mal Github ist und nicht Malen nach Zahlen geht die Suche mit "Wie lösche ich commits ?" los.
Dann bin ich auf den Befehl <code>git reset --hard HEAD~Zahl</code> gestoßen.

