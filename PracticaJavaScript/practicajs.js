//---------TEMPLATE LITERALS
let nombre = "David";
let apellido = "Gilmour";
let instrumento = "Guitarra Electrica"

let formaTradicional = "Nombre: " + nombre + "\n" + "Apellido: " + apellido + "\n" + "Instrumento: "
+ instrumento;

let templateLiteral = `Nombre: ${nombre}
Apellido: ${apellido}
Instrumento: ${instrumento}`

// let templateLiteralTabs = `Nombre: ${nombre}
// Apellido: ${apellido}
// Instrumento: ${instrumento}`
// console.log(formaTradicional);
// console.log(templateLiteral);
// console.log(templateLiteralTabs);
// function suma(n1, n2){
// return n1 + n2;
// }
// let sumaDirecta = `${1 + 2}`;
// let sumaFuncion = `${suma(1,2)}`;
// console.log(sumaDirecta);
// console.log(sumaFuncion);
//------------------------------------