// Archivo JS base para futuras funcionalidades (menú, interacción, formularios, etc.)

// Ejemplo: mostrar alerta cuando se envía el formulario de Únete
document.addEventListener('DOMContentLoaded', function() {
  const joinForm = document.querySelector('form');
  if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('¡Gracias por tu interés en ACI UNI! Pronto nos pondremos en contacto contigo.');
      joinForm.reset();
    });
  }
});