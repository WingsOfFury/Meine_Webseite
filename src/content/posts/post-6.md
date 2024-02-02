---
title: 06 | Astro - View Transitions 
author: Akansel Cengiz
authorContact: akcengiz@gmx.de
pubDate: 2023-12-22
description: "Warum ich mich gegen View Transitions entschieden habe."
image:
    src: "/src/images/transitions.png"
    alt: "A frustrated lego guy sitting in front of a desk."
tags: ["Transitions", "Swup"]
relatedPosts: ["post-2"]

---


<section class="w-10/12 text-justify "> 



<img
  src="/src/images/swup.png"
  width="500"
  height="200"
  decoding="async"
  loading="lazy"
  alt="swup logo"
  class="rounded border-2 border-dark float-right
   m-4"
/>

<p class="animate-fade duration-100">
Nachdem ich die meisten Funktionen auf meiner Homepage implementiert habe und diese auch einwandfrei funktionieren(zumindest glaube und hoffe ich das😂) bin ich an dem Punkt angekommen mich voll und ganz auf das Thema "Transitions" einzulassen.
</p>

Transitions sind echt eine super sache. Die Übergänge zwischen den Pages wirken dadurch viel flüssiger und cooler.
Ohne Transitions wirkt alles so abgebrochen und starr.

Auf dieser Hompegage benutze ich zwar [swup](https://swup.js.org/) aber der Gedanke war es alles über Astro laufen zu lassen um eventuellen Performance
Problemen entgegen zu wirken.
Also habe ich alles was mit swup Transitions zu tun hat auskommentiert und offline gesetzt.
Gleichzeitig habe ich mich strikt an die [View Transition Documentation](https://docs.astro.build/en/tutorials/add-view-transitions/) gehalten um einen reibungslosen Ablauf zu gewährleisten. 

Habe zum Testen mal dem Header eine SLIDE funktion verpasst oder der <code>h1</code> eine FADE transition spendiert.
View Transitions funktioniert wunderbar.
Jetzt funktioniert aber auf einmal der toggleSwitch für das Dark und Light Theme nicht mehr.
Wenn ich die Homepage immer neu lade klappt der Switch aber wenn ich die Pages wechsle funktioniert der Schalter nicht mehr.
Also auf zur nächsten Baustelle.

Alles wieder auskommentieren und schauen ob es ohne View Transitions funktioniert.
Yes, es klappt ohne probleme.
View Transitions aktiviert.
No, klappt nicht.
Jetzt wieder swup aktivieren und schauen ob der toggleSwitch hier auch nicht klappt was mir vielleicht bei swup nicht aufgefallen ist das der toggleSwitch nicht funktioniert.
Page Transitions funktioniert.
Schon mal ein gutes Zeichen.Jetzt noch den toggleSwitch testen.Funktioniert auch wieder ohne probleme.

Natürlich habe ich mich auch auf dem [Astro Discord Server](https://discord.com/invite/grF4GTXXYm) angemeldet um mein Problem mit der Community zu teilen.
Leider auch hier ohne Erfolg.


Nach ungefähr 1 1/2 Wochen habe ich aufgehört mich damit zu beschäftigen warum der toggleSwitch nicht bei View Transitions aber bei swup funktioniert.
Die Zeit rast halt verdammt schnell an einem vorbei so das es aus 1 1/2 schnell mal 3-4 Wochen oder mehr werden können.
Definitiv zu lange für mich.
Das ist auch der Grund warum ich mich gegen View Transitions und für swup entschieden habe.

Noch ein Wort über swup. Es ist ein sehr schönes und leicht zu implementierendes Tool.
Ich werde es auch weiterhin in anderen Projekten benutzen.
Ist auf jeden Fall eine Empfehlung wert.

</section>

