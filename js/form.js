document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('form');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('edad');
const redesInput = document.getElementById('redes');
const motivoInput = document.getElementById('motivo');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío por defecto

    // Validaciones básicas
    if (
    !nombreInput.value.trim() ||
    !apellidoInput.value.trim() ||
    !edadInput.value.trim() ||
    !redesInput.value.trim() ||
    !motivoInput.value.trim()
    ) {
    alert('Por favor completá todos los campos.');
    return;
    }

    // Mostrar mensaje de agradecimiento
    const nombreCompleto = `${nombreInput.value.trim()} ${apellidoInput.value.trim()}`;
    form.innerHTML = `
    <div class="text-center text-white text-xl font-semibold">
        ¡Gracias, ${nombreCompleto}, por anotarte al OLGA Day! 🥳
    </div>
    `;
});
});
