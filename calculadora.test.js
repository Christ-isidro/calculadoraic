const { suma, resta, multiplicar, dividir, raiz } = require('./calculadora').default;
global.window = {};
require('./calculadora').default;

test('Suma 2 + 3 y devuelve 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('Suma 77 + 33  devuelve 110', () => {
    expect(suma(77, 33)).toBe(110);
});

test('Suma -25 + 50 y devuelve 25', () => {
    expect(suma(-25, 50)).toBe(25);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(resta(5, 3)).toBe(2);
});

test('Resta 9 - 18 y devuelve -9', () => {
    expect(resta(9, 18)).toBe(-9);
});

test('Multiplica 3 * 2 y devuelve 6', () => {
    expect(multiplicar(3, 2)).toBe(6);
});

test('Divide 8 / 2 y devuelve 4', () => {
    expect(dividir(8, 2,)).toBe(4);
});

test('Haz la raíz de 4 y devuelve 2', () => {
    expect(raiz(4)).toBe(2);
});