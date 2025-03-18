// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById('amigo').value;

  // Validar la entrada
  if (nombre === '' || !/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/.test(nombre.trim())) {
    alert('Por favor, inserte un nombre válido.');
    return;
  }

  // Verificar si el nombre ya existe en la lista
  if (amigos.includes(nombre.trim())) {
    alert('El nombre ya está en la lista.');
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre.trim());
  console.log('Amigo agregado:', nombre);
  console.log('Lista de amigos actualizada:', amigos);

  // Limpiar el campo de entrada
  document.getElementById('amigo').value = '';

  // Actualizar la lista de amigos en el HTML
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  let lista = document.getElementById('listaAmigos');
  
  // Limpiar la lista existente
  lista.innerHTML = '';

  // Ordenar la lista de amigos alfabéticamente
  amigos.sort();

  // Iterar sobre el arreglo y agregar elementos a la lista
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
  console.log('Lista de amigos en el HTML actualizada.');
}

function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length < 2) {
    alert('Debe haber al menos dos amigos en la lista para sortear.');
    return;
  }

  let resultado = {};
  let nombresDisponibles = [...amigos];

  for (let i = 0; i < amigos.length; i++) {
    let nombre = amigos[i];
    let posiblesAmigos = nombresDisponibles.filter(amigo => amigo !== nombre);

    if (posiblesAmigos.length === 0) {
      alert('No se puede realizar el sorteo sin autoasignaciones.');
      return;
    }

    let indiceAleatorio = Math.floor(Math.random() * posiblesAmigos.length);
    let amigoSorteado = posiblesAmigos[indiceAleatorio];

    resultado[nombre] = amigoSorteado;
    nombresDisponibles = nombresDisponibles.filter(amigo => amigo !== amigoSorteado);
  }

  // Mostrar el resultado
  let resultadoHTML = 'Resultados del sorteo:<br>';
  for (let [amigo, sorteado] of Object.entries(resultado)) {
    resultadoHTML += `${amigo} -> ${sorteado}<br>`;
  }
  document.getElementById('resultado').innerHTML = resultadoHTML;
  console.log('Resultados del sorteo:', resultado);
}

function resetearJuego() {
  // Reiniciar el array de amigos
  amigos = [];
  console.log('Juego reseteado. Lista de amigos vacía:', amigos);

  // Limpiar la lista de amigos en el HTML
  actualizarListaAmigos();

  // Limpiar el resultado del sorteo
  document.getElementById('resultado').innerHTML = '';
  console.log('Resultado del sorteo limpiado.');
  console.log('Juego del Amigo Secreto reiniciado.');
}

// Agregar evento para permitir la entrada con la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    agregarAmigo();
  }
});
