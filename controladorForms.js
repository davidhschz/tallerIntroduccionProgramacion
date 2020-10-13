cajaNombre = document.getElementById("nombre");
boton = document.getElementById("boton");
cajaCorreo = document.getElementById("correo");
cajaPassword = document.getElementById("password")
checkbox = document.getElementById("privacidad");
ayuda = document.getElementById("ayuda1");

boton.addEventListener("click", validarFormulario);

function validarFormulario(evento){
    evento.preventDefault();
    if (cajaNombre.value == "" && cajaCorreo.value == "" && cajaPassword.value == "") {
        cajaNombre.classList.add("is-invalid");
        cajaCorreo.classList.add("is-invalid");
        cajaPassword.classList.add("is-invalid");
    }
    else if(cajaNombre.value != "" && cajaCorreo.value == "" && cajaPassword.value == "") {
        cajaNombre.classList.remove("is-invalid");
        cajaCorreo.classList.add("is-invalid");
        cajaPassword.classList.add("is-invalid");
    }
    else if(cajaNombre.value != "" && cajaCorreo.value != "" && cajaPassword.value == "") {
        cajaNombre.classList.remove("is-invalid");
        cajaCorreo.classList.remove("is-invalid");
        cajaPassword.classList.add("is-invalid");
    }
    else if(cajaNombre.value == "" && cajaCorreo.value != "" && cajaPassword.value != "") {
        cajaNombre.classList.add("is-invalid");
        cajaCorreo.classList.remove("is-invalid");
        cajaPassword.classList.remove("is-invalid");
    }
    else if(cajaNombre.value != "" && cajaCorreo.value == "" && cajaPassword.value != "") {
        cajaNombre.classList.remove("is-invalid");
        cajaCorreo.classList.add("is-invalid");
        cajaPassword.classList.remove("is-invalid");
    }
    else if(cajaNombre.value == "" && cajaCorreo.value == "" && cajaPassword.value != "") {
        cajaNombre.classList.add("is-invalid");
        cajaCorreo.classList.add("is-invalid");
        cajaPassword.classList.remove("is-invalid");
    }
    else if(cajaNombre.value == "" && cajaCorreo.value != "" && cajaPassword.value == "") {
        cajaNombre.classList.add("is-invalid");
        cajaCorreo.classList.remove("is-invalid");
        cajaPassword.classList.add("is-invalid");
    }
    else{
        cajaNombre.classList.remove("is-invalid");
        cajaCorreo.classList.remove("is-invalid");
        cajaPassword.classList.remove("is-invalid");
        if(checkbox.checked){
            alert("Registro con éxito");
        }
        else{
            ayuda.textContent = "Debe aceptar los términos de uso para continuar."
            checkbox.classList.add("is-invalid");
        }
    }
}
