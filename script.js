
function imcCal() {
  var altura = document.getElementById("altura").value, 
      peso = document.getElementById("peso").value;
  
  var imc = Number(peso / (altura ** 2)).toFixed(1);
  
  if (imc < 17) {
    
    var status = 'Muito abaixo do peso';
    
  } 
  
  else if (imc >=17 && imc < 18.5){
    
     status = 'Abaixo do peso';
    
  }
  
  else if (imc >= 18.5 && imc < 25){
    
    status = 'Peso ideal';
    
  }
  else if (imc >= 25 && imc < 30){
    
    status = 'Sobrepeso';
    
  }
  else if (imc >= 30 && imc < 35) {
    
    status = 'Obesidade I';
    
  }
  else if (imc >= 35 && imc < 40) {
    
    status = 'Obesidade II';
    
  }
  else if (imc > 40) {
    
    status = 'Obesidade III';
    
  }
  else{
    
    imc = 0
    status = 0;
    
  }
  
  resul = document.getElementById("result");
  
  resul.innerHTML = '<span class="info">IMC:</span> '+ imc + '</br>' + '<span class="info">Status:</span> ' + status;
  
}
