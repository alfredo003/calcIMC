import CalcImc from './entities/CalcImc.js';
import express from 'express'; 
const app = express();

app.use(express.json());
app.use(express.static('public'))
app.set('view engine','ejs') 

app.get('/',(req,res)=>{
  res.render('index',{
    title:'Calcular o IMC'
  });
}) 
app.post('/imc',(req,res)=>{
  const { weight,height } = req.body;
  const calc = new CalcImc(weight,height);
  res.status(200).send({
    imc:calc.imc(),
    result:calc.message()
  })
})

app.listen(3000,()=>console.log('SERVER RUNNING IN PORT 3000'))