import { combinarDosArrays, combinarNArrays } from "./src/apareo.js";
import { leerArchivoComoString, escribirTextoEnArchivo } from "./src/utils/fileUtils.js";
//Tests propios
//Testing Combinar 2 arrays
console.log("Test combinar 2 arrays");
let arr1 = [2, 4, 5, 6, 9];
let arr2 = [3, 4, 5, 6, 8, 13, 16, 23, 24];
console.log('Arr1: ', arr1);
console.log('Arr2: ', arr2);
let arrC = combinarDosArrays(arr1, arr2);
console.log('ArrC: ', arrC);

//Testing Combinar N arrays
let arrs = [[2, 4, 5, 6, 9], [3, 6, 8, 13, 16, 23, 24], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];
console.log("Test combinar N arrays");
console.log('Arrs: ', arrs);
let arrsCombined = combinarNArrays(arrs);
console.log('Arrs Combined: ', arrsCombined);

//Testing leer archivo como string
let archivo = leerArchivoComoString("./in/10NumerosOrdenadosEntre1y50(setA).in");
console.log(archivo);

//Testing escribir texto en archivo
let texto = "Hola mundo! 123";
escribirTextoEnArchivo("./out/test.txt", texto, true);

// leo los 4 archivos a memoria

// preparo los 4 arrays a partir de los archivos leídos

// combino los primeros dos arrays

// combino los cuatro arrays

export { combinarDosArrays, combinarNArrays, leerArchivoComoString, escribirTextoEnArchivo };

