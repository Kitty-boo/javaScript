

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


//fetch
const dibujo = document.getElementById("dibujo");
const listaComision = "json/productos.json";

fetch(listaComision)
.then(respuesta => respuesta.json())
.then(datos => {
  datos.forEach( producto => {
    listado.innerText += `
    <h2>Nombre: ${producto.nombre}</h2>
    <p>Precio: ${producto.precio}</p>
    <p>Id: ${producto.id}</p>
    ` 
  })
})
.catch(error => console.log(error))
.finally(() => console.log("proceso Finalizado"))



//agregamos una bienvenida a nuestro carrito de compra

const nombre = prompt ("Bienvenido a NEFREDOS la escuela de ilustación y diseño, por favor escribe tu nombre")
    alert(`Bienvenido a NEFREDOS ${nombre}`);


const comision = parseInt(prompt(
  "elije la comisión que deseas adquirir: 1.comisión borrador lapiz - 2.comisión entintado sencillo - 3.comisión digital con color")
);

let seguirComprando = true;
let totalDeCompra = 0;
let decision;

const totalArray = [];

function Comision (id, nombre, precio, stock) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
}

const comision1 = new Comision(1,"comisión borrador lapiz", 900)
totalArray.push("comisión borrador lapiz")
const comision2 = new Comision(2,"comisión entintado sencillo", 1500)
totalArray.push("comisión entintado sencillo")
const comision3 = new Comision(3,"comisión digital con color", 2000)
totalArray.push("comisión digital con color")


while(seguirComprando===true){
  if(comision===comision1.id){
    totalDeCompra = totalDeCompra + comision1.precio;
  } else if(comision===comision2.id){
    totalDeCompra = totalDeCompra + comision2.precio;
  } else if(comision===comision3.id){
    totalDeCompra = totalDeCompra + comision3.precio;
  }

  decision = parseInt(prompt("¿Quieres seguir comprando? 1.Si - 2.No"));
  if(decision===1){
    comision = parseInt(
      prompt(
        "elije la comisión que deseas adquirir: 1.comisión borrador lapiz, 2.comisión entintado sencillo 3.-comisión digital con color"
      )
    );
  } else{
    seguirComprando = false;
  }
}

const totalConDescuento = descuento(totalDeCompra)
alert(`El total de tu carrito es ${totalConDescuento}`);


function descuento(valor){
    let descuento = 0 
    if(valor===900){
        descuento = 10 
    }
    else if(valor>=1500 && valor<=1100){
        descuento = 18
    }
    else if(valor>=2500){
        descuento = 25
    }

    let valorDescuento = valor * (descuento/100)
    let valorFinal = valor - valorDescuento 
    return valorFinal
}


