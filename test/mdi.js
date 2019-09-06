const pathModule = require('path');

//markdown recibe el path y verifica que sea un archivo con extension .md
const markdown = (path) => {
    pathModule.extname(path) === '.md' ? true : false;
};

module.exports = markdown;