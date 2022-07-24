// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

var listaCompra = ["Huevos", "Pan", "Aceitunas", "Aftersun", "Embutido"]

listaCompra.push("Aceite de Girasol");
console.log(listaCompra)



listaCompra = listaCompra.filter(a => a !== "Aceite de Girasol");
console.log(listaCompra)

const listaPelis = [

    {
        nombre: "Interstellar",
        director: "Christopher Nolan",
        fecha: 2014
    },
    {
        nombre: "Ex Machina",
        director: "Alex Garland",
        fecha: 2014
    },
    {
        nombre: "Matrix",
        director: "The Wachosky Sisters",
        fecha: 1998
    }
    
]

let pelisNuevas = listaPelis.filter(peli => peli.fecha > 2010)
console.log(pelisNuevas)

let directores = listaPelis.map(peli => peli.director)

console.log(directores)

let titulos = listaPelis.map(peli => peli.nombre)
console.log(titulos)

let concatenacion = directores.concat(titulos)
console.log(concatenacion)

let concat2 = [...directores,...titulos]
console.log(concat2)