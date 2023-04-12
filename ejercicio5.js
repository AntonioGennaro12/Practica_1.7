/*
*** Cuantos milímetros tiene un metro? y un kilómetro? ***  
Juan conduce 2,6KM hasta la tiend de Marcelina. Y desde allí hasta 
la casa de su tío 691 metros...
Que distancia total recorrió en milimetros??? 
*/ 
const MILIMETROS_METRO = 1000;
const METROS_KILOMETRO = 1000;
const MILIMETROS_KILOMETRO = MILIMETROS_METRO * METROS_KILOMETRO

let distanciaPuebloEnKm = 2.6;
let distanciaTiendaCasaEnM = 691;

console.log("Distancia recorrida en Milimetros = " + 
    (distanciaPuebloEnKm * MILIMETROS_KILOMETRO + distanciaTiendaCasaEnM * MILIMETROS_METRO) +
         ".-" );

/* Fin */ 