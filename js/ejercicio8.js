const num = parseInt(prompt("Ingrese un numero: "));

if (num % 2 == 0) {
  document.write(`El numero ${num} es divisible por 2`);
} else {
  document.write(`El numero ${num} no es divisible por 2`);
}
