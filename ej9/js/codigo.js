const calcula = (expresionAritmetica) => {
    try{
        return eval(expresionAritmetica) //Evalúa el string y calcula la expresión.
    } catch (error){
        return "ERROR. Expresión no válida."
    }
}

let expresion = prompt("Introduce una expresión aritmética")
let resultado = calcula(expresion)
document.write(`El resultado de ${expresion} es: ${resultado}`)