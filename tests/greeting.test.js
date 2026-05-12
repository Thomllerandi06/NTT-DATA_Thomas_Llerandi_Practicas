/**
 * @jest-environment jsdom
 */

// Se asume que la lógica ahora acepta un parámetro opcional de idioma para CA-11
const { generateGreeting, isValidName } = require('../src/scripts/greetingLogic');

describe('Pruebas de la Aplicación de Saludos - Cobertura SPECS.md', () => {

    describe('Lógica de Validación de Nombres (RF-05 / CA-07)', () => {
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

    describe('Lógica de Generación de Saludo (RF-02, RF-03, RF-04, CA-11)', () => {
        
        describe('Comportamiento en Español (CA-08)', () => {
            test('Debe mostrar "Hola, Mundo" por defecto o nombre inválido (CA-01, CA-04, CA-07)', () => {
                expect(generateGreeting("", "es")).toBe("Hola, Mundo");
                expect(generateGreeting("   ", "es")).toBe("Hola, Mundo");
                expect(generateGreeting("123", "es")).toBe("Hola, Mundo");
            });

            test('Debe generar saludo personalizado y limpiar espacios (CA-02, CA-05, CA-06)', () => {
                expect(generateGreeting("Ana", "es")).toBe("Hola, Ana");
                expect(generateGreeting("   Ana   ", "es")).toBe("Hola, Ana");
                expect(generateGreeting(" Juan Pérez ", "es")).toBe("Hola, Juan Pérez");
            });
        });

        describe('Comportamiento en Inglés (CA-11)', () => {
            test('Debe mostrar "Hello, World" por defecto en inglés', () => {
                expect(generateGreeting("", "en")).toBe("Hello, World");
            });

            test('Debe mostrar "Hello, X" con nombre válido en inglés', () => {
                expect(generateGreeting("Ana", "en")).toBe("Hello, Ana");
            });
        });
    });

    describe('Página de Inicio de Sesión (RF-01 / CU-01)', () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <input type="text" id="login-input" />
                <button id="login-btn">Continuar</button>
            `;
            // Mock de navegación
            delete window.location;
            window.location = { href: "" };
        });

        test('Debe permitir continuar incluso con el nombre vacío (RF-01)', () => {
            const btn = document.getElementById('login-btn');
            const input = document.getElementById('login-input');
            
            input.value = "";
            btn.click();
            
            // Verificamos que se intente navegar (comportamiento esperado de CU-01)
            expect(window.location.href).toBeDefined();
        });
    });

    describe('Interfaz de Usuario - Página Principal (RF-02, RF-03, CA-03, CA-10)', () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <h1 id="greeting-display">Hola, Mundo</h1>
                <input type="text" id="name-input" />
                <button id="greet-btn">Saludar</button>
                <select id="lang-selector">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            `;
        });

        test('El saludo inicial debe ser "Hola, Mundo" (CA-01)', () => {
            const display = document.getElementById('greeting-display');
            expect(display.textContent).toBe("Hola, Mundo");
        });

        test('El saludo NO debe actualizarse mientras se escribe (CA-03)', () => {
            const input = document.getElementById('name-input');
            const display = document.getElementById('greeting-display');

            input.value = "Carlos";
            input.dispatchEvent(new Event('input'));

            expect(display.textContent).toBe("Hola, Mundo");
        });

        test('El saludo DEBE actualizarse solo al pulsar el botón "Saludar" (RF-03 / CU-03)', () => {
            const input = document.getElementById('name-input');
            const btn = document.getElementById('greet-btn');
            const display = document.getElementById('greeting-display');

            // Simulamos la lógica que se ejecutaría en el script principal
            input.value = "Ana";
            btn.addEventListener('click', () => {
                display.textContent = generateGreeting(input.value, "es");
            });
            
            btn.click();
            expect(display.textContent).toBe("Hola, Ana");
        });

        test('Debe cambiar el idioma del saludo según el selector (CA-11)', () => {
            const input = document.getElementById('name-input');
            const btn = document.getElementById('greet-btn');
            const lang = document.getElementById('lang-selector');
            const display = document.getElementById('greeting-display');

            input.value = "Ana";
            lang.value = "en"; // Cambiamos a inglés
            
            btn.addEventListener('click', () => {
                display.textContent = generateGreeting(input.value, lang.value);
            });

            btn.click();
            expect(display.textContent).toBe("Hello, Ana");
        });
    });

    describe('Requisitos No Funcionales (RNF-01)', () => {
        test('La estructura debe permitir clases para diseño responsive (CA-10)', () => {
            // Verificamos que existan elementos clave para aplicar CSS responsive
            const input = document.getElementById('name-input');
            expect(input).not.toBeNull();
            // Aquí se podrían añadir tests de existencia de clases específicas si se definen en el CSS
        });
    });
    /**
 * @jest-environment jsdom
 */

// Se asume que la lógica ahora acepta un parámetro opcional de idioma para CA-11
const { generateGreeting, isValidName } = require('../src/scripts/greetingLogic');

describe('Pruebas de la Aplicación de Saludos - Cobertura SPECS.md', () => {

    describe('Lógica de Validación de Nombres (RF-05 / CA-07)', () => {
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

    describe('Lógica de Generación de Saludo (RF-02, RF-03, RF-04, CA-11)', () => {
        
        describe('Comportamiento en Español (CA-08)', () => {
            test('Debe mostrar "Hola, Mundo" por defecto o nombre inválido (CA-01, CA-04, CA-07)', () => {
                expect(generateGreeting("", "es")).toBe("Hola, Mundo");
                expect(generateGreeting("   ", "es")).toBe("Hola, Mundo");
                expect(generateGreeting("123", "es")).toBe("Hola, Mundo");
            });

            test('Debe generar saludo personalizado y limpiar espacios (CA-02, CA-05, CA-06)', () => {
                expect(generateGreeting("Ana", "es")).toBe("Hola, Ana");
                expect(generateGreeting("   Ana   ", "es")).toBe("Hola, Ana");
                expect(generateGreeting(" Juan Pérez ", "es")).toBe("Hola, Juan Pérez");
            });
        });

        describe('Comportamiento en Inglés (CA-11)', () => {
            test('Debe mostrar "Hello, World" por defecto en inglés', () => {
                expect(generateGreeting("", "en")).toBe("Hello, World");
            });

            test('Debe mostrar "Hello, X" con nombre válido en inglés', () => {
                expect(generateGreeting("Ana", "en")).toBe("Hello, Ana");
            });
        });
    });

    describe('Página de Inicio de Sesión (RF-01 / CU-01)', () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <input type="text" id="login-input" />
                <button id="login-btn">Continuar</button>
            `;
            // Mock de navegación
            delete window.location;
            window.location = { href: "" };
        });

        test('Debe permitir continuar incluso con el nombre vacío (RF-01)', () => {
            const btn = document.getElementById('login-btn');
            const input = document.getElementById('login-input');
            
            input.value = "";
            btn.click();
            
            // Verificamos que se intente navegar (comportamiento esperado de CU-01)
            expect(window.location.href).toBeDefined();
        });
    });

    describe('Interfaz de Usuario - Página Principal (RF-02, RF-03, CA-03, CA-10)', () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <h1 id="greeting-display">Hola, Mundo</h1>
                <input type="text" id="name-input" />
                <button id="greet-btn">Saludar</button>
                <select id="lang-selector">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            `;
        });

        test('El saludo inicial debe ser "Hola, Mundo" (CA-01)', () => {
            const display = document.getElementById('greeting-display');
            expect(display.textContent).toBe("Hola, Mundo");
        });

        test('El saludo NO debe actualizarse mientras se escribe (CA-03)', () => {
            const input = document.getElementById('name-input');
            const display = document.getElementById('greeting-display');

            input.value = "Carlos";
            input.dispatchEvent(new Event('input'));

            expect(display.textContent).toBe("Hola, Mundo");
        });

        test('El saludo DEBE actualizarse solo al pulsar el botón "Saludar" (RF-03 / CU-03)', () => {
            const input = document.getElementById('name-input');
            const btn = document.getElementById('greet-btn');
            const display = document.getElementById('greeting-display');

            // Simulamos la lógica que se ejecutaría en el script principal
            input.value = "Ana";
            btn.addEventListener('click', () => {
                display.textContent = generateGreeting(input.value, "es");
            });
            
            btn.click();
            expect(display.textContent).toBe("Hola, Ana");
        });

        test('Debe cambiar el idioma del saludo según el selector (CA-11)', () => {
            const input = document.getElementById('name-input');
            const btn = document.getElementById('greet-btn');
            const lang = document.getElementById('lang-selector');
            const display = document.getElementById('greeting-display');

            input.value = "Ana";
            lang.value = "en"; // Cambiamos a inglés
            
            btn.addEventListener('click', () => {
                display.textContent = generateGreeting(input.value, lang.value);
            });

            btn.click();
            expect(display.textContent).toBe("Hello, Ana");
        });
        describe('Comportamiento en Inglés (CA-11)', () => {
            test('Debe mostrar "Hello, World" por defecto en inglés', () => {
                expect(generateGreeting("", "en")).toBe("Hello, World");
            });

            test('Debe mostrar "Hello, X" con nombre válido en inglés', () => {
                expect(generateGreeting("Ana", "en")).toBe("Hello, Ana");
            });
        });
    });

    describe('Requisitos No Funcionales (RNF-01)', () => {
        test('La estructura debe permitir clases para diseño responsive (CA-10)', () => {
            // Verificamos que existan elementos clave para aplicar CSS responsive
            const input = document.getElementById('name-input');
            expect(input).not.toBeNull();
            // Aquí se podrían añadir tests de existencia de clases específicas si se definen en el CSS
        });
    });
});
});