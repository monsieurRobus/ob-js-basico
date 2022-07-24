// - Replica el ejercicio completo del vídeo

// - Añade dos párrafos más en cada una de las secciones

// - Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: <https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)

// - Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine

const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.getElementById("icono-papelera")
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("drag")
        event.dataTransfer.setData("id",parrafo.id)
        const imagenFantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(imagenFantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", event => {
    parrafo.classList.remove("drag")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
    event.preventDefault()
    })

    seccion.addEventListener("drop", event => {
    let idparrafo = event.dataTransfer.getData("id")
     
    const parrafo = document.getElementById(idparrafo)
    
    seccion.append(parrafo)
    })
})

