KEYBOARDFILES = js/keyboard-layout.js \
		js/keyboard-render.js

ICONS = $(foreach size, 32 60 90 120 128 256, style/icons/TeXZilla-$(size).png)

js/keyboard.js: ${KEYBOARDFILES}
	cat $^ > $@

js/TeXZilla.js: TeXZilla/TeXZilla.js
	mv $< $@

TeXZilla/TeXZilla.js:
	$(MAKE) -C TeXZilla build

icons: ${ICONS}

style/icons/%.png: style/icons/TeXZilla.svg
	convert -background none $< -resize $(subst style/icons/TeXZilla-,,$(basename $@)) $@
