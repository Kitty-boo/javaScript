
let nombre = prompt ("Bienvenido a NEFREDOS la escuela de ilustación y diseño, por favor escribe tu nombre")
    alert(`Bienvenido a NEFREDOS ${nombre}`);


let comision = parseInt(prompt(
  "elije la comisión que deseas adquirir: 1.comisión borrador lapiz - 2.comisión entintado sencillo - 3.comisión digital con color")
);

let seguirComprando = true;
let totalDeCompra = 0;
let decision;

while(seguirComprando===true){
  if(comision===1){
    totalDeCompra = totalDeCompra + 600;
  } else if(comision===2){
    totalDeCompra = totalDeCompra + 900;
  } else if(comision===3){
    totalDeCompra = totalDeCompra + 2000;
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