/*
Técnicas prácticas Oscuras. Se aprueba con el 80% 
Total de hechizos ..15
Jerry aprendió a usar 13 y Tom 12.
Informar mediante consola cuál es la 
Cantidad mínima requerida y la situación de Jerry y Tom
*/ 

const FACTOR_APROBACION = 0.8;
let totalHechizos = 15;
let hechizosRequeridos = totalHechizos * FACTOR_APROBACION;
let hechizosJerry = 13;
let hechizosTom = 12;

console.log("Cantidad mínima de Hechizos requerida = " +hechizosRequeridos+ ".-" );
console.log("Hechizos aprobados por Jerry = " +hechizosJerry+ ".-");
console.log("Hechizos aprobados por  Tom  = " +hechizosTom+ ".-");

/* Fin */
