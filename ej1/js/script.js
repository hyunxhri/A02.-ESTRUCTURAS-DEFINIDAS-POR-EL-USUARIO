const repiteCadena = repeticiones => {
    for(let i = 0; i < repeticiones; i++){
        document.write("bauuuba ")
    }
}

let numRepeticiones = prompt("Introduzca cuántas veces quiere repetir la cadena:")
if(numRepeticiones == parseInt(numRepeticiones)){
    repiteCadena(numRepeticiones)
} else {
    alert("Error, debe introducir un entero.")
}