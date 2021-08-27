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
const salariosMex = mexico.map(
    function(persona) {
        return persona.salario;
    }
);

const salariosMexOrdenados = salariosMex.sort(
    function(salarioA, salarioB) {
        return salarioA - salarioB;
    }
);

const medianaGeneralMex = medianaSalarios(salariosMexOrdenados);

//Mediana del Top 10%
const comienzo = (salariosMexOrdenados.length * 90) / 100;
const contador = salariosMexOrdenados.length - comienzo;

const salariosMexTop10 = salariosMexOrdenados.splice(comienzo, contador);

const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log(salariosMex);
console.log(
    medianaGeneralMex,
    medianaTop10Mex
);