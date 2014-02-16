function rm_equation(delete_icon) {
  var notebook = delete_icon.parentElement;
  var equation = delete_icon.nextElementSibling;

  notebook.removeChild(equation);
  notebook.removeChild(delete_icon);
}

function update_equation(ev) {
  var action = document.getElementById('tex-button');
  action.innerHTML = 'Update';
  var input = document.getElementById('tex-input');
  input.value = TeXZilla.getTeXSource(this);

  EQUATION = this;
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
  if (EQUATION) {
    notebook.insertBefore(equation, EQUATION);
    notebook.removeChild(EQUATION);
    var action = document.getElementById('tex-button');
    action.innerHTML = 'Add';
    EQUATION = null;
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
}

EQUATION = null;
