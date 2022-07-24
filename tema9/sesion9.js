const miFuncion = val => {
    if(typeof val === "number") {
        return 2*val
    }
    throw new Error("El valor debe ser de tipo número")


}


try {

    console.log(miFuncion("a"))
    

} catch(e) {

    console.error(`El valor no es numérico. Tipo de valor: ${typeof(e)}`)
    console.error(`Error 101`)

} finally {
    console.log("Hola")
}