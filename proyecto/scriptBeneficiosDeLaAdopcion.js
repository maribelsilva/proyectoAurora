function siAdopta () {
console.log ("Adoptá y hacé la diferencia");
} 
siAdopta ();

// JSON 

let adopcionJson =
`{
    "nombre" : "RAKI",
    "sexo" : "macho",
    "edad" : "2 años",
    "contacto" : "Noelia"
}`
let jsonConvertido = JSON.parse(adopcionJson);
console.log (jsonConvertido)

let adopcionJson1 =
`{
    "nombre" : "CANELA",
    "sexo" : "hembra",
    "edad" : "3 años",
    "contacto" : "Agustina"
}`
let jsonConvertido1 = JSON.parse(adopcionJson1);
console.log (jsonConvertido1)

let adopcionJson2 =
`{
    "nombre" : "MORENA",
    "sexo" : "hembra",
    "edad" : "5 meses",
    "contacto" : "Pablo"
}`
let jsonConvertido2 = JSON.parse(adopcionJson2);
console.log (jsonConvertido2)

let adopcionJson3 =
`{
    "nombre" : "MIRKO",
    "sexo" : "macho",
    "edad" : "10 meses",
    "contacto" : "Martin"
}`
let jsonConvertido3 = JSON.parse(adopcionJson3);
console.log (jsonConvertido3)

