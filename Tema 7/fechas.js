// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
let hoy =new Date()
console.log(hoy)
// - La fecha de tu nacimiento
let nacimiento = new Date(1985,2,15)
console.log(nacimiento)
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let tarde = hoy > nacimiento
console.log(tarde)
// - Una variable que contenga el día de tu nacimiento
let dia = nacimiento.getDate()
console.log(dia)
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mes = nacimiento.getMonth()
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anyo = nacimiento.getFullYear()
console.log(`${mes} y ${anyo}`)