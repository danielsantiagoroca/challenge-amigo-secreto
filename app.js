let amigos = [];
let contenidoCaja = document.getElementById("amigo");

// Si se presiona la tecla Enter al escribir un nombre, que agregue al amigo a la lista
contenidoCaja.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        agregarAmigo();
    }
});

function agregarAmigo(){
    const nombre = contenidoCaja.value.trim();

    // Si el campo para el nombre está vacío, se indica al usuario que escriba un nombre
    if (nombre === "") {
        alert("¡Ingresa el nombre de un amigo para poder añadirlo!");
        limpiarCaja();

    // Si el amigo ya está en la lista, se le indica al usuario que escriba un nombre distinto
    } else if (amigos.includes(nombre)) {
        alert("El amigo que intentas agregar ya está en la lista. Escribe otro nombre, o identifícalo distinto.");
        limpiarCaja();

    // Si el amigo no está en la lista y no es un campo vacío, se agrega
    } else {
        amigos.push(nombre);
        actualizarListaAmigos(); // Refresca la lista visual
        limpiarCaja();
    }
}

// Se limpia la caja de texto y se le da foco, alistando el cursor para volver a escribir
function limpiarCaja(){
    contenidoCaja.value = "";
    contenidoCaja.focus();
}

// FUNCION PRINCIPAL PARA ACTUALIZAR LA LISTA VISUAL
// Recorre el array amigos y agrega cada nombre como un <li> dentro de la lista HTML
function actualizarListaAmigos() {
    const listAmigos = document.getElementById("listaAmigos");
    listAmigos.innerHTML = ""; // Limpia la lista existente

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listAmigos.appendChild(li); // Agrega cada amigo como <li>
    }
}

// Vacía el array y actualiza la lista visual
function vaciarLista(){
    amigos = [];
    actualizarListaAmigos();
    document.getElementById("amigoSorteado").innerHTML = "";
    alert("¡La lista ha sido vaciada!");
}

// Sortea un amigo al azar, lo elimina del array y actualiza la lista
function sortearAmigo(){
    // Si la lista de amigos está vacía, no sortea
    if (amigos.length === 0) {
        alert("¡Ya no quedan amigos por sortear!");
        document.getElementById("amigoSorteado").innerHTML = "";
        return;
    }

    // Se usa Math.random para seleccionar un índice aleatorio del array
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    document.getElementById("amigoSorteado").innerHTML = `Amigo sorteado: ${sorteado}`;
    amigos.splice(indice, 1); // Elimina el amigo sorteado del array
    actualizarListaAmigos(); // Refresca la lista visual

    // Si ya no quedan amigos, se notifica al usuario
    if (amigos.length === 0) {
        alert("¡Todos los amigos han sido sorteados! La lista se ha vaciado.");
    }
}
