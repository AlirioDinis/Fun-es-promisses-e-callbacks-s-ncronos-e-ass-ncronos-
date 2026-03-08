// Callback_Síncrono.js
export function Show() {

    function exibirResultado(resultado) {
      console.log(`O resultado é: ${resultado}`);
    }
  
    // Callback síncrono
    function calcular(calculo, callback) {
      let resultado = eval(calculo); // cuidado: eval só para demonstração
      callback(resultado);
    }
  
    const entrada = prompt("Informe um cálculo: ");
    calcular(entrada, exibirResultado);
  }
  