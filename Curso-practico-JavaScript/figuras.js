//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

//Código del triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm")

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es: " + alturaTriangulo);

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