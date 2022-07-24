//IMOPOIRTAMOS LAS FUNCIONES DE MATEMATICAS.JS
// 1. commonjs
// HAY QUE INDICAR QUE ALS FUNCIONES SON PUBLICAS!!

const { suma,factorial } = require('./modulos/matematicas.js')


const fact = factorial(10);
console.log(fact);