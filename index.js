const input = document.querySelector(".form");
const resultado = document.querySelector("#resultado");

input.addEventListener('submit', function(e){
  e.preventDefault();
  const inputPeso = e.target.querySelector(".peso");
  const inputAltura = e.target.querySelector(".altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  
  if (!peso) {
    return resultado.innerHTML = `Peso inválido`;
  }

  if (!altura) {
    return resultado.innerHTML = `Altura inválido `;
  }

  if (peso <= 0) {
    return resultado.innerHTML = `Peso inválido`;
  }

  if(altura <= 0) {
    return resultado.innerHTML = `Altura inválido `;
  }

  const imc = peso / altura ** 2;


  function diagnostico(){

    if (imc > 40) {
      return resultado.innerHTML = `Seu IMC é ${imc.toFixed(4)}, e você está com Obesidade grau 3`;
    }

    if (imc >= 35){
      return resultado.innerHTML = `Seu IMC é ${imc.toFixed(4)}, e você está com Obesidade grau 2 `;
    }

    if (imc >= 30){
      return resultado.innerHTML = `Seu IMC é ${imc.toFixed(4)}, e você está com Obesidade grau 1 `;
    }

    if (imc >= 25) {
      return resultado.innerHTML = `Seu IMC é ${imc.toFixed(4)}, e você está com sobrepeso `;
    }

    if (imc >= 18.5){
      return resultado.innerHTML = `Seu IMC é ${imc.toFixed(4)}, Seu peso está normal `;
    }

    if (imc < 18.5){
      return resultado.innerHTML = `Seu IMC é ${imc.toFixed(4)} e você está abaixo do peso`;
    }
};

diagnostico();

});





