// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo()
{
    let amigo = document.querySelector("#amigo").value;
    if(amigo == '')
    {
        alert("Por favor, inserta un nombre");
        limpiarCajaTexto();
    }
    else
    {
        console.log(amigo);
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