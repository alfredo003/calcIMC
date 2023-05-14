const calcBtn = document.querySelector('#calcBtn');
calcBtn.addEventListener("click",(e)=>{
   e.preventDefault(); 
   let weight = document.querySelector('#weight').value;
   let height = document.querySelector('#height').value;
   
   // converter as virgulas em pontos
   const convertWeight= weight.replace(',','.')
   const convertHeight= height.replace(',','.');

  // converter os values do campo input[type=text] para values do type float
   weight = Number.parseFloat(convertWeight);
   height = Number.parseFloat(convertHeight);

   if(!weight){
    return isAlert('Preencha os campos!')
   }
   calc({weight,height}); 

})