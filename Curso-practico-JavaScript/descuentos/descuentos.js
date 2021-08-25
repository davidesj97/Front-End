function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function generarDescuento() {
    const precio = document.getElementById("precioProducto").value;
    const descuento = document.getElementById("descuentoProducto").value;

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

    const resultadoP = document.getElementById("resultado");
    resultadoP.innerText = "El precio con descuento son: $" + precioConDescuento;
}