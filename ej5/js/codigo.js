class Trabajador {
    constructor(id, nombre, apellidos, fecha_nacimiento) {
      this.id = id
      this.nombre = nombre
      this.apellidos = apellidos
      this.fecha_nacimiento = fecha_nacimiento
    }
  
    concentrarse() {
        document.write(`${this.nombre} se ha concentrado. <br>`)
    }
}

class CEO extends Trabajador {
    constructor(id, nombre, apellidos, fecha_nacimiento, jefes_asignados = []) {
        super(id, nombre, apellidos, fecha_nacimiento)
        this.jefes_asignados = jefes_asignados
    }

    viajar(){
        document.write(`${this.nombre} está viajando. <br>`)
    }

    add_jefe(jefe) {
        if (jefe instanceof Jefe) {
            this.jefes_asignados.push(jefe);
        } else {
            throw new Error("El objeto proporcionado no es una instancia de la clase Jefes.");
        }
    }

    dirigir_jefes() {
        const nombresJefes = this.jefes_asignados.map(jefe => jefe.nombre).join(', ')
        document.write(`${this.nombre} ha dirigido a ${nombresJefes} <br>`)
    }
}

class Jefe extends Trabajador {
    constructor(id, nombre, apellidos, fecha_nacimiento, dpto_responsable, equipo = []) {
        super(id, nombre, apellidos, fecha_nacimiento)
        this.dpto_responsable = dpto_responsable
        this.equipo = equipo
    }

    add_a_equipo(programador) {
        if (programador instanceof Programador) {
            this.equipo.push(programador);
        } else {
            throw new Error("El objeto proporcionado no es una instancia de la clase Programador.");
        }
    }

    reunirse_con_el_equipo() {
        const nombresEquipo = this.equipo.map(programador => programador.nombre).join(', ')
        document.write(`${this.nombre} se ha reunido con el equipo: ${nombresEquipo}. <br>`)
    }
}

class Programador extends Trabajador {
    constructor(id, nombre, apellidos, fecha_nacimiento, titulacion, experiencia){
        super(id, nombre, apellidos, fecha_nacimiento)
        this.titulacion = titulacion
        this.experiencia = experiencia
    }

    programar() {
        document.write(`${this.nombre} está trabajando. <br>`)
    }
}

const programador1 = new Programador(1, "Juan", "Perez", "1990-01-15", "Ingeniero de Software", 5)

const jefe1 = new Jefe(2, "Maria", "Lopez", "1985-03-20", "Desarrollo de Software")
jefe1.add_a_equipo(programador1)

const programador2 = new Programador(3, "Ana", "Garcia", "1995-06-10", "Ingeniero Informático", 3)

jefe1.add_a_equipo(programador2)

const ceo1 = new CEO(4, "Carlos", "Rodriguez", "1970-12-05")
ceo1.add_jefe(jefe1)

programador1.programar()
jefe1.reunirse_con_el_equipo()
ceo1.viajar()
ceo1.dirigir_jefes()