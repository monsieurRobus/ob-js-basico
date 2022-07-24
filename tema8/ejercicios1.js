// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

const trueFunction = () => true;

console.log(trueFunction())


// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const promesa = () => setTimeout(()=>console.log("Holo soy una promesa"),5000);
promesa();

// - Una función generadora de índices pares automáticos
function* generaId(fecha) {
    let i = 0;
    while(true)
        yield `${fecha.getFullYear()}${fecha.getMonth()}${fecha.getDate()}${i++}` 

}

var gen = generaId(new Date());

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

    