const mexico = [];

function guardarSalario() {
    const nombre = document.getElementById("inputNombre").value;
    const salario = Number(document.getElementById("inputSalario").value);

    mexico.push({
        nombre: nombre,
        salario: salario
    });

    document.getElementById("inputNombre").value = "";
    document.getElementById("inputSalario").value = "";
    mostrarLista(mexico);
}

function mostrarLista(lista) {
    document.getElementById("areaLista").value = "";
    for (let persona of lista) {
        document.getElementById("areaLista").value += "" + persona.nombre + " | " + persona.salario + "\n";
    }
}