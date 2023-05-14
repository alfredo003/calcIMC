class CalcImc{

  constructor(weight,height){
   this.weight = weight;
   this.height = height;
  }

  imc(){ return this.weight / (this.height**2) }

  message(){
    if (this.imc() >= 16 && this.imc() < 17) { 
      return [{classification:'Muito abaixo do peso'},
              {consequence:'Queda de cabelo, infertilidade, ausência menstrual'}];

    }else if (this.imc() >= 17 && this.imc() < 18.5){
      return [{classification:'Abaixo do peso'},
              {consequence:'Fadiga, stress, ansiedade'}];

    } else if (this.imc() >= 18.5 && this.imc() < 25) {
      return [{classification:'Peso normal'},
              {consequence:'Menor risco de doenças cardíacas e vasculares'}];

    } else if (this.imc() >= 25 && this.imc() < 30) { 
      return [{classification:'Acima do peso'},
      {consequence:'Fadiga, má circulação, varizes'}];

    } else if (this.imc() >= 30 && this.imc() < 35) { 
      return [{classification:'Obesidade Grau I'},
              {consequence:'Diabetes, angina, infarto, aterosclerose'}]; 

    } else if (this.imc() >= 35 && this.imc() <= 40) {
      return [{classification:'Obesidade Grau II'},
      {consequence:'Apneia do sono, falta de ar'}]; 

    }else if (this.imc() > 40) {
      return [{classification:'Obesidade Grau III'},
      {consequence:'Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC'}]; 
  }else{
    return [{classification:'Não Verificado'},
      {consequence:'......'}]; 
  }

  }
}

export default CalcImc;