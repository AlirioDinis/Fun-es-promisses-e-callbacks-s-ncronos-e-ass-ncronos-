export function InitSaudacao() {

    function saudacao(nome, callback) {
        console.log("Olá " + nome);
        callback();
      }
      
      function despedida() {
        console.log("Até logo!");
      }
      
        setTimeout(() => {
            saudacao("Alírio", despedida);
          }, 5000);
    
}