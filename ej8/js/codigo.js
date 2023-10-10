class Monedero {
    constructor(nombre, billetes5, billetes10, billetes20){
        this.nombre = nombre
        this.billetes5 = billetes5
        this.billetes10 = billetes10
        this.billetes20 = billetes20
    }

    getNombre = () => this.nombre
    getBilletes5 = () => this.billetes5
    getBilletes10 = () => this.billetes10
    getBilletes20 = () => this.billetes20
    setBilletes5 = (billetes5) => this.billetes5 = billetes5
    setBilletes10 = (billetes10) => this.billetes10 = billetes10
    setBilletes20 = (billetes20) => this.billetes20 = billetes20
    calculaTotal = () => this.billetes5 * 5 + this.billetes10 * 10 + this.billetes20 * 20
    static eligeMonedero = (monederos) => {
        let mejorMonedero = monederos[0]
        let monederosIguales = true

        for(const monedero of monederos){
            if (!(monedero instanceof Monedero)) {
                throw new Error("ERROR. Sólo puede incluir monederos.");
            }

            if (monedero.calculaTotal() > mejorMonedero.calculaTotal()){
                mejorMonedero = monedero
                monederosIguales = false
            } else if (monedero.calculaTotal() > mejorMonedero.calculaTotal()){
                monederosIguales = false
            }
        }
        
        if(monederosIguales) return "Cualquiera"
        else return mejorMonedero.getNombre()
    }
}

const miMonedero = new Monedero("Sara", 4, 3, 2)
const monederoErik = new Monedero("Erik", 3, 5, 1)
const monederoPablo = new Monedero("Pablo", 4, 3, 3)


/*const miMonedero = new Monedero("Sara", 4, 3, 2)
const monederoErik = new Monedero("Erik", 4, 3, 2)
const monederoPablo = new Monedero("Pablo", 4, 3, 2)*/
document.write(`El total de dinero en el monedero de ${miMonedero.getNombre()} es: ${miMonedero.calculaTotal()}€ <br>`)
document.write(`El total de dinero en el monedero de ${monederoErik.getNombre()} es: ${monederoErik.calculaTotal()}€ <br>`)
document.write(`El total de dinero en el monedero de ${monederoPablo.getNombre()} es: ${monederoPablo.calculaTotal()}€ <br>`)
const monederos = [miMonedero, monederoErik, monederoPablo]
const monederoDeHoy = Monedero.eligeMonedero(monederos)
document.write(`Hoy llevaremos el monedero de ${monederoDeHoy}`)


