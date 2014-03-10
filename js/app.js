function rm_equation(delete_icon) {
  if (RM_ENABLE) {
    var notebook = delete_icon.parentElement;
    var equation = delete_icon.nextElementSibling;

    notebook.removeChild(equation);
    notebook.removeChild(delete_icon);
  }
  else {
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

function preview_equation() {
    var tex = document.getElementById('tex-input');
    var notebook = document.getElementById('notebook');
    var equation;
    try {
        equation = TeXZilla.toMathML(tex.value, true, false, true);
    }
    catch (error) {
        equation = document.createElement("p");
        equation.setAttribute("style", "color:red;");
        equation.innerHTML = tex.value;
    }
    equation.setAttribute('id', 'preview');
    if (EQUATION) {
        notebook.insertBefore(equation, EQUATION);
        notebook.removeChild(EQUATION);
        var action = document.getElementById('tex-button');
        action.innerHTML = 'Add';
        EQUATION = null;
        RM_ENABLE = true;
    }
    else {
        old_preview = document.getElementById('preview');
        notebook.insertBefore(equation, old_preview);
        notebook.removeChild(old_preview);
    }
}

function add_equation() {
  var tex = document.getElementById('tex-input');
  if (tex.value === '') {
    console.log('Empty textarea.');
    return 1;
  }
  var notebook = document.getElementById('notebook');
  var equation = TeXZilla.toMathML(tex.value, true);
  equation.addEventListener('click', update_equation, false);
  
  // Remove preview
  try {
      var old_preview = document.getElementById('preview');
      notebook.removeChild(old_preview);
  }
  catch (error) {
  }

  if (EQUATION) {
    notebook.insertBefore(equation, EQUATION);
    notebook.removeChild(EQUATION);
    var action = document.getElementById('tex-button');
    action.innerHTML = 'Add';
    EQUATION = null;
    RM_ENABLE = true;
  }
  else {
    var del = document.createElement('img');
    del.setAttribute('src', 'style/images/icons/actionicon_delete_red_30x30.png');
    del.setAttribute('class', 'delete');
    del.setAttribute('onclick', 'rm_equation(this);');

    notebook.appendChild(del);
    notebook.appendChild(equation);
  }
  var input = document.getElementById('tex-input');
  input.value = '';

  // Add new preview
  var new_preview = document.createElement('math');
  new_preview.setAttribute('id', 'preview');
  notebook.appendChild(new_preview);
}

EQUATION = null;
RM_ENABLE = true;
