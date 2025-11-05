// Lista original de diccionarios (objetos en JavaScript)
let phones = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' }
];

// Clave por la que se va a ordenar
let key = 'model';

// Ordenar usando una función lambda (arrow function)
let sortedList = phones.sort((a, b) => a[key] - b[key]);


// Mostrar resultado
console.log(sortedList);

