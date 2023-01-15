function imcCal() {
  let altura = document.getElementById("altura").value,
    peso = document.getElementById("peso").value;

  try {
    var imc = calculo(peso, altura);
  } catch (e) {
    alert(e);
    return;
  }

  let status = null;
  if (imc < 17) {
    status = "Muito abaixo do peso";
  } else if (imc >= 17 && imc < 18.5) {
    status = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    status = "Peso ideal";
  } else if (imc >= 25 && imc < 30) {
    status = "Sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    status = "Obesidade I";
  } else if (imc >= 35 && imc < 40) {
    status = "Obesidade II";
  } else if (imc > 40) {
    status = "Obesidade III";
  } else {
    status = 0;
  }

  let msg =
    '<span class="info">IMC:</span> ' +
    imc +
    "</br>" +
    '<span class="info">Status:</span> ' +
    status;
  mostrar(msg);
}

function calculo(peso, altura) {
  let calc = Number(peso / altura ** 2).toFixed(1);
  if (isNaN(calc)) {
    throw new Error("VALORES INVALIDOS!");
  }
  return calc;
}

function mostrar(mensagem) {
  let resul = document.getElementById("result");
  resul.innerHTML = mensagem;
}

peso.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    altura.focus();
  }
});

altura.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    imcCal();
  }
});
