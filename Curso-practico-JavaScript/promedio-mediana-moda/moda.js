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
    return moda;
}