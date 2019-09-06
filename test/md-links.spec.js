// const { mdLinks, readDirPromise } = require('../index');
const readFile = require('../readFile');

describe('readFile', () => {

    it('should be a function', () => {
        expect(typeof readFile).toBe('function');

        //expect(readFile).rejects.toBe(error);
    });
    it('should return a string', () => {
        expect(readFile('./test/test.md')).resolves.toBe('Hola');
    })
});