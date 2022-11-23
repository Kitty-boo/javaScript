//anexamos los elementos DOM del formulario

const formNombre = document.getElementById("nombre");
const formCorreo = document.getElementById("correo");
const formTelefono = document.getElementById("telefono");
const formMensaje = document.getElementById("mensaje");
const formBoton = document.getElementById("boton");
const divForm = document.getElementById("divForm")
const divMensaje = document.getElementById("divMensaje")

formBoton.onclick = () => {
  if (formNombre.value && formCorreo.value && formCorreo.value && formTelefono.value && formMensaje.value) {
    const usuario = {
    nombre: formNombre.value,
    correo: formCorreo.value,
    telefono: formTelefono.value,
    mensaje: formMensaje.value,
  }
  localStorage.setItem("formUsuario" , JSON.stringify(usuario))
  divForm.remove()
  const saludoGeneral = document.createElement("h3")
  saludoGeneral.innerText = `Gracias ${usuario.nombre} por tu mensaje, NEFREDOS se pondra en contacto contigo al telefono ${usuario.telefono} y al correo ${usuario.correo} para ofrecerte mas información`
  divMensaje.append(saludoGeneral)
}
}