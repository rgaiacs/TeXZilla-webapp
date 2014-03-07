function press_key() {
    var input = document.getElementById("tex-input");
    input.value = input.value + this.getAttribute("tex");
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
