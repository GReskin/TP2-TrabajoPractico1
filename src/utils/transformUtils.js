/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
    let numeros = [];
    let numeroActualComoString = '';
    
    //Recorro el string y voy armando los numeros hasta que encuentro el separador
    for (let i = 0; i < str.length; i++) {
        if (str[i] === separador) {
            //Si el numero actual no es vacio, lo agrego al array de numeros
            if (numeroActualComoString !== '') {
                //Convierto el numero actual a numero y lo agrego al array
                let numeroActual = Number(numeroActualComoString);
                numeros.push(numeroActual);
                //Reseteo el numero actual
                numeroActualComoString = '';
            }
        } else {
            //Si no es un separador, agrego el caracter al numero actual
            numeroActualComoString += str[i];
        }
    }
    
    //Agrego el ultimo numero si es que no es vacio
    if (numeroActualComoString !== '') {
        let numeroActual = Number(numeroActualComoString);
        numeros.push(numeroActual);
    }
    
    return numeros;
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    let str = '';
    //Agrego cada numero y un separador hasta el penultimo
    for(let i = 0; i < arr.length - 1; i++){
        str += arr[i];
        str += separador;
    }
    //Agrego el ultimo numero
    str += arr[arr.length - 1];
    
    return str;
}

// exportar ambas funciones
export { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString };