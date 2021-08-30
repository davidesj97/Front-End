function limpiarLista(cadena) {
    let lista = cadena.split(" ");
    const listaNumeros = lista.map(function(numero) {
        return parseInt(numero);
    });
    return listaNumeros;
}

function calcularMediaCuadratica(lista) {
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista += (lista[i] ** 2);
    }
    const mediaCuadratica = Math.sqrt(sumaLista / lista.length);
    return mediaCuadratica;
}

function obtenerMediaCuadratica() {
    const cadena = document.getElementById("listaMediaCuadratica").value;

    const mediaCuadratica = calcularMediaCuadratica(limpiarLista(cadena));
    document.getElementById("inputMediaCuadratica").value = mediaCuadratica;
}