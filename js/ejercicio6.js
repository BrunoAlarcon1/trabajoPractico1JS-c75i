const num1 = parseInt(prompt("Ingrese el primer numero: "));
const num2 = parseInt(prompt("Ingrese el segundo numero: "));

if(num1>num2){
    document.write(`<p>El mayor es: ${num1}</p>`);
}else{
    document.write(`<p>El mayor es: ${num2}</p>`);
}