const url = 'http://www.raydelto.org/agenda.php'

function traerNombre(){
    return fetch(url).then(respuesta => respuesta.json())
    .then(respuesta => respuesta.name)
}

export default{
    traerNombre
}