// 3 status de promisses: pendente, resolvido e rejeitado.

export function Promessa () {
let p1 = new Promise ((resolve, rejected) => {
    setTimeout(() => {
        resolve('Resolvido');
    }, 4000)
}).then((res) => ( console.log(res) ));

console.log("Teste");
 console.log(p1);

}