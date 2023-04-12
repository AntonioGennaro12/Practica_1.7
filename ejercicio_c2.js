/*
Reparto de Nuggets en la selva 
Total de Nuggets de Pollo pedidos por Simba: 43
Simba reparte, pero Scar notó que iba a sobrar algo 
y se lo agarró.
Mufasa se dió cuenta, se lo quitó y se lo dió a Simba.
¿Cuantos Nuggets sobraron?
¿Cuantos Nuggets les tocó a c/u? 
*/

let totalTrozosPollo = 43;
let cantidadComensales = 3;
let cantidadSobrante = totalTrozosPollo % cantidadComensales;
let cantidadParaCadaUno = (totalTrozosPollo - cantidadSobrante) / cantidadComensales;
let cantidadScar = cantidadParaCadaUno;
let cantidadMufasa = cantidadParaCadaUno;
let cantidadSimba = cantidadParaCadaUno + cantidadSobrante;

console.log("Cantidad Trozos de Pollo sobrantes     = " + cantidadSobrante + ".-");
console.log("Cantidad Trozos de Pollo para Scar     = " + cantidadScar + ".-");
console.log("Cantidad Trozos de Pollo para Mufasa   = " + cantidadMufasa + ".-");
console.log("Cantidad Trozos de Pollo para Simba    = " + cantidadSimba + ".-");

console.log("\nEn una sola linea lo que les tocó a c/u...");
console.log("Cantidad Trozos de Pollo para Scar = " + cantidadScar + ".- para Mufasa = " + 
   cantidadMufasa + ".- para Simba = " + cantidadSimba + ".-");
/* Fin */

