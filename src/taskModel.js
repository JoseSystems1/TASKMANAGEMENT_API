// Almacenamiento en memoria para los elementos
const elementos = [];
const LIMITE_ELEMENTOS = 5; // Constante para el número máximo de elementos

// Función para agregar un elemento
function agregarElemento(elemento) {
  if (elementos.length >= LIMITE_ELEMENTOS) {
    return { exito: false, mensaje: "No se pueden agregar más elementos. Límite alcanzado." };
  }

  const elementoRecortado = elemento.trim();
  if (elementoRecortado === "") {
    return { exito: false, mensaje: "No puedes agregar un elemento vacío." };
  }

  const nuevoElemento = {
    id: Date.now().toString(), // Usar timestamp como ID único
    nombre: elementoRecortado,
    activo: false,
    fechaCreacion: new Date()
  };
  
  elementos.push(nuevoElemento);
  return { exito: true, mensaje: `Elemento "${elementoRecortado}" agregado.`, elemento: nuevoElemento };
}

// Función para listar todos los elementos
function listarElementos() {
  if (elementos.length === 0) {
    return { elementos: [], mensaje: "No hay elementos disponibles." };
  }
  return { elementos: [...elementos] };
}

// Función para eliminar un elemento por su ID
function eliminarElemento(id) {
  const indice = elementos.findIndex(el => el.id === id);
  
  if (indice === -1) {
    return { exito: false, mensaje: "Elemento no encontrado." };
  }
  
  const eliminado = elementos.splice(indice, 1)[0];
  return { exito: true, mensaje: `Elemento "${eliminado.nombre}" eliminado.` };
}

// Función para actualizar un elemento
function actualizarElemento(id, cambios) {
  const indice = elementos.findIndex(el => el.id === id);
  
  if (indice === -1) {
    return { exito: false, mensaje: "Elemento no encontrado." };
  }
  
  const elementoSeleccionado = elementos[indice]; // Referencia al elemento a actualizar
  
  if (cambios.nombre !== undefined) {
    const nombreRecortado = cambios.nombre.trim();
    if (nombreRecortado === "") {
      return { exito: false, mensaje: "El nuevo nombre no puede estar vacío." };
    }
    elementoSeleccionado.nombre = nombreRecortado;
  }
  
  if (cambios.activo !== undefined) {
    elementoSeleccionado.activo = cambios.activo;
  }
  
  return { 
    exito: true, 
    mensaje: `Elemento actualizado a "${elementoSeleccionado.nombre}".`,
    elemento: elementoSeleccionado
  };
}

module.exports = { agregarElemento, listarElementos, eliminarElemento, actualizarElemento };