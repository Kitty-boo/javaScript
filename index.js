
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


