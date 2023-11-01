const num = parseInt(prompt("Ingrese un numero: "));
let mensaje = `El ${num} es divisible `;

if (num % 2 == 0) {
  {
    mensaje += `, por 2`;
  }
  if (num % 3 == 0) {
    mensaje += `, por 3`;
  }
  if (num % 5 == 0) {
    mensaje += `, por 5`;
  }
  if (num % 7 == 0) {
    mensaje += `, por 7`;
  }
  document.write(`<p>${mensaje}</p>`);
} else {
  document.write(`<p>El ${num} no es divisible por 2,3,5,7</p>`);
}
