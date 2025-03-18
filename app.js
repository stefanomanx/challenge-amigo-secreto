// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById('amigo').value;

  // Validar la entrada
  if (nombre === '' || !/^[a-zA-Z\s]+$/.test(nombre.trim())) {
    alert('Por favor, inserte un nombre válido.');
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
  if (amigos.length === 0) {
    alert('No hay amigos en la lista para sortear.');
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${amigoSorteado} !!`;
  console.log('Amigo sorteado:', amigoSorteado);
}

// Agregar evento para permitir la entrada con la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    agregarAmigo();
  }
});
