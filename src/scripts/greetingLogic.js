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
const TRANSLATIONS = {
  es: { greeting: 'Hola', defaultName: 'Mundo' },
  en: { greeting: 'Hello', defaultName: 'World' },
};

function getTranslation(lang) {
  return TRANSLATIONS[lang] || TRANSLATIONS.es;
}

function isValidName(name) {
  if (!name || typeof name !== 'string') return false;
  // Permite letras latinas extendidas (tildes, ñ, ü, etc.) y espacios
  return /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(name);
}

/**
 * Genera el saludo personalizado.
 * @param {string|null} name - Nombre introducido por el usuario.
 * @param {string} [lang='es'] - Idioma del saludo.
 * @returns {string} Saludo resultante.
 */
function generateGreeting(name, lang = 'es') {
  const translation = getTranslation(lang);
  const defaultGreeting = `${translation.greeting}, ${translation.defaultName}`;

  if (!name || typeof name !== 'string') return defaultGreeting;

  const trimmed = name.trim();

  if (!trimmed) return defaultGreeting;
  if (!isValidName(trimmed)) return defaultGreeting;

  return `${translation.greeting}, ${trimmed}`;
}

// Exportación para Node.js / Jest
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateGreeting, isValidName };
}
