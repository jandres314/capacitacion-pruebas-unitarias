const math = {};
math.operaciones = {

    sumar: (a, b) => {
        return a + b;
    },

    restar: (a, b) => {
        return a - b;
    },

    multiplicar: (a, b) => {
        return a * b;
    },

    dividir: (a, b) => {
        return a / b;
    }
};

module.exports = math.operaciones;