const frase = prompt("Ingrese una frase: ");
let fraseConVocales = "";

for (let i = 0; i < frase.length; i++) {
  if (
    frase.charAt(i) == "a" ||
    frase.charAt(i) == "e" ||
    frase.charAt(i) == "i" ||
    frase.charAt(i) == "o" ||
    frase.charAt(i) == "u"
  ) {
    fraseConVocales = fraseConVocales + frase.charAt(i);
  }
}

document.write(`<p>${fraseConVocales}</p>`);
