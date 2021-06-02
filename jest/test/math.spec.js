const math = require('../math');
//import {math} from '../math';

describe('set-pruebas-math', () => {

    it(`dados los numeros 2 y 3
    cuando se ejecuta una operación de suma
    entonces el resultado debe ser 5`, () => {
        const resultado = math.sumar(2,3);
        expect(resultado).toBe(5);
    });

    it(`dados los numeros 2 y 3
    cuando se ejecuta una operación de resta
    entonces el resultado debe ser -1`, () => {
        const resultado = math.restar(2,3);
        expect(resultado).toBe(-1);
    });

    it(`dados los numeros 2 y 3
    cuando se ejecuta una operación de multiplicacion
    entonces el resultado debe ser 6`, () => {
        const resultado = math.multiplicar(2,3);
        expect(resultado).toBe(6);
    });

    it(`dados los numeros 3 y 3
    cuando se ejecuta una operación de division
    entonces el resultado debe ser 1`, () => {
        const resultado = math.dividir(3,3);
        expect(resultado).toBe(1);
    });
});
