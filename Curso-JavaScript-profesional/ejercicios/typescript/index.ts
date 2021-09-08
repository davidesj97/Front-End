// Boolean
let muted: boolean = true;
muted = false;

// Numeros
let edad = 6;
let numerador: number = 10;
let denominador: number = edad;
let resultado = numerador / denominador;

// String
let nombre: string = "David";
let saludo = `Me llamo ${nombre}`;

// Arreglos
let personas: string[] = [];
personas = ["Juan", "Maria", "Gerardo"];
// personas.push("100");

let personasYnumeros: Array< string | number> = [];
personasYnumeros.push("David");
personasYnumeros.push(23);

// Enum
enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = {tipo: "Carta"};

// Object
let objeto: object = {cosa: "Carro"};

// funciones
function add(a: number, b: number): number{
    return a + b;
}

const suma = add(6, 10);

function creadorSumas(a: number): (number) => number{
    return function (b: number){
        return b + a;
    }
}

const numero = creadorSumas(4);
const sumar6 = numero(6);

function nombreCompleto(nombre: string, apellido?: string): string{
    return `${nombre} ${apellido}`;
}

const david = nombreCompleto("David");
console.log(david);

// Interfaces
interface Rectangulo{
    ancho: number;
    alto: number;
    color?: Color
}

let rect: Rectangulo = {
    ancho: 6,
    alto: 3,
    // color: Color.Azul
}

function area(r: Rectangulo): number{
    return r.ancho * r.alto;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function (){
    return this.color ? `Un rectángulo ${this.color}` : "Un rectángulo";
}

console.log(rect.toString());