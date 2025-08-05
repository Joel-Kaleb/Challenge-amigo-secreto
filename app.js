// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo()
{
    let amigo = document.querySelector("#amigo").value;
    
    if(amigo.trim() === '') //trim remueve espacios al principio y final de un string
    {
        alert("Por favor, inserta un nombre");
        limpiarCajaTexto();
    }
    else
    {
        amigos.push(amigo);
        limpiarCajaTexto();
    }
    
}

function limpiarCajaTexto()
{
    document.querySelector("#amigo").value = '';
}

function sortearAmigo()
{
    return;
}