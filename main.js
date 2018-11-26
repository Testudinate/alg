var servResponse = document.querySelector('#Response');

document.forms.ourForm.onsubmit = function(e){
  e.preventDefault();
  
  var userInput = document.forms.ourForm.dlya_bota.value;
  
  var xhr = new XMLHttpRequest();
  
  xhr.open('POST','
};
