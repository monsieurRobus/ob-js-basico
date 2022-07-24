let altura_cm = 195;
console.log(altura_cm)
let altura_m = 1.95;
let peso_kg = 113.7;
let altura_m_ceil = Math.ceil(altura_m);
console.log(altura_m_ceil)
let peso_kg_abajo = Math.floor(peso_kg);
console.log(peso_kg_abajo)
// no entiendo el ultimo apartado 


let prueba = [1,2,4,true,null,undefined,"holo"]
let pruebo = [ "fin","fan", "fun"]
let extracto = prueba.splice(2,1,1);
console.log([...prueba,...pruebo])