import { combinarDosArrays, combinarNArrays } from "./src/apareo.js";
import { leerArchivoComoString, escribirTextoEnArchivo } from "./src/utils/fileUtils.js";
import { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString } from "./src/utils/transformUtils.js";

// leo los 4 archivos a memoria
let archivo1 = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in');
let archivo2 = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in');
let archivo3 = leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in');
let archivo4 = leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in');

// preparo los 4 arrays a partir de los archivos leídos
let array1 = transformarStringEnArrayDeNumeros(archivo1, ',');
let array2 = transformarStringEnArrayDeNumeros(archivo2, ',');
let array3 = transformarStringEnArrayDeNumeros(archivo3, ',');
let array4 = transformarStringEnArrayDeNumeros(archivo4, ',');

// combino los primeros dos arrays
let arrayCombinado1 = combinarDosArrays(array1, array2);

// creo un array de arrays para probar la funcion combinarNArrays
let arrayDeArrays = [array1, array2, array3, array4];
let arrayCombinado2 = combinarNArrays(arrayDeArrays);

// transformo los arrays combinados a strings
let str1 = transformarArrayDeNumerosAUnSoloString(arrayCombinado1, ',');
let str2 = transformarArrayDeNumerosAUnSoloString(arrayCombinado2, ',');

// escribo los strings en los archivos de salida
escribirTextoEnArchivo('./out/combinado.out', str1, true);
escribirTextoEnArchivo('./out/combinado2.out', str2, true);
