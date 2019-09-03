// const { mdLinks, readDirPromise } = require('../index');
const readFile = require('../readFile');

describe('readFile', () => {

    it('should be a function', () => {
        expect(typeof readFile).toBe('function');
        expect(readFile).resolves.toBe(data);
        expect(readFile).rejects.toBe(error);
    });
});