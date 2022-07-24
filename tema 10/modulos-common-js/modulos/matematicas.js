// Vamos a crear un módulo

function suma(a,b) {
    return a+b
}

function eleva(a,b){
    return a**b
}

function factorial(a){
    
    let f=1;
    for (let i = 1;i<=a; i++)
    {
        f*=i;
    }
        
    return f
}

module.exports= {
    suma,
    eleva,
    factorial
}