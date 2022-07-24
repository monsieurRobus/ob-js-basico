const htexto = document.getElementById("htexto")

htexto.addEventListener("cambioTexto", evento => 
    {
        console.log(evento.detail)
        htexto.innerHTML = evento.detail.texto;
        htexto.style.color = evento.detail.color;
    })

const cambiarTexto = (nuevoTexto,color) => {
    const evento = new CustomEvent("cambioTexto", 
    {detail:    {
        texto : nuevoTexto,
        color: color
            }
        }
    )
    htexto.dispatchEvent(evento)
}
