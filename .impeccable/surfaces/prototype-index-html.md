---
version: 1
slug: "prototype-index-html"
primary_target: "prototype/index.html"
related_targets: []
---

# Landing (/)

Scope: landing page of the YTS Player public site. Visitor mode: Persuade.
Audience: Linux/Windows person who downloads movies by hand from yts.gg. Action: download the right installer for their OS. Proof: the three real screenshots plus HTML recreations of app pieces (buffer piece map, release plate, swarm signal, continue bar) with sample data. Constraints: PRODUCT.md legal limits; app DESIGN.md tokens verbatim; dark only.

## Direction contract

THESIS: The page is a stopwatch. Every section is a second on the way from opening the app to the film playing; a running condensed timecode is the spine. Refuses the feature-grid landing (icon cards in a 3×2 grid) and the piracy-site banner.

OWN-WORLD: The app's world, verbatim: #171717 ground, grey ladder, hairlines #333/#4a4a4a, YTS green only on Descargar, the timecode digits that have elapsed, held buffer pieces, progress and focus. Archivo condensed 850 uppercase for titles and the giant tabular timecode; normal width for UI. Hairline release plates, five-bar signal, ruled lists not cards.

STORY: Visitor sees the real app in a desktop window, reads "de abrir a ver, en segundos", understands it is a desktop client for the YTS catalogue, watches the clock run through home → choose version → buffer fills → play with Spanish subtitles → resume / offline, and downloads the installer detected for their OS. Legal notice plain and visible before the footer.

FIRST VIEWPORT: Top bar with app wordmark and Descargar. Left 5/12: condensed headline at display scale, a short lede (two to three lines on desktop: it has to carry the three benefits, desktop app / starts while downloading / Spanish subtitles, that the headline leaves out), green Descargar (OS-detected) + "Otras plataformas", then version and platforms in label type. Right 7/12, bleeding off the right edge: inicio.png in a desktop window frame, tilted in 3D, settling to a slight rest tilt on load and flattening as the visitor scrolls (the rest tilt keeps depth in the first viewport). A large faint "00:00" timecode sits under the hero edge as the hook into the scroll on desktop. On phones the hero stacks copy above the window, so the hook becomes the sticky timecode bar that docks under the header as soon as the clock section starts.

FORM: Surface structure 1 of 7 on my ordered list ("El reloj de 30 segundos", dealt index 6 led the roll); seed key f9776ddb. Signature interaction: sticky timecode that counts with scroll progress through the scenes, each scene's demo (plate selection, piece map fill, subtitle line, resume bar) driven by the same clock; all collapses to static, fully visible states under prefers-reduced-motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
