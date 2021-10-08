function limpiarLista(cadena) {
    let lista = cadena.split(" ");
    const listaNumeros = lista.map(function(numero) {
        return parseInt(numero);
    });
    return listaNumeros;
}

function calcularModa(lista) {
    const contarLista = {};
    lista.map(
        function(elemento) {
            if (contarLista[elemento]) {
                contarLista[elemento] += 1;
            } else {
                contarLista[elemento] = 1;
            }
        }
    );
    const listaOrdenada = Object.entries(contarLista).sort(
        function(a, b) {
            return a[1] - b[1];
        }
    );

    const moda = listaOrdenada[listaOrdenada.length - 1];
    return moda[0];
}

function obtenerModa() {
    const lista = document.getElementById("listaModa").value;

    const moda = calcularModa(limpiarLista(lista));
    document.getElementById("inputModa").value = moda;
}