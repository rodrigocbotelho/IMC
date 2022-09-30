function imcCal() {
  altura = document.getElementById("altura").value;
  peso = document.getElementById("peso").value;
  imc = peso / (altura**2);
  if (imc < 17) {
    status = 'Muito abaixo do peso'
  } 
  else if (imc >=17 && imc < 18.5){
     status = 'Abaixo do peso'
  }
  else if (imc >= 18.5 && imc < 25){
    status = 'Peso ideal'
  }
  else if (imc >= 25 && imc < 30){
    status = 'Sobrepeso'
  }
  else if (imc >=30 && imc < 35) {
    status = 'Obesidade I'
  }
  else if (imc >=35 && imc < 40) {
    status = 'Obesidade II'
  }
  else if (imc > 40) {
    status = 'Obesidade III'
  }
  else if (altura == '0' && peso == '0'){
    imc = '0'
    status = '0'
  }
  else{
    imc = '0'
    status = '0'
  }
  resul = document.getElementById("result");
  resul.innerHTML = '<span class="info">IMC:</span> '+ parseFloat(imc.toFixed
(1)) +'</br>'+ '<span class="info">Status:</span> '+ status;  
}