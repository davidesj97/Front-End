//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Código del circulo
console.group("Circulos");
//const radioCirculo = 5;
//console.log("El radio del circulo es: " + radioCirculo + " cm");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
console.log("PI es : " + PI);

function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();



//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const lado = document.getElementById("inputCuadrado").value;

    const perimetro = perimetroCuadrado(lado);
    alert("El perímetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado() {
    const lado = document.getElementById("inputCuadrado").value;

    const area = areaCuadrado(lado);
    alert("El área del cuadrado es: " + area);
}

function calcularPerimetroTriangulo() {
    const lado1 = Number(document.getElementById("lado1Triangulo").value);
    const lado2 = Number(document.getElementById("lado2Triangulo").value);
    const base = Number(document.getElementById("baseTriangulo").value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert("El perímetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo() {
    const base = Number(document.getElementById("baseTriangulo").value);
    const altura = Number(document.getElementById("alturaTriangulo").value);

    const area = areaTriangulo(base, altura);
    alert("El área del triángulo es: " + area);
}