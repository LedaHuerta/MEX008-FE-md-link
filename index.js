// const markdownIt = require('markdown-it');
const readFile = require('readFile');
const parseFile = require('parseFile');
const pathModule = require('path');



const path = () => {
    filePath = process.argv[2] || path;
    const optionA = process.argv[3];
    if (filePath === false) {
        // manejo de errores: no existe el archivo
        console.log('No se encontro archivo');
        return 'No se encontro archivo'
    }
    // si encuentra el archivo:
    //Leer el archivo:
    readFile(filePath)
        .then((data) => {
            //manejo de errores: el archivo esta vacio
            if (data === '') {
                console.log('El archivo esta vacío');
                return 'El archivo esta vacío';
            }
            //enviar parametros a parseFile
            parseFile(data, filePath);
        })
        .catch((error) => {
            console.log(error)
        })
}


// const readDir = () => {
//     return new Promise((resolve, reject) => {
//         fs.readDir('./', (err, files) => {
//             if (err) throw err;
//             else {
//                 console.log(files)
//             }
//         })
//     })
// }


// const mdLinks = () => {
//     const result = [{
//         objectUno: 'string',
//         objectDos: 'string'
//     }]
//     console.log(result);
//     return result
// };
// module.exports.mdLinks = mdLinks;



// const readDirPromise = (dirPath) => {
//     return new Promise((resolve, reject) => {
//         fs.readdir(dirPath, (error, files) => {
//             if (error) {
//                 return reject(error);
//             }
//             return resolve(files);
//         })
//     });
// }

// module.exports = mdLinks = () => {
//     const result = [{
//         object1: 'string',
//         object2: 'string'
//     }]
//     return result
// };
// module.exports = () => {
//     const mdLinks = () => {
//         const result = [{
//             objectUno: 'string',
//             objectDos: 'string'
//         }]
//         console.log(result);
//     };
// };