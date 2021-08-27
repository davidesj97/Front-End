function calcularPromedio(lista) {
    //let sumaLista = 0;
    //for (let i = 0; i < lista.length; i++) {
    //    sumaLista += lista[i];
    //}

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;
    return promedio;
}

function limpiarLista(cadena) {
    let lista = cadena.split(" ");
    const listaNumeros = lista.map(function(numero) {
        return parseInt(numero);
    });
    return listaNumeros;
}

function obtenerPromedio() {
    const cadena = document.getElementById("listaPromedio").value;

    const promedio = calcularPromedio(limpiarLista(cadena));

    document.getElementById("inputPromedio").value = promedio;
}