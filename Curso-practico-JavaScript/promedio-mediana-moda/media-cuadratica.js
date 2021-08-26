const lista = [4, 2, 8, 10, 5];

function calcularMediaCuadratica(lista) {
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista += (lista[i] ** 2);
    }
    const mediaCuadratica = Math.sqrt(sumaLista / lista.length);
    return mediaCuadratica;
}