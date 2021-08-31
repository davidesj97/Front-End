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

function alturaTrianguloIsoseles(lado1, lado2, base) {
    if (lado1 == lado2) {
        base = base / 2;
        const altura = Math.sqrt((lado1 ** 2) - (base ** 2));
        return "La altura es: " + altura;
    } else {
        return "No es un triángulo isósceles"
    }
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
    document.getElementById("pantalla").value = "El perímetro del cuadrado es: " + perimetro;
}

function calcularAreaCuadrado() {
    const lado = document.getElementById("inputCuadrado").value;

    const area = areaCuadrado(lado);
    document.getElementById("pantalla").value = "El área del cuadrado es: " + area;
}

function calcularPerimetroTriangulo() {
    const lado1 = Number(document.getElementById("lado1Triangulo").value);
    const lado2 = Number(document.getElementById("lado2Triangulo").value);
    const base = Number(document.getElementById("baseTriangulo").value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    document.getElementById("pantalla").value = "El perímetro del triángulo es: " + perimetro;
}

function calcularAreaTriangulo() {
    const base = Number(document.getElementById("baseTriangulo").value);
    const altura = Number(document.getElementById("alturaTriangulo").value);

    const area = areaTriangulo(base, altura);
    document.getElementById("pantalla").value = "El área del triángulo es: " + area;
}

function calcularAlturaIsosceles() {
    const lado1 = document.getElementById("lado1Isosceles").value;
    const lado2 = document.getElementById("lado2Isosceles").value;
    const base = document.getElementById("baseIsosceles").value;

    const altura = alturaTrianguloIsoseles(lado1, lado2, base);
    document.getElementById("pantalla").value = altura;
}

function calcularCircunferenciaCirculo() {
    const radio = Number(document.getElementById("radioCirculo").value);

    const circunferencia = circunferenciaCirculo(radio);
    document.getElementById("pantalla").value = "La circunferencia del circulo es: " + circunferencia;
}

function calcularAreaCirculo() {
    const radio = Number(document.getElementById("radioCirculo").value);

    const area = areaCirculo(radio);
    document.getElementById("pantalla").value = "El área del circulo es: " + area;
}

function borrarPantalla() {
    document.getElementById("pantalla").value = "";
}

function activarCuadrado() {

    document.getElementById("cuadrado").style.display = "block";
    document.getElementById("triangulo").style.display = "none";
    document.getElementById("circulo").style.display = "none";
    document.getElementById("trianguloIsoceles").style.display = "none";
}

function activarTriangulo() {
    document.getElementById("triangulo").style.display = "block";
    document.getElementById("cuadrado").style.display = "none";
    document.getElementById("circulo").style.display = "none";
    document.getElementById("trianguloIsoceles").style.display = "none";
}

function activarCirculo() {
    document.getElementById("circulo").style.display = "block";
    document.getElementById("cuadrado").style.display = "none";
    document.getElementById("triangulo").style.display = "none";
    document.getElementById("trianguloIsoceles").style.display = "none";
}

function activarIsosceles() {
    document.getElementById("trianguloIsoceles").style.display = "block";
    document.getElementById("cuadrado").style.display = "none";
    document.getElementById("triangulo").style.display = "none";
    document.getElementById("circulo").style.display = "none";
}