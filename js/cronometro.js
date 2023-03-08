class Cronometro {
    constructor(caixa,numero) {
        this.numero = numero;
        this.start = caixa.querySelector("#Start");
        this.stop = caixa.querySelector("#Stop");
        this.reset = caixa.querySelector("#Reset");
        this.timer;
    }
    
    comeca(){
        console.log(this.start,this.stop,this.reset,this.numero.innerHTML);
    }

    comecar(){
        this.start.disabled = true;
        this.start.style.borderColor = "gray";
       let numeroComeco = new Date;
        this.passandoTempo(numeroComeco)
    }
    passandoTempo(nComeco){
        let numeroFinal = new Date;
        this.timer = setTimeout(() => this.passandoTempo(nComeco),100);
        let subtracao = numeroFinal - nComeco;
        this.numero.innerHTML = this.#calculo(subtracao);
    }

    parar(){
        this.start.disabled = false;
        this.start.style.borderColor = "black";
        this.start.style.color = "black";
        clearInterval(this.timer);
    }

    resetar(){
        this.parar();
        this.numero.innerHTML = "00:00";
    }

    #calculo(milisegundos){
        let segundo = Math.floor(milisegundos / 1000);
        milisegundos %= 1000;
        return `${segundo}:${milisegundos}`
    }
    
}


const caixa = document.querySelector(".box");
const numero = document.querySelector(".numero");

let cronometro = new Cronometro(caixa,numero);

const start= caixa.querySelector("#Start");
const stopp = caixa.querySelector("#Stop");
const reset = caixa.querySelector("#Reset");

start.addEventListener("click",() => {cronometro.comecar()});
stopp.addEventListener("click", () => { cronometro.parar()});
reset.addEventListener("click", () => { cronometro.resetar()});   