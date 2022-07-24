// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let carlos = {
    nombre:"Carlos",
    apellido: "Díaz",
    edad: 37,
    altura: 188,
    eresDesarrollador:true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
let edad = carlos.edad;
console.log(edad)
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let listaColegas = [carlos,{nombre:"juanfer",apellidos:"sanchez",edad:35,altura:169,eresDesarrollador:false},{nombre:"vis",apellidos:"martinez",edad:36,altura:170,eresDesarrollador:false}]


// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
listaColegas.sort((a,b)=> b.edad - a.edad)
console.log(listaColegas)
