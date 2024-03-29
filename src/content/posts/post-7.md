---
title: 07 | Github 
author: Akansel Cengiz
authorContact: akcengiz@gmx.de
pubDate: 2024-01-09
description: "Einmal Desaster und wieder zurück bitte 🥵."
image:
    src: "/src/images/disaster.png"
    alt: "The Github Cat Logo."
tags: ["Github", "Version Control", "Repository"]
relatedPosts: ["post-2"]

---

<section class="w-10/12 text-justify flex flex-col items-center "> 

## Was ist passiert ?

Ende Dezember 2023 habe ich vor dem Jahreswechsel meinen letzten Commit mit dem Inhalt "Mobile Menu implementiert" abgeschickt.
Anfang letzter Woche wollte ich weiter an meiner Seite arbeiten und habe direkt beim Öffnen der Datei gesehen das es lückenhaft gewesen ist.
Es fehlten teile der Komponenten, Seiten, Layouts oder auch komplett wie Package.json oder tsconfig.json.
Ich habe erst mal an nichts schlimmes gedacht weil mein Mac mit der [iCloud](https://www.icloud.com/) verbunden ist und die fehlenden Daten werden schon irgendwie wieder auftauchen
weil sie noch nicht aktualisiert worden sind.
Ich habe die iCloud erst off und dann wieder online gesetzt mit der Hoffnung das es aktualisiert wird, aber nichts ist passiert.
Auf Github war das Repository noch in Takt.
Wunderbar dachte ich mir und wollte mit <code>git clone</code> die Daten herunter laden und weiter daran arbeiten.
Es erschien ein "unable tree error" oder so. Ich konnte weder Clone noch Fetch benutzen. 
Egal was ich tat "Error Error Error".
Nichts hat funktioniert.


## Mögliche Gründe, vielleicht die iCloud ?

Nebenbei fühlte sich [iCloud](https://www.icloud.com/) so lahm beim Laden an (was mir vorher nie so aufgefallen ist)das ich keine Lust mehr darauf hatte und mich nach einer alternative umgesehen habe.
Da ich eh meinen Email Account und einige andere Sachen bei Google habe lag der Gedanke nahe mich dort nieder zu lassen.
Also auf zu [Google Drive](https://www.google.com/intl/de/drive/).
Habe die Ordner angelegt wo Google Drive uploaden darf und es erst mal laufen lassen da ich auch einiges an Bildmaterial mitgebracht habe was sich über die Jahre angesammelt hat.
Aktuell 2.99 € für 200 GB.
Wieder zurück zu meinem Haupt problem "Warum ist mein Repo so lückenhaft?".
Auf zu Google um die verschiedenen Error Meldungen in die Suchleiste einzutippen und zu sehen ob dieses Problem auch schon bei anderen aufgetreten ist.

1. 1.": unable to read tree a203132ba17332782f2b3662c3cb5b7deda958d3"
- 
1. 2."fatal: not a git repository (or any of the parent directories): .git"

## Stack Overflow, Github Community etc.

Erste Adresse [Stack Overflow](https://stackoverflow.com/).
Wie immer nach dem Post mit dem meisten Likes Ausschau halten und lesen was dort geschrieben worden ist.
Ist meist immer ein Indiz dafür das der Code funktioniert was aber nicht heißen soll das die mit weniger Likes schlecht sind. 
Nur hier ist es halt safer das sehr viele andere den Code schon ausprobiert und es für hilfreich befunden haben.
Kann ich den Code gebrauchen ? Was passiert wenn ich den Code eintippe ? 
Zu viele Fragen im Kopf die beim Lesen automatisch aufpoppen.
So wirklich schlau und DIE Antwort auf mein Problem habe ich jetzt nicht finden können.
Nächster halt...[Github Community](https://github.com/community).
Ich bin dort direkt auf einen Post gestoßen der easy peasy aussah und mich wieder auf Spur bringen könnte.
So, code eingetippt und abgeschickt:
<code>git commit -m "Initial commit"
git branch -M main</code>
Schnell zu [Github](https://github.com/) um nachzusehen ob alles ok ist.
Siehe da mein Github Repo mit der Homepage,wo ich seit knapp 2 Monaten dran arbeite, ist auf einmal komplett leer.
Ich suchte wie verrückt nach einem Weg es Rückgängig (Undo) zu machen aber je länger ich suchte umso verrückter hat es mich gemacht.

<img
  src="/src/images/github_deleted.png"
  width="600"
  height="200"
  decoding="async"
  loading="lazy"
  alt="swup logo"
  class="rounded border-2 border-dark float-left
   m-4"
/>
Und auf einmal habe ich ein Verzeichnis auf Github gefunden wo nur noch rot "deleted" stand.
Mein Herz war so tief auf den Fußboden gerutscht das mir der Atem gestockt ist.
Zum glück waren aber auch die gelöschten Daten noch sichtbar so das ich sie mir per copy + paste erst mal rüber geholt habe.
Ich weiss ja leider auch nicht was morgen ist. 
Vielleicht sind die Daten komplett weg.
Die darauf folgende Nacht war echt mies.
Ich habe mich die folgende Woche nur darauf konzentriert meine Repository die irgendwie da war oder doch nicht da war wieder auf dem Schirm zurück zu holen damit sie wieder im public ordner ist.
Eine nette Github Userin hat mir zwei Links 1. [How to fix the “fatal: not a git repository” error](https://www.airplane.dev/blog/fixing-fatal-not-a-git-repository-error) und 2.[
Undo Changes in Git: git checkout, git revert, & git reset](https://www.nobledesktop.com/learn/git/undo-changes) geschickt wo ähnliche Probleme beschrieben werden.
Beide Seiten waren super und einfach erklärt.
Meinem Problem hat es leider nicht weiter können.
Ich kann Gott sei dank im VSC den Git Graphen sehen welche commits schon abgeschickt worden sind.
So dachte ich lösche den "initial commit" dann bist du wieder im "Mobile Menu Implementiert" commit und alles ist wieder wie gehabt.
Da Github nun mal Github ist und nicht Malen nach Zahlen geht die Suche mit "Wie lösche ich commits ? oder Wie mache ich den letzten Befehl wieder rückgängig?" los.

<img
  src="/src/images/github_initial_commit_1.png"
  width="600"
  height="200"
  decoding="async"
  loading="lazy"
  alt="swup logo"
  class="rounded border-2 border-dark float-left
   m-4"
/>
Dann bin ich auf den Befehl <code>git reset --hard HEAD</code> gestoßen.
Ich habe diesen Befehl benutzt um zwei überflüssige Commits rückgängig zu machen.
Anstatt "HEAD" wird einfach die Commit ID genutzt <code>git reset --hard a0fa81</code>.
Voila ist der GitGraph Tree wieder beim "Mobile Menu implementiert" angekommen.


<img
  src="/src/images/github_gitgraph.png"
  width="600"
  height="200"
  decoding="async"
  loading="lazy"
  alt="swup logo"
  class="rounded border-2 border-dark float-right
   m-4"
/>
Hier kann man es sehr schön sehen das der Commit "Initial Commit" nicht mehr im Graphen zu sehen ist.
Er kam direkt nach "Mobile Menu implementiert".

## Fazit


Ich habe mein Repo mit <code>Git Clone "Repo Name"</code> herunter laden können obwohl es komischerweise nicht im public ordner liegt.
Bekomme es auch leider nicht wieder dorthin zurück.
Will jetzt auch nicht mehr weiter dran rum wurschteln da ich jetzt schon fast 2 Wochen nur durch wiederherstellen und warum,wieso und weshalb verloren habe.
Wahrscheinlich geht es easy aber gerade aktuell möchte ich es so belassen da ich das Repo nicht nochmal verlieren möchte.

<p>
Mein Rat an dich: <b class="text-3xl">Bitte schaffe eine Umgebung wo du den Code ohne Auswirkung auf dein Main Repo testen kannst um solche unnötigen Kopfschmerzen zu vermeiden.</b>
</p>


</section>