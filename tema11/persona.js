class Persona {
    // Private -> #
    #nombre
    #edad

    // Protected -> _
    _dev 
    constructor(nom, ed, esDes) {
        this.#nombre = nom
        this.#edad = ed
        this._dev = esDes
    }
    saludo() {
        let des = (this._dev) ? 
            'soy desarrollador' :
            'no soy desarrollador'        
        
        console.log(`Persona, hola. Mi nombre es ${this.#nombre}, tengo ${this.#edad} años y ${des}`);
    }
    dameEdad() {
        return this.#edad
    }
    setEdad(newEdad) {
        return this.#edad = newEdad
    }


}

let personita = new Persona("Carlos",37,true);

personita.saludo()
personita.setEdad(12)
console.log(personita.dameEdad())

class Desarrollador extends Persona {
    #lenguaje
    constructor(nombre,edad,leng) {
        super(nombre,edad,true)
        this.#lenguaje = leng
    }
    saludo() {
        super.saludo()
        console.log(`Y además, soy developer de ${this.#lenguaje} uwu`)
    }
}

let desarrolladorcito = new Desarrollador("Miguel",12,true)
desarrolladorcito.saludo()