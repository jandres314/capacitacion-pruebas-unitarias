const suma = require('../suma');

describe('set-pruebas-suma', () => {

    it(`dados los numeros 2 y 3
    cuando se ejecuta una operación de suma
    entonces el resultado debe ser 5`, () => {
        const resultado = suma(2,3);
        expect(resultado).toBe(5);
    });
});
