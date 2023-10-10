const resultadosDeLaSuma = new Map()
for(let i = 2; i <= 12; i++){
    resultadosDeLaSuma.set(i, 0)
}

const lanzaDado = () => Math.ceil(Math.random() * 6)

const sumaDados = () => {
    let dado1 = lanzaDado()
    let dado2 = lanzaDado()
    console.log(`Primer dado: ${dado1} || Segundo dado: ${dado2}`)
    let sumaDados = dado1 + dado2
    console.log(`La suma es: ${sumaDados}`)
    return sumaDados
}

const almacenaResultados = () => {
    for(let i = 0; i < 36000; i++){
        let resultado = sumaDados()
        resultadosDeLaSuma.set(resultado, resultadosDeLaSuma.get(resultado) + 1)
    }
}

almacenaResultados()
resultadosDeLaSuma.forEach((valor, clave) => {
    document.write(`Resultado Suma: ${clave} || Repeticiones: ${valor} <br>`);
  })