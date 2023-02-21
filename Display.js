class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.valorActual = ""
        this.valorAnterior = ""
        this.tipoOperacion = undefined
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1)
        this.imprimirValorActual()
    }

    borrarTodo() {
        this.valorActual = ""
        this.valorAnterior = ""
        this.tipoOperacion = undefined
        this.imprimirValorActual()
    }

    agregarNumero(numero) {
        if (numero === "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValorActual();
    }

    imprimirValorActual() {
        this.displayValorActual.textContent = this.valorActual
        this.displayValorAnterior.textContent = this.valorAnterior
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)

        if (isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual)
    }

    computar(tipo) {
        this.tipoOperacion !== "igual" && this.calcular()
        this.tipoOperacion = tipo
        this.valorAnterior = this.valorActual || this.valorAnterior
        this.valorActual = ""
        this.imprimirValores();
    }
}