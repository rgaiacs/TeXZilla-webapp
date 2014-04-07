ICONS = $(foreach size, 32 60 90 120 128 256, style/icons/TeXZilla-$(size).png)

KEYBOARDJS = js/keyboard.js

KEYBOARDFILES = js/keyboard-layout.js \
		js/keyboard-render.js

PACKAGELIST = building-blocks \
	      index.html \
	      js \
	      LICENSE \
	      manifest.webapp \
	      README.md \
	      style \
	      texzilla

# main rules

help:
	@grep -e '^##' Makefile | sed 's/## //'

## build    : build some files need for this webapp
build: ${ICONS} ${KEYBOARDJS}

## package  : package the webapp
package: build
	zip -r texzilla-webapp.zip ${PACKAGELIST}


## cleanall : remove the files built previously
cleanall:
	rm -f ${ICONS}
	rm -f ${KEYBOARDJS}
	rm -f texzilla-webapp.zip

# Auxiliar rules

${KEYBOARDJS}: ${KEYBOARDFILES}
	cat $^ > $@

style/icons/%.png: style/icons/TeXZilla.svg
	convert -background none $< -resize $(subst style/icons/TeXZilla-,,$(basename $@)) $@
