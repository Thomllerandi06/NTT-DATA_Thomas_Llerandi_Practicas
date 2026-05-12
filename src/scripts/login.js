/**
 * login.js
 * Gestiona el formulario de inicio de sesión (RF-01 / CU-01).
 */

(function () {
  const input = document.getElementById('name-input');
  const btn   = document.getElementById('continue-btn');

  function continuar() {
    // Guardamos el nombre tal cual; la página principal decidirá si es válido
    const nombre = input.value;
    sessionStorage.setItem('userName', nombre);
    window.location.href = 'main.html';
  }

  // Permitir continuar también pulsando Enter
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') continuar();
  });

  btn.addEventListener('click', continuar);
})();
