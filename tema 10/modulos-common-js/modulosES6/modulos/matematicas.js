// Vamos a crear un módulo

export function suma(a,b) {
    return a+b
}

export function eleva(a,b){
    return a**b
}

export function factorial(a){
    
    let f=1;
    for (let i = 1;i<=a; i++)
    {
        f*=i;
    }
        
    return f
}

