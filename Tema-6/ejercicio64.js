let listaAlumnos = [
    { nombre: "Carlos", edad: 37 },
    { nombre: "Migueo", edad: 32 },
    { nombre: "Eu", edad: 37 },
    { nombre: "paramecio", edad: 30 }

];
    
const alumno = listaAlumnos.find(ob => ob.nombre === "Migueo"); 
console.log(alumno)

let listaAlumnos2 =  ["Marcos", "Guille","Lucia","Nadia","Javi","Carlos","Miguel Angel"]

const prueba = listaAlumnos2.map((v,i)=> `${i+1} - ${v}`);
console.log(prueba)


const p = listaAlumnos.filter(obj => obj.edad > 36);
console.log(p)

const n = listaAlumnos.filter( v => v.nombre !== "Carlos")
console.log(n)

const suma = listaAlumnos.reduce((agr, cur)=> agr += cur.edad)