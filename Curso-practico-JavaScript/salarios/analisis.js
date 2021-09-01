// Helpers
function esPar(numero) {
    return (numero % 2 === 0);
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

//Calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularPromedio([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana general
function obtenerSalarios(lista) {
    const salarios = lista.map(
        function(persona) {
            return persona.salario;
        }
    );
    return salarios;
}

function ordenarSalarios(lista) {
    const salariosOrdenados = lista.sort(
        function(salarioA, salarioB) {
            return salarioA - salarioB;
        }
    );
    return salariosOrdenados;
}

function obtenerMedianaSalarios() {
    const salarios = obtenerSalarios(mexico);
    const salariosOrdenados = ordenarSalarios(salarios)
    const medianaGeneral = medianaSalarios(salariosOrdenados);

    document.getElementById("inputMediana").value = medianaGeneral;
}

function obtenerTop10() {
    const salarios = obtenerSalarios(mexico);
    const salariosOrdenados = ordenarSalarios(salarios)
    const comienzo = Math.floor((salariosOrdenados.length * 90) / 100);
    const contador = salariosOrdenados.length - comienzo;

    const salariosTop10 = salariosOrdenados.splice(comienzo, contador);

    const medianaTop10 = medianaSalarios(salariosTop10);
    document.getElementById("inputTop10").value = medianaTop10;
}