let cupones = [{
    name: "DESCUENTO20",
    descuento: 20
}, {
    name: "DESCUENTO30",
    descuento: 30
}, {
    name: "DESCUENTO40",
    descuento: 40
}];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function generarDescuento() {
    const precio = document.getElementById("precioProducto").value;
    const cuponIngresado = document.getElementById("descuentoProducto").value;
    const cuponValido = function(cupon) {
        return cupon.name === cuponIngresado;
    }

    const cuponUsuario = cupones.find(cuponValido);

    if (!cuponUsuario) {
        alert("El cupon " + cuponIngresado + " no es valido");
    } else {
        const descuento = cuponUsuario.descuento;
        const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
        const resultadoP = document.getElementById("resultado");
        resultadoP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}