// Lista inicial
let lista = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];

// Lista de elementos a borrar
let borrar = ['amarillo', 'café', 'gris'];

// Usando una función lambda (arrow function) con filter
let resultado = lista.filter(elemento => !borrar.includes(elemento));

// Mostrar resultado
console.log(resultado);
