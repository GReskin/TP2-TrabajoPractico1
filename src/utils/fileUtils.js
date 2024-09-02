import fs from 'fs';



/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    return fs.readFileSync(ruta, 'utf-8');
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    // si shouldCreateIfNotExists es true, entonces se crea el archivo si no existe
    if (shouldCreateIfNotExists) {
        fs.writeFileSync(ruta, texto);
    } 
    // si shouldCreateIfNotExists es false, entonces se lanza error si no existe
    else {  
        // si el archivo existe, se escribe el texto
        if (fs.existsSync(ruta)) {
            fs.writeFileSync(ruta, texto);
        } 
        // si el archivo no existe, se lanza error
        else {
            throw new Error('el archivo no existe');
        }
    }
}

// exportar ambas funciones
export { leerArchivoComoString, escribirTextoEnArchivo };