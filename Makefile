## ############################### Variables ################################

# Software Definitions

## SVG2PNG  : program to convert SVG to PNG
SVG2PNG = convert
## PACKAGE  : the name of the package app
PACKAGE = texzilla-webapp.zip
## TeXZilla : the name of TeXZilla file
TeXZilla = js/TeXZilla.js

# Package files

ICONS = $(foreach size, 32 60 90 120 128 256, icon/TeXZilla-$(size).png)

KEYBOARDJS = js/keyboard.js

KEYBOARDFILES = js/keyboard-layout.js \
		js/keyboard-render.js

PACKAGELIST = ${TeXZilla} \
	      LICENSE \
	      building-blocks \
	      icon/*.png \
	      index.html \
	      js/app.js \
	      js/keyboard.js \
	      manifest.webapp \
	      style

## 
## ################################ Commands ################################

## help     : print this text
help:
	@grep -e '^##' Makefile | sed 's/## //'

## build    : build some files need for this webapp
build: ${ICONS} ${KEYBOARDJS} ${TeXZilla}

## beautify : beautify source code
beautify:
	html-beautify -r index.html
	css-beautify -r style/app.css
	js-beautify -r js/app.js js/keyboard-layout.js js/keyboard-render.js manifest.webapp

## package  : package the webapp
package: build
	zip -r texzilla-webapp.zip ${PACKAGELIST}

## clean    : remove the files built previously
clean:
	rm -f ${ICONS}
	rm -f ${KEYBOARDJS}
	rm -f ${PACKAGE}

## cleanall : remove all files
cleanall: clean
	rm -f ${TeXZilla}

# Auxiliar rules

${TeXZilla}:
	wget https://raw.githubusercontent.com/fred-wang/TeXZilla/TeXZilla-0.9.7/TeXZilla.js \
	    -O ${TeXZilla}

${KEYBOARDJS}: ${KEYBOARDFILES}
	cat $^ > $@

icon/%.png: icon/TeXZilla.svg
	convert -density 512 -background none $< -resize $(subst icon/TeXZilla-,,$(basename $@)) $@
