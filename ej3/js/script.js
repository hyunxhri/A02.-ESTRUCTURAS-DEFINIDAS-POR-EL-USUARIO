let aplanaMatriz = matriz => {
    matriz.forEach(fila => {
        fila.forEach(elemento => {
            listaElementos.push(elemento);
        });
    });
};

let ordenaElementos = lista => {
    let longitudLista = lista.length;
    let intercambiado;
    do {
        intercambiado = false;
        for (let i = 0; i < longitudLista - 1; i++) {
            if (lista[i] > lista[i + 1]) {
                // Intercambia elementos si están en el orden incorrecto
                let cambio = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = cambio;
                intercambiado = true;
            }
        }
    } while (intercambiado);
};

let listaElementos = [];
let matriz = [[5, 4, 6], [2, 9, 3], [8, 1, 7]];
aplanaMatriz(matriz);
ordenaElementos(listaElementos);
document.write(listaElementos);