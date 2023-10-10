class Cesar {
    constructor(desplazamientos) {
        this.desplazamientos = desplazamientos
        this.letras = ['A','B','C','D','E','F','G','H','I','J','K','L', 'Ñ','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    }

    encode(mensaje){
        let mensajeCodificado = ''
        for (let i = 0; i < mensaje.length; i++){
            const letra = mensaje[i].toUpperCase()
            if(this.letras.includes(letra)){
                const indice = this.letras.indexOf(letra)
                let nuevoIndice = (indice + this.desplazamientos) % this.letras.length
                if (nuevoIndice < 0) {
                    nuevoIndice = this.letras.length + nuevoIndice; // Si el índice es negativo, lo suma al largo de las letras.
                                                                    //Si el índice es 0, y el nuevo índice -5, el nuevo índice pasaría a ser 26 - 5 = 21. 
                }
                mensajeCodificado += this.letras[nuevoIndice]
            } else {
                mensajeCodificado += mensaje[i]; // Mantiene los caracteres que no sean letras.
            }
        }
        return mensajeCodificado
    }

    decode(mensaje){
        this.desplazamientos = -this.desplazamientos
        return this.encode(mensaje)
    }
}

// EJEMPLO DE CLASE.
let userText = 'DWEC'
let cifrado = new Cesar(5)
let text_encoded = cifrado.encode(userText)
let text_decoded = cifrado.decode(text_encoded)
document.write(text_encoded + "<br>")
document.write(text_decoded + "<br><br>")

// EJEMPLO CON LA LETRA Z PARA COMPROBAR QUE NO DE PROBLEMAS CODIFICANDO Y DECODIFICANDO.
let userText2 = 'ZEA'
let cifrado2 = new Cesar(5)
let text_encoded2 = cifrado2.encode(userText2)
let text_decoded2 = cifrado2.decode(text_encoded2)
document.write(text_encoded2 + "<br>")
document.write(text_decoded2)