function siAdopta () {
console.log ("Adoptá y hacé la diferencia");
} 
siAdopta ();

// JSON 

let adopcionJson = `[
    {
        "nombre" : "RAKI",
        "sexo" : "macho",
        "edad" : "2 años",
        "contacto" : "Noelia"
    },
    {
        "nombre" : "CANELA",
        "sexo" : "hembra",
        "edad" : "3 años",
        "contacto" : "Agustina"
    },
    {
        "nombre" : "MORENA",
        "sexo" : "hembra",
        "edad" : "5 meses",
        "contacto" : "Pablo"
    },
    {
        "nombre" : "MIRKO",
        "sexo" : "macho",
        "edad" : "10 meses",
        "contacto" : "Martin"
    }
]`

let jsonConvertido = JSON.parse(adopcionJson);
console.log (jsonConvertido)

// function agregarAdopcion(nombre, sexo, edad, contacto){
//     let nuevaAdopcion = {
//         "nombre": "nombre", 
//         "sexo" : "sexo",
//         "edad" : "edad",
//         "contacto" : "contacto" 
//     }
//     nuevaAdopcion.push ("pichito", "masculino", 5, "jorge");   
// }
