/*
*** Aceleración rápida o lenta? ***  
Cuanto tiempo tarda un aautomovil en alcanzar 60Km/h?
Si parte de reposo con una aceleración de 20Km /h**2 ??
Fórmula: vf=v0 + a * t
Despejamos t = (vf - v0) / a
v0 = 0 ; por lo tanto t = vf/a 
     t = 60 Km/H / 20 Km /H**2 = 3 H 
*/ 

let velocidadInicialKmHora = 0; /* o de reposo */
let aceleracionKmHora = 20;     /* aclaro que son KM x HORA */
let velocidadFinalKmHora = 60;  /* aclaro que son KM x HORA */

console.log("Tiempo en alcanzar velocidad final = " + ((velocidadFinalKmHora - velocidadInicialKmHora) / aceleracionKmHora) + 
   " Horas" );

/* Fin */