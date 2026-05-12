/**
 * greetingLogic.js
 * Lógica de negocio para la generación de saludos.
 * RF-02, RF-03, RF-04, RF-05
 */

/**
 * Comprueba si un nombre es válido.
 * Un nombre válido contiene únicamente letras (incluidas letras con tilde y ñ) y espacios.
 * @param {string} name
 * @returns {boolean}
 */
function isValidName(name) {
  if (!name || typeof name !== 'string') return false;
  // Permite letras latinas extendidas (tildes, ñ, ü, etc.) y espacios
  return /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(name);
}

/**
 * Genera el saludo personalizado.
 * @param {string|null} name - Nombre introducido por el usuario.
 * @returns {string} Saludo resultante.
 */
function generateGreeting(name) {
  if (!name || typeof name !== 'string') return 'Hola, Mundo';

  const trimmed = name.trim();

  if (!trimmed) return 'Hola, Mundo';
  if (!isValidName(trimmed)) return 'Hola, Mundo';

  return `Hola, ${trimmed}`;
}

// Exportación para Node.js / Jest
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateGreeting, isValidName };
}
