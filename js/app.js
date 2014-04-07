/* indexedDB handles */

var request, db;

var request = window.indexedDB.open("TeXZilla", 1);
request.onerror = function(event) {
    console.log("Error when using indexedDB.");
};
request.onsuccess = function(event) {
    db = event.target.result;
};
request.onupgradeneeded = function(event) {
    db = event.target.result;

    var objectStore = db.createObjectStore("equations", {
        keyPath: "id"
    });
};

/* Equation Handles */

function rm_equation(delete_icon) {
    if (RM_ENABLE) {
        var notebook = delete_icon.parentElement;
        var equation = delete_icon.nextElementSibling;

        var transaction = db.transaction(["equations"], "readwrite");
        var objectStore = transaction.objectStore("equations");

        objectStore.delete(equation.getAttribute('id'));

        notebook.removeChild(equation);
        notebook.removeChild(delete_icon);
    } else {
        console.log('In update state.');
        return 1;
    }
}

function update_equation(ev) {
    var action = document.getElementById('tex-button');
    action.innerHTML = 'Update';
    var input = document.getElementById('tex-input');
    input.value = TeXZilla.getTeXSource(this);

    EQUATION = this;
    RM_ENABLE = null;
}

function add_preview() {
    var notebook = document.getElementById('notebook');
    var new_preview = document.createElement('math');
    new_preview.setAttribute('id', 'preview');
    notebook.appendChild(new_preview);
}

function preview_equation() {
    var tex = document.getElementById('tex-input');
    var notebook = document.getElementById('notebook');
    var equation;
    try {
        equation = TeXZilla.toMathML(tex.value, true, false, true);
    } catch (error) {
        equation = document.createElement("p");
        equation.setAttribute("style", "color:red;");
        equation.innerHTML = tex.value;
    }
    if (EQUATION) {
        equation.setAttribute('id', EQUATION.getAttribute('id'));
        notebook.insertBefore(equation, EQUATION);
        notebook.removeChild(EQUATION);
        EQUATION = equation;
    } else {
        equation.setAttribute('id', 'preview');
        old_preview = document.getElementById('preview');
        notebook.insertBefore(equation, old_preview);
        notebook.removeChild(old_preview);
    }
}

function add_equation(tex_str, equation_id, saved) {
    var notebook = document.getElementById('notebook');
    var equation;
    equation = TeXZilla.toMathML(tex_str, true, false, true);
    equation.addEventListener('click', update_equation, false);
    equation.setAttribute('id', equation_id);

    // Remove preview
    try {
        var old_preview = document.getElementById('preview');
        notebook.removeChild(old_preview);
    } catch (error) {}

    // Add MathML into HTML and TeX into IndexedDB
    if (EQUATION) {
        if (!saved) {
            var transaction = db.transaction(["equations"], "readwrite");
            var objectStore = transaction.objectStore("equations");

            var old = objectStore.get(EQUATION.getAttribute('id'));
            old.onsuccess = function(event) {
                objectStore.put({
                    id: old.result.id,
                    tex: tex_str
                });
            };
        }

        notebook.insertBefore(equation, EQUATION);
        notebook.removeChild(EQUATION);
        var action = document.getElementById('tex-button');
        action.innerHTML = 'Add';
        EQUATION = null;
        RM_ENABLE = true;
    } else {
        if (!saved) {
            var transaction = db.transaction(["equations"], "readwrite");
            var objectStore = transaction.objectStore("equations");

            objectStore.add({
                id: equation_id,
                tex: tex_str
            });
        }

        var del = document.createElement('img');
        del.setAttribute('src', 'building-blocks/images/icons/actionicon_delete_red_30x30.png');
        del.setAttribute('class', 'delete');
        del.setAttribute('onclick', 'rm_equation(this);');

        notebook.appendChild(del);
        notebook.appendChild(equation);
    }
}

function add_equation_button() {
    var tex = document.getElementById('tex-input');
    var notebook = document.getElementById('notebook');
    if (tex.value === '') {
        console.log('Empty textarea.');
    } else {
        try {
            add_equation(tex.value, Date());
        } catch (error) {
            console.log("Error when parse.");
            return false;
        }
    }

    // Add new preview
    tex.value = '';
    add_preview();
}

EQUATION = null;
RM_ENABLE = true;

/* Equation setup */

function setup_old_equations() {
    // Add to indexedDB
    var transaction = db.transaction(["equations"], "readwrite");
    var objectStore = transaction.objectStore("equations");
    var cursors = objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;

        if (cursor) {
            add_equation(cursor.value.tex, cursor.value.id, true);

            cursor.
            continue ();
        } else {
            add_preview();
            preview_equation();
        }
    };
}
