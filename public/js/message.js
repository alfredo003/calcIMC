function isAlert(sms){  
  const messageArea = document.querySelector('#alert');
  const $classification = document.querySelector('#alert .classification');
  messageArea.style.display= 'block';
  $classification.innerHTML = sms; 
  setInterval(()=>{
    messageArea.style.display= 'none';
  },1000)
}
function messageIMC(imc,classification,consequence){  
  const messageArea = document.querySelector('#result');
  const $imc = document.querySelector('#result  .imc');
  const $classification = document.querySelector('#result .classification');
  const $consequence = document.querySelector('#result  .consequence');
  messageArea.style.display= 'block';
   $imc.innerHTML = imc;  
   $classification.innerHTML = classification; 
   $consequence.innerHTML = consequence; 
}