function obtenerPresupuesto() {
    const ingreso = document.getElementById("inputIngresos").value;
    const gasto = document.getElementById("inputGastos").value;

    const presupuesto = ingreso - gasto;
    if (presupuesto > 0) {
        document.getElementById("mostrarPresupuesto").value = presupuesto;
        document.getElementById("capacidadAhorro").style.display = "block";
    } else {
        alert("Usted tiene un deficit de presupuesto. Vuelva a verificar su información");
    }
}

function calcularAhorro(porcentajeAhorro, presupuesto) {
    const ahorro = (presupuesto * porcentajeAhorro) / 100;

    return ahorro;
}

function obtenerAhorro() {
    const presupuesto = Number(document.getElementById("mostrarPresupuesto").value);
    const porcentaje = Number(document.getElementById("proncentajeAhorro").value);

    const ahorro = calcularAhorro(porcentaje, presupuesto);

    document.getElementById("inputAhorro").value = ahorro;
}