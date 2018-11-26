var servResponse = document.querySelector('#email-form');

//document.forms.ourForm.onsubmit = function(e){
document.forms[0].onsubmit = function(e){
  //e.preventDefault();
  var userInput = document.forms[0].dlya_bota.value;
  //userInput = encodeURIComponent(userInput);
  
  var xhr = new XMLHttpRequest();
  
  xhr.open('POST','https://api.voximplant.com/platform_api/StartScenarios/?account_id=2462599&api_key=*********&rule_id=2175969&script_custom_data=+'+userInput);
  
  //var formData = new FormData(document.forms[0]);
  xhr.setRequestHeader('Content-Type','application/json');
  
  //xhr.onreadystatechange = fucntion(){
  //  if(xhr.readyState ===4 && xhr.status === 200){
  //    servResponse.textContent = xhr.responseText; 
  //  }
  //}
  //xhr.send(formData);
  xhr.send('dlya_bota=' + userInput);
  
};
