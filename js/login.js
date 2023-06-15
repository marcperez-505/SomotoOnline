function validarFormulario() {
    // Obtener los valores ingresados en el formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
  
    // Realizar las validaciones
    if (nombre === "") {
      alert("Por favor, ingresa tu nombre.");
      return false;
    }
  
    if (correo === "") {
      alert("Por favor, ingresa tu correo electrónico.");
      return false;
    }
  
    // Si se pasan todas las validaciones, se puede continuar con alguna acción
    alert("¡Formulario validado correctamente!");
    return true;
  }
  