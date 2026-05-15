# Aplicación de Saludo

Aplicación web desarrollada con HTML, CSS y JavaScript Vanilla que permite introducir un nombre y generar un saludo personalizado.

La aplicación tiene dos páginas:

- Una página inicial de acceso.
- Una página principal donde se muestra el saludo.

El saludo puede mostrarse en español o en inglés mediante un selector de idioma.

## Qué hace la aplicación

La aplicación permite al usuario introducir un nombre y obtener un saludo personalizado.

Si el usuario no introduce un nombre válido, la aplicación muestra un saludo por defecto:

```text
Hola, Mundo
```

Si el usuario introduce un nombre válido, por ejemplo:

```text
Ana
```

La aplicación muestra:

```text
Hola, Ana
```

También permite cambiar el idioma del saludo:

```text
Hello, Ana
```

La aplicación valida que el nombre contenga únicamente letras y espacios. Si el usuario introduce números o símbolos, se muestra el saludo por defecto.

## Instalación

Para instalar las dependencias del proyecto, hay que situarse en la carpeta raíz del proyecto y ejecutar:

```bash
npm install
```

## Ejecución

La aplicación puede ejecutarse abriendo en el navegador el archivo:

```text
src/pages/login.html
```

Desde esa página se accede a la pantalla principal de saludo.

Flujo de uso:

1. Abrir `src/pages/login.html`.
2. Introducir un nombre o dejar el campo vacío.
3. Pulsar el botón `Continuar`.
4. En la página principal, seleccionar el idioma.
5. Introducir un nombre.
6. Pulsar el botón `Saludar`.

## Tests

Para lanzar los tests del proyecto, se debe ejecutar:

```bash
npm test
```

Los tests comprueban la validación de nombres, la generación del saludo, el comportamiento por defecto y el cambio de idioma.

## Estructura del proyecto

```text
NTT-DATA_Thomas_Llerandi_Practicas/
├── README.md
├── SPECS.md
├── package.json
├── package-lock.json
├── src/
│   ├── package.json
│   ├── pages/
│   │   ├── login.html
│   │   └── main.html
│   ├── scripts/
│   │   ├── greeting.js
│   │   ├── greetingLogic.js
│   │   └── login.js
│   └── styles/
│       └── main.css
└── tests/
    └── greeting.test.js
```

## Archivos principales

- `src/pages/login.html`: página inicial de acceso.
- `src/pages/main.html`: página principal de saludo.
- `src/scripts/login.js`: gestiona el acceso desde la página inicial a la página principal.
- `src/scripts/greeting.js`: conecta la interfaz de la página principal con la lógica del saludo.
- `src/scripts/greetingLogic.js`: contiene la lógica de validación y generación del saludo.
- `src/styles/main.css`: contiene los estilos de la aplicación.
- `tests/greeting.test.js`: contiene los tests automatizados.
- `SPECS.md`: contiene la especificación de requisitos del proyecto.

## Uso de IA

### Herramientas utilizadas

Se han utilizado las siguientes herramientas de inteligencia artificial:

- ChatGPT
- Gemini
- Claude

### Prompts principales empleados



### Código generado por IA

Todo el código del proyecto fue realizado con ayuda de IA.

La IA participó en la generación de:

- Las páginas HTML.
- Los estilos CSS.
- La lógica JavaScript.
- La validación de nombres.
- La generación del saludo.
- El selector de idioma español/inglés.
- La documentación del proyecto.

### Tests generados por IA

Los tests fueron generados con Gemini.

Los tests comprueban:

- Que los nombres con números no sean válidos.
- Que los nombres con símbolos no sean válidos.
- Que los nombres con letras y espacios sean válidos.
- Que el saludo por defecto sea correcto.
- Que el saludo personalizado sea correcto.
- Que los espacios al inicio y al final se eliminen.
- Que el cambio de idioma funcione correctamente.

### Errores aparecidos y corrección

Durante el desarrollo apareció un error de tipografía en `greetingLogic.js` que impedía validar correctamente una igualdad de los nombres porque faltaba el operador `!`.

El error se corrigió revisando la condición afectada y añadiendo el operador que faltaba para que la validación funcionase correctamente.

### Decisiones tomadas por el alumno

Durante el proceso se tomaron las siguientes decisiones:

- Añadir un selector de idioma para permitir el uso de la aplicación en español e inglés.
- Mantener una estructura general del proyecto separando páginas, scripts, estilos, tests y documentación.
