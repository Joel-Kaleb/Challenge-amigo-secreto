// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo()
{
    let amigo = document.querySelector("#amigo").value;
    
    if(amigo.trim() === '') //trim remueve espacios al principio y final de un string
    {
        alert("Por favor, inserta un nombre");
        limpiarCajaTexto();
        return;
    }

    amigos.push(amigo);
    limpiarCajaTexto();
    agregarAmigoLista();
}

function limpiarCajaTexto()
{
    document.querySelector("#amigo").value = '';
}

function agregarAmigoLista()
{
    let lista = document.querySelector("#listaAmigos");
    let contenidoHTML = "";
    for(let i = 0; i < amigos.length; i++)
    {
        contenidoHTML += `<li>${amigos[i]}</li>`;
    }

    lista.innerHTML = contenidoHTML;
}

function sortearAmigo()
{
    if(amigos.length === 0)
    {
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    document.querySelector("#listaAmigos").innerHTML = "";
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAleatorio]}`;
}