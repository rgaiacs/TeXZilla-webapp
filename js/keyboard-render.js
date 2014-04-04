function press_key() {
    var input = document.getElementById("tex-input");
    var new_value, prefix, suffix;
    var start = input.selectionStart;
    var end = input.selectionEnd;

    console.log("selectionEnd = " + input.selectionEnd);
    console.log("selectionStart = " + input.selectionStart);

    if (start === 0 || input.value[start - 1] === ' ')
        prefix = '';
    else
        prefix = ' ';
    if (end === input.value.length || input.value[end] === ' ')
        suffix = '';
    else
        suffix = ' ';

    new_value = String.concat(input.value.substring(0, start),
            prefix,
            this.getAttribute("tex"),
            suffix,
            input.value.substring(end));

    input.value = new_value;

    input.onkeyup();
}

function build_keyboard(aLayout, aDiv) {
    var i;
    var j;
    var key;
    var keyboard = document.createElement("div");
    for(i = 0; i < aLayout.keys.length; i++) {
        for(j = 0; j < aLayout.keys[i].length; j++) {
            key = document.createElement("button");
            key.innerHTML = aLayout.keys[i][j].key;
            key.setAttribute("tex", aLayout.keys[i][j].tex);
            key.setAttribute("style", "float:left; width:" + 100/aLayout.keys[i].length + "%;");
            key.addEventListener("click", press_key, false);
            keyboard.appendChild(key);
        }
    }
    aDiv.appendChild(keyboard);
}
