class Persona {
    constructor(nombre, edad, genero) {
      this.nombre = nombre
      this.edad = edad
      this.genero = genero
    }
  
    getInfo() {
        document.write(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero} <br>`)
    }
  }
  
class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero)
        this.curso = curso
        this.grupo = grupo
    }

    matricularse(curso, grupo) {
        this.curso = curso
        this.grupo = grupo
        document.write(`${this.nombre} ha sido matriculado en el curso ${curso} del grupo ${grupo} <br>`)
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, modulo, nivel) {
        super(nombre, edad, genero)
        this.modulo = modulo
        this.nivel = nivel
    }

    imparte(modulo, nivel) {
        this.modulo = modulo
        this.nivel = nivel
        document.write(`${this.nombre} imparte el módulo ${modulo} de nivel ${nivel} <br>`)
    }
}

const persona1 = new Persona("Juan", 30, "Masculino")
const estudiante1 = new Estudiante("María", 20, "Femenino", "Matemáticas", "A")
const profesor1 = new Profesor("Carlos", 40, "Masculino", "Física", "Avanzado")

persona1.getInfo()
estudiante1.matricularse("Historia", "B")
profesor1.imparte("Química", "Intermedio")