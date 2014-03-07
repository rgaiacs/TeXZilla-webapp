.PHONY: style/icons

KEYBOARDFILES = js/keyboard-layout.js \
		js/keyboard-render.js

js/keyboard.js: ${KEYBOARDFILES}
	cat $^ > $@

js/TeXZilla.js: TeXZilla/TeXZilla.js
	mv $< $@

TeXZilla/TeXZilla.js:
	$(MAKE) -C TeXZilla build

style/icons: style/icons/TeXZilla.svg
	convert -background none $< -resize 16 $@/TeXZilla-16.png
	convert -background none $< -resize 48 $@/TeXZilla-48.png
	convert -background none $< -resize 128 $@/TeXZilla-128.png
