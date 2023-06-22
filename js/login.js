function validarFormulario() {
    // Obtener los valores ingresados en el formulario
    var nombre = document.getElementById("username").value;
    var correo = document.getElementById("password").value;
  
    // Realizar las validaciones
    if (nombre === "marcial") {
      alert("Por favor, ingresa tu nombre.");
      return false;
    }
  
    if (correo === "1234") {
      alert("Por favor, ingresa tu correo electrónico.");
      return false;
    }
  
    // Si se pasan todas las validaciones, se puede continuar con alguna acción
    alert("¡Formulario validado correctamente!");
    return true;
  }
  