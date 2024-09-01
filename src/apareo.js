/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
export function combinarDosArrays(arrA, arrB) {
    let arrC = [];
    let indexA = 0;
    let indexB = 0;

    // Mientras no haya terminado de recorrer alguno de los dos arrays 
    while (indexA < arrA.length && indexB < arrB.length) {
        // Si el elemento de arrA es menor que el de arrB lo agrego a arrC
        if (arrA[indexA] < arrB[indexB]) {
            arrC.push(arrA[indexA]);
            indexA++;
        } 
        // Si el elemento de arrB es menor que el de arrA lo agrego a arrC
        else if (arrA[indexA] > arrB[indexB]) {
            arrC.push(arrB[indexB]);
            indexB++;
        } 
        // Si los elementos son iguales los agrego a arrC y avanzo en ambos arrays
        else {
            arrC.push(arrA[indexA]);
            indexA++;
            indexB++;
        }
    }
    // Si termine de recorrer arrA agrego los elementos restantes de arrB
    while (indexA < arrA.length) {
        arrC.push(arrA[indexA]);
        indexA++;
    }
    // Si termine de recorrer arrB agrego los elementos restantes de arrA
    while (indexB < arrB.length) {
        arrC.push(arrB[indexB]);
        indexB++;
    }

    return arrC;
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
export function combinarNArrays(arrs) {
    let arrReturn = [];
    for(let i = 0; i < arrs.length; i++) {
        arrReturn = combinarDosArrays(arrReturn, arrs[i]);
    }

    return arrReturn;
}

// exportar ambas funciones
export default { combinarDosArrays, combinarNArrays };