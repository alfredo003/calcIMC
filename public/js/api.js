const url = `http://localhost:3000/imc`;

function calc(data){
  return axios.post(url,data)
  .then(response=>{show(response.data)})
  .catch(error=>console.log(error))
}
function show(data){
    const [classification,consequence] = data.result;
    const result = {
      imc:data.imc,
      classification:classification.classification,
      consequence:consequence.consequence
    }
    messageIMC(`${result.imc.toFixed(2)} kg/m²`,result.classification,result.consequence)
}
 