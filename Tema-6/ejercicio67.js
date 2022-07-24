let array = [2,4,1,6,7,87,3,15]
let array2 = [2,4,1,6,7,87,3,15]

array.sort((a,b) => b-a)
console.log(array)

let listaAlumnos = [
    { nombre: "Carlos", edad: 37 },
    { nombre: "Migueo", edad: 32 },
    { nombre: "Eu", edad: 37 },
    { nombre: "paramecio", edad: 30 }

];

listaAlumnos.sort((a,b)=>
b.edad - a.edad)

console.log(listaAlumnos)

console.log(array2.every(a => typeof(a) === "number"))

const comparameArrays = (a,b) =>
{
    if (a.length !== b.length) return false
    const comp = a.every((valor,i) => valor === b[i])
    return comp
    
}

console.log(comparameArrays(listaAlumnos,listaAlumnos))