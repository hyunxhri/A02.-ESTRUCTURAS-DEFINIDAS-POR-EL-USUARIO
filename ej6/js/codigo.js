class Ghost {
    colores = {
        'rosa': "#FF33B8",
        'celeste': "#33CAFF",
        'verde': "#33FF33",
        'amarillo': "#ECFF33",
        'naranja': "#FF9033",
        'malva': "#C89BE5",
        'menta': "#9BE5CF",
        'rojo': "#E81111",
        'azul': "#4F68C7",
        'morado': "#9311E8"
    }

    eligeColor() {
        const nombreColor = Object.keys(this.colores);
        const indiceColor = Math.floor(Math.random() * nombreColor.length);
        return nombreColor[indiceColor];
    }

    seleccionaCodigoColor(color) {
        return this.colores[color];
    }
}

for (let i = 0; i < 1000; i++) {
    const ghost = new Ghost();
    const color = ghost.eligeColor();
    const colorBox = document.createElement('div');
    colorBox.style.width = '100px';
    colorBox.style.height = '100px';
    colorBox.style.display = 'inline-block';
    colorBox.style.margin = '5px';
    colorBox.style.backgroundColor = ghost.seleccionaCodigoColor(color);
    document.body.appendChild(colorBox);
    const texto = document.createElement('span');
    texto.textContent = color;
    colorBox.style.textAlign = 'center';
    colorBox.appendChild(texto);
}
