const num1 = parseInt(prompt("Ingrese el primer numero: "));
const num2 = parseInt(prompt("Ingrese el segundo numero: "));
const num3 = parseInt(prompt("Ingrese el tercer numero: "));

if(num1>num2 && num1>num3 ){
    document.write(`<p>El ${num1} es el numero mas grande</p>`);
}else if(num2>num1&&num2>num3){
    document.write(`<p>El ${num2} es el numero ma1s grande</p>`);
}else{
    document.write(`<p>El ${num3} es el numero mas grande</p>`);
}