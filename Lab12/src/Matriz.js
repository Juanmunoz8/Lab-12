// Matriz original
let X = [
  [2, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Calcular la transpuesta usando funciones lambda
let XT = X[0].map((_, i) => X.map(row => row[i]));

console.log(XT);
