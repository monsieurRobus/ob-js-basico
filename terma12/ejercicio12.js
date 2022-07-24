// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
let fibonacci = (num) =>
{
    let lista = [1]
        for(var i = 1;i<num;i++){
            (i==1) ? lista.push(1) : lista.push(lista[i-1]+lista[i-2])
        }

        return lista;
}

console.log(fibonacci(1))



// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

