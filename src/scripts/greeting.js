/**
 * greeting.js
 * Controlador de la página principal de saludo (RF-02, RF-03, RF-04, RF-05).
 *
 * Depende de greetingLogic.js (generateGreeting, isValidName).
 */

(function () {
  const display  = document.getElementById('greeting-display');
  const input    = document.getElementById('name-input');
  const greetBtn = document.getElementById('greet-btn');
  const backBtn  = document.getElementById('back-btn');
  const langSelector = document.getElementById('lang-selector');

  /* ── Helpers ── */

  /**
   * Actualiza el saludo en pantalla con una pequeña animación de fade.
   * @param {string} text
   */
  function mostrarSaludo(text) {
    display.classList.add('updating');
    setTimeout(function () {
      display.textContent = text;
      display.classList.remove('updating');
    }, 150);
  }

  /* ── Estado inicial ──
   * Si el usuario llegó desde el login con un nombre guardado,
   * lo precargamos en el campo de texto para comodidad (CA-01: el
   * saludo mostrado sigue siendo "Hola, Mundo" hasta que pulse Saludar).
   */
  var nombreGuardado = sessionStorage.getItem('userName') || '';
  if (nombreGuardado) {
    input.value = nombreGuardado;
  }

  /* ── RF-03 / CA-03: el saludo SOLO cambia al pulsar el botón ── */
  greetBtn.addEventListener('click', function () {
    var idioma = langSelector ? langSelector.value : 'es';
    var saludo = generateGreeting(input.value, idioma);
    mostrarSaludo(saludo);
  });

  /* Atajo: Enter en el campo de texto actúa como pulsar Saludar */
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') greetBtn.click();
  });

  /* Botón volver */
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      window.location.href = 'login.html';
    });
  }
})();
