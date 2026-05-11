/**
 * @jest-environment jsdom
 */


const { generateGreeting, isValidName } = require('../src/scripts/greetingLogic');

describe('Pruebas de Saludo - RF-02, RF-03, RF-04, RF-05', () => {

    describe('Validación de nombres (RF-05 / CA-07)', () => {
        test('Debe retornar falso si el nombre contiene números', () => {
            expect(isValidName("Juan123")).toBe(false);
        });

        test('Debe retornar falso si el nombre contiene símbolos', () => {
            expect(isValidName("@lex")).toBe(false);
            expect(isValidName("Ana!")).toBe(false);
        });

        test('Debe retornar verdadero para nombres con solo letras y espacios', () => {
            expect(isValidName("Pedro")).toBe(true);
            expect(isValidName("Juan Pérez")).toBe(true);
        });
    });

    describe('Generación de saludo (RF-02, RF-03, RF-04)', () => {

        test('Debe mostrar "Hola, Mundo" cuando el nombre es inválido o vacío (CA-01, CA-07)', () => {
            expect(generateGreeting("")).toBe("Hola, Mundo");
            expect(generateGreeting("12345")).toBe("Hola, Mundo");
            expect(generateGreeting(null)).toBe("Hola, Mundo");
        });

        test('Debe generar saludo personalizado para un nombre válido (RF-03 / CA-02)', () => {
            expect(generateGreeting("Ana")).toBe("Hola, Ana");
        });

        test('Debe ignorar espacios innecesarios al inicio y al final (RF-04 / CA-05)', () => {
            expect(generateGreeting("   Ana   ")).toBe("Hola, Ana");
        });

        test('Debe mostrar "Hola, Mundo" si solo se introducen espacios (RF-04 / CA-04)', () => {
            expect(generateGreeting("   ")).toBe("Hola, Mundo");
        });

        test('Debe mantener correctamente varias palabras válidas (RF-04 / CA-06)', () => {
            expect(generateGreeting(" Juan Pérez ")).toBe("Hola, Juan Pérez");
        });
    });
});

describe('Interfaz de usuario y DOM (RF-01, RF-03)', () => {
    beforeEach(() => {
        document.body.innerHTML = `
      <h1 id="greeting-display">Hola, Mundo</h1>
      <input type="text" id="name-input" />
      <button id="greet-btn">Saludar</button>
    `;
    });

    test('El saludo inicial debe ser "Hola, Mundo" (CA-01)', () => {
        const display = document.getElementById('greeting-display');
        expect(display.textContent).toBe("Hola, Mundo");
    });

    test('El saludo NO debe actualizarse automáticamente al escribir (CA-03)', () => {
        const input = document.getElementById('name-input');
        const display = document.getElementById('greeting-display');

        input.value = "Carlos";
        input.dispatchEvent(new Event('input'));

        expect(display.textContent).toBe("Hola, Mundo");
    });
});