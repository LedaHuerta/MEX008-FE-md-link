const markdownIt = require('markdown-it');
const md = markdownIt();

//recibe los parametros de readFile solo si la promesa se resuelve:
const parseFile = (data, filePath) => {
    //primero devuelve los tokens del archivo
    const parseData = md.parseInline(data, {});
    const tokens = parseData[0].children;
    //filtra y devuelve solo los tokens que son link_open
    const links = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].type === 'link_open') {
            links.push({
                href: tokens[i].attrs[0][1],
                text: tokens[i + 1].cotent,
                path: filePath
            });
        }
    }
    return links
}


module.exports = parseFile;