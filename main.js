var servResponse = document.querySelector('#Response');

document.forms.ourForm.onsubmit = function(e){
  e.preventDefault();
  var userInput = document.forms.ourForm.dlya_bota.value;
  userInput = encodeURIComponent(userInput);
  
  var xhr = new XMLHttpRequest();
  
  xhr.open('POST','https://api.voximplant.com/platform_api/StartScenarios/?account_id=2462599&api_key=8745ad52-92dc-48c0-b52b-3bd686e51b13&rule_id=2175969&script_custom_data=
'+userInput);
  
  var formData = new FormData(document.form.ourForm);
  //xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  
  xhr.onreadystatechange = fucntion(){
    if(xhr.readyState ===4 && xhr.status === 200){
      servResponse.textContent = xhr.responseText; 
    }
  }
  xhr.send(formData);
  //xhr.send('dlya_bota=' + userInput);
  
};
