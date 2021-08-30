function limpiarLista(cadena) {
    let lista = cadena.split(" ");
    const listaNumeros = lista.map(function(numero) {
        return parseInt(numero);
    });
    return listaNumeros;
}

function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    lista.sort((a, b) => a - b);
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    document.getElementById("listaOrdenada").value = lista;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}

function obtenerMediana() {
    const lista = document.getElementById("listaMediana").value;



    const mediana = calcularMediana(limpiarLista(lista));
    document.getElementById("inputMediana").value = mediana;
}