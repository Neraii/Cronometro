class Cronometro {
    constructor(caixa, numero) {
        this.numero = numero;
        this.start = caixa.querySelector("#Start");
        this.stop = caixa.querySelector("#Stop");
        this.reset = caixa.querySelector("#Reset");
        this.timer;
    }
    comecar() {
        this.start.disabled = true;
        this.start.style.borderColor = "gray";
        let numeroComeco = new Date;
        this.passandoTempo(numeroComeco)
    }
    passandoTempo(nComeco) {
        let numeroFinal = new Date;
        this.timer = setTimeout(() => this.passandoTempo(nComeco), 99);
        let subtracao = numeroFinal - nComeco;
        this.numero.innerHTML = this.#calculo(subtracao);
    }

    parar() {
        this.start.disabled = false;
        this.start.style.borderColor = "black";
        this.start.style.color = "black";
        clearInterval(this.timer);
    }

    resetar() {
        this.parar();
        this.numero.innerHTML = "00:00:00:000";
    }

    #calculo(milisegundos) {
        //milisegundos,segundos,minutos,horas


        let tempo = [milisegundos, 0, 0, 0];
        let divisores = [1000, 60, 60];
        let texto = "";
        for (let i = 0; i < 3; i++){
            tempo[i + 1] = Math.trunc(tempo[i] / divisores[i]);
            tempo[i] %= divisores[i]
            texto =  this.#adicionarZero(tempo[i],i)+ ":"+ texto;
        }
        texto =  this.#adicionarZero(tempo[3],99)+ ":"+ texto;
        //para as horas
           texto = texto.slice(0,-1);
        
        return texto
    }

    #adicionarZero(numero,i) {
        let quantidadeZero = numero.toString().length;
        return ("0").repeat(( i > 0 ? 2 : 3) - quantidadeZero) + "" + numero;
    }

}


const caixa = document.querySelector(".box");
const numero = document.querySelector(".numero");

let cronometro = new Cronometro(caixa, numero);

const start = caixa.querySelector("#Start");
const stopp = caixa.querySelector("#Stop");
const reset = caixa.querySelector("#Reset");

start.addEventListener("click", () => { cronometro.comecar() });
stopp.addEventListener("click", () => { cronometro.parar() });
reset.addEventListener("click", () => { cronometro.resetar() });   