// Obtener el formulario y agregar un evento para escuchar el envío
const form = document.querySelector('#contact-form');
form.addEventListener('submit', function(event) {
  // Prevenir el envío del formulario por defecto
  event.preventDefault();

  // Obtener los valores de los campos
  const name = document.querySelector('#name').value;
  const surname = document.querySelector('#surname').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Hacer algo con los valores obtenidos (por ejemplo, enviarlos a un servidor)
  console.log(`Nombre: ${name}`);
  console.log(`Apellido: ${surname}`);
  console.log(`Correo electrónico: ${email}`);
  console.log(`Consulta: ${message}`);
});
