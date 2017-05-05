function initializeMain() {

  // fetch editor initial content from hidden iframe "frmFile"
  var oFrame = document.getElementById("frmFile");
  var contents = oFrame.contentWindow.document.body.childNodes[0].innerHTML; 

  // clean up special characters from HTML encoding
  contents = contents.replace(/&lt;/g, "<");
  contents = contents.replace(/&gt;/g, ">");

  // initialize editor with line numbers at location of textarea "editorSpace"
  var myCodeMirror = CodeMirror.fromTextArea(editorSpace, { lineNumbers: true, lineWrapping: true, });

  // load the initial content into the editor
  myCodeMirror.setValue(contents);
  myCodeMirror.setSize(null, 500);

}

function executeEditorContent() {

  var editor = $('.CodeMirror')[0].CodeMirror;
  
  eval(editor.getValue());

}
