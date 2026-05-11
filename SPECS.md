# SPECS.md

## Especificación de la aplicación

### Descripción general

La aplicación será una pequeña aplicación web desarrollada con HTML, CSS y JavaScript vanilla.  
La aplicación tendrá dos páginas:

1. Una página de inicio de sesión.
2. Una página principal de saludo.

El objetivo de la aplicación es permitir que el usuario introduzca su nombre y recibir un saludo personalizado.

La aplicación deberá estar completamente en español y ejecutarse en navegador mediante un entorno Node.js con npm para la gestión de dependencias y tests.

---

# Requisitos funcionales

## RF-01: Página de inicio de sesión

La aplicación deberá incluir una página inicial de login.

### Comportamiento esperado

- La página deberá contener:
  - Un campo para introducir el nombre del usuario.
  - Un botón para continuar.
- El usuario podrá acceder a la página principal después de introducir un nombre o dejando el campo vacío.

---

## RF-02: Página principal de saludo

La aplicación deberá incluir una página principal donde se mostrará el saludo.

### Comportamiento esperado

- La página deberá mostrar el texto:
  - `Hola, Mundo` cuando no exista un nombre válido.
  - `Hola, X` cuando exista un nombre válido introducido por el usuario.

---

## RF-03: Saludo personalizado

La aplicación deberá permitir generar un saludo personalizado.

### Comportamiento esperado

- El usuario podrá escribir su nombre en un campo de texto.
- El saludo solo deberá actualizarse al pulsar el botón `Saludar`.
- Si el usuario introduce:
  - `Ana`
  
  deberá mostrarse:
  
  - `Hola, Ana`

---

## RF-04: Gestión de espacios vacíos

La aplicación deberá ignorar espacios innecesarios.

### Comportamiento esperado

- Si el usuario introduce únicamente espacios vacíos, el resultado deberá ser:
  - `Hola, Mundo`
- Si el usuario introduce espacios al inicio o al final del nombre, estos deberán ignorarse.
- Si el usuario introduce varias palabras válidas, deberán mantenerse correctamente.

### Ejemplos

| Entrada del usuario | Resultado esperado |
|---|---|
| `"   "` | `Hola, Mundo` |
| `" Ana "` | `Hola, Ana` |
| `" Juan Pérez "` | `Hola, Juan Pérez` |

---

## RF-05: Restricción de caracteres

La aplicación no deberá aceptar números ni símbolos como nombre válido.

### Comportamiento esperado

- El nombre deberá contener únicamente letras y espacios.
- Si el usuario introduce números o símbolos:
  - el saludo deberá mantenerse como `Hola, Mundo`.

### Ejemplos

| Entrada del usuario | Resultado esperado |
|---|---|
| `"Juan123"` | `Hola, Mundo` |
| `"@lex"` | `Hola, Mundo` |
| `"Pedro"` | `Hola, Pedro` |

---

# Casos de uso

## CU-01: Acceso a la aplicación

1. El usuario entra en la página de login.
2. Introduce un nombre o deja el campo vacío.
3. Pulsa el botón para continuar.
4. La aplicación redirige a la página principal.

---

## CU-02: Mostrar saludo por defecto

1. El usuario entra en la página principal.
2. No introduce un nombre válido.
3. Pulsa el botón `Saludar`.
4. La aplicación muestra:
   - `Hola, Mundo`

---

## CU-03: Mostrar saludo personalizado

1. El usuario introduce un nombre válido.
2. Pulsa el botón `Saludar`.
3. La aplicación muestra:
   - `Hola, X`

---

## CU-04: Ignorar espacios innecesarios

1. El usuario introduce espacios al inicio o final del texto.
2. Pulsa el botón `Saludar`.
3. La aplicación elimina los espacios sobrantes.
4. Se muestra el saludo correctamente.

---

## CU-05: Rechazar caracteres inválidos

1. El usuario introduce números o símbolos.
2. Pulsa el botón `Saludar`.
3. La aplicación detecta que el nombre no es válido.
4. Se muestra:
   - `Hola, Mundo`

---

# Criterios de aceptación

## CA-01

Al cargar la página principal deberá mostrarse el texto:

- `Hola, Mundo`

---

## CA-02

Si el usuario introduce un nombre válido y pulsa `Saludar`, deberá mostrarse:

- `Hola, X`

---

## CA-03

El saludo no deberá actualizarse automáticamente mientras el usuario escribe.

---

## CA-04

Si el usuario introduce únicamente espacios vacíos y pulsa `Saludar`, deberá mostrarse:

- `Hola, Mundo`

---

## CA-05

Los espacios al inicio y al final del nombre deberán eliminarse automáticamente.

---

## CA-06

Si el usuario introduce varias palabras válidas, deberán mantenerse correctamente en el saludo.

---

## CA-07

Si el usuario introduce números o símbolos, el sistema deberá mostrar:

- `Hola, Mundo`

---

## CA-08

La aplicación deberá estar completamente en español.

---

## CA-09

La aplicación deberá funcionar correctamente en navegadores modernos de escritorio.

---

## CA-10

La interfaz deberá adaptarse correctamente a dispositivos móviles y escritorio.

---

# Requisitos no funcionales

## RNF-01: Diseño responsive

La aplicación deberá visualizarse correctamente tanto en ordenador como en móvil.

---

## RNF-02: Código organizado

El proyecto deberá mantener una estructura clara y separada en carpetas y archivos.

---

## RNF-03: Compatibilidad

La aplicación deberá ejecutarse correctamente en navegadores modernos compatibles con JavaScript estándar.

---

## RNF-04: Usabilidad

La interfaz deberá ser sencilla, clara y fácil de utilizar.

---

# Tecnologías previstas

- HTML5
- CSS3
- JavaScript Vanilla
- Node.js
- npm

---

# Estructura prevista del proyecto

```plaintext
project/
│
├── src/
│   ├── pages/
│   ├── styles/
│   ├── scripts/
│
├── tests/
│
├── SPECS.md
├── README.md
├── package.json
```