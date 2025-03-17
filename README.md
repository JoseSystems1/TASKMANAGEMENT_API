# API de Gestión de Tareas (Elementos) de José Eduardo Williams.

Una API simple para gestionar elementos utilizando Node.js y JavaScript. Este proyecto simula una API básica que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de elementos almacenados en memoria.

# Características:

Esta API incluye las siguientes funcionalidades:

Crear nuevos elementos:
Permite agregar un nuevo elemento a la lista de elementos.
Cada elemento tiene un ID único, un nombre, un estado de actividad (activo o inactivo) y una fecha de creación. 

Listar todos los elementos:
Recupera todos los elementos almacenados en la lista.
Si no hay elementos, devuelve un mensaje indicando que no hay datos disponibles.

Actualizar elementos existentes:
Actualiza el nombre o el estado (activo) de un elemento existente.
Valida que el nuevo nombre no esté vacío.
Busca el elemento por su ID único.

Eliminar elementos:
Permite eliminar un elemento de la lista utilizando su ID único.

Límite máximo de elementos:
La lista tiene un límite máximo de 5 elementos.
Si se intenta agregar un nuevo elemento cuando ya se alcanzó el límite, se devuelve un error indicando que no se pueden agregar más elementos.

# Estructura de la API:

La API está diseñada con operaciones básicas y utiliza almacenamiento en memoria (no incluye base de datos). Cada operación está implementada como una función exportada que puede ser utilizada en un entorno de servidor.

# Las funciones principales son:

agregarElemento:
Agrega un nuevo elemento a la lista.
Valida que el nombre del elemento no esté vacío y que no se supere el límite de elementos.

listarElementos:
Devuelve todos los elementos almacenados en la lista.
Si no hay elementos, retorna un mensaje indicando que la lista está vacía.

eliminarElemento:
Busca un elemento por su ID único y lo elimina de la lista.
Si el ID no existe, devuelve un mensaje de error.

actualizarElemento:
Permite modificar el nombre y/o el estado (activo o inactivo) de un elemento existente.
Verifica que el nuevo nombre, si se proporciona, no esté vacío.

# Requisitos:
Antes de usar esta API, asegúrate de tener instalado lo siguiente:

Node.js (v14 o superior recomendado).
Git Bash (o cualquier terminal compatible).