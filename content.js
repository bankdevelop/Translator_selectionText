document.onkeypress = function (e) {
  e = e || window.event;

  // if e.keyCode === keyG translate it
  if(e.keyCode===103){ 
    let selectionText = window.getSelection().toString();
    if(selectionText!=="")
      window.open("https://translate.google.co.th/?hl=th&tab=rT#view=home&op=translate&sl=en&tl=th&text="+selectionText);
  }
};

//credit event onkeypress : https://stackoverflow.com/questions/16089421/simplest-way-to-detect-keypresses-in-javascript