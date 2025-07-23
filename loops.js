// Exercícios com loops

// Loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Loop for com break
console.log("\nLoop com break:");
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log("Encontrei o 6, parando o loop!");
    break;
  }
  console.log(i);
}

// Loop for com continue
console.log("\nPulando números pares:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Pula os pares
  }
  console.log(i);
}

// Iterando sobre arrays
const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("\nLista de frutas:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruta ${i + 1}: ${fruits[i]}`);
}

// ===============================
// 🚀 DESAFIOS
// ===============================

// a) Tabuada do 7
console.log("\nTabuada do 7:");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// b) Soma de array de números
const numeros = [5, 10, 3, 8, 2];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("\nSoma dos números:", soma);

// c) Menor valor em uma matriz de números
const matriz = [
  [8, 3, 15],
  [22, 1, 9],
  [5, 7, 0],
];

let menor = matriz[0][0];
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] < menor) {
      menor = matriz[i][j];
    }
  }
}
console.log("\nMenor valor da matriz:", menor);
