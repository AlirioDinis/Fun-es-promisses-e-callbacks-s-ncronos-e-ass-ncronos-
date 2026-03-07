// main.js
import { Promessa } from "./Promise.js";
import { Show } from "./Callback_Síncrono.js";
import { InitSaudacao } from "./Callback_Assíncrono.js";

const num = prompt("Insira um número para demonstrar: Promessa(0), Callback síncrono(1), Callback assíncrono(2)");

function Demonstrar (num) {
  if (num === "0") {
    Promessa();
  } else if (num === "1") {
    Show();
  } else if (num === "2") {
    InitSaudacao();
  } else {
    console.log("Opção inválida!");
  }
}

Demonstrar(num);
