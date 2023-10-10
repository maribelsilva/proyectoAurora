function siAdopta () {
console.log ("Adoptá y hacé la diferencia");
} 
siAdopta ();

// JSON 

document.addEventListener("DOMContentLoaded", function() {

let adopcionJson = `[
    {
        "imagen" : "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Clausweb.jpg",
        "nombre" : "RAKI",
        "sexo" : "macho",
        "edad" : "2 años",
        "contacto" : "Noelia"
    },
    {
        "imagen" : "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Argy.jpg",
        "nombre" : "CANELA",
        "sexo" : "hembra",
        "edad" : "3 años",
        "contacto" : "Agustina"
    },
    {
        "imagen" : "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Macauliweb.jpg",
        "nombre" : "MORENA",
        "sexo" : "hembra",
        "edad" : "5 meses",
        "contacto" : "Pablo"
    },
    {
        "imagen" : "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Mirkoweb.jpg",
        "nombre" : "MIRKO",
        "sexo" : "macho",
        "edad" : "10 meses",
        "contacto" : "Martin"
    }
]`

let jsonConvertido = JSON.parse(adopcionJson);
console.log (jsonConvertido)

let paraAdoptarElement = document.getElementById("paraAdoptar");

for (let i = 0; i < jsonConvertido.length; i++) {
 
    let div = document.createElement("div");
    div.classList.add("cadaDonacion");
   
    let imagen = document.createElement("img");
    imagen.src = jsonConvertido[i].imagen
   
    let nombre = document.createElement("h3"); 
    nombre.innerText = jsonConvertido[i].nombre

    let sexo = document.createElement("p");
    sexo.innerText = jsonConvertido[i].sexo

    let edad = document.createElement("p");
    edad.innerText = jsonConvertido[i].edad

    let contacto = document.createElement("p");
    contacto.innerText = jsonConvertido[i].contacto
   
   
    let button = document.createElement("button");
    button.innerHTML = "¡Lo quiero Adoptar!";
    

    div.appendChild(imagen);
    div.appendChild(nombre);
    div.appendChild(sexo);
    div.appendChild(edad);
    div.appendChild(contacto);
    div.appendChild(button);

    paraAdoptarElement.appendChild(div);

}
})


// function mostrarFormulario() {
//     var formulario = document.getElementByI(formularioAdopciones);
//     formularioAdopciones.style.display = "block";
// }
    