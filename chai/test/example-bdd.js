const expect = require('chai').expect;

describe('calcular la suma de dos numeros', () => {

    it('se sumaran valores de 2+3 y se espera que el resultado sea 5', function() {
        var resultado = 2 + 3;
        expect(resultado).to.be.equal(5);
    });

});
