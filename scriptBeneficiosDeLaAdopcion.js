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
        "sexo" : "Macho",
        "edad" : "2 años",
        "contacto" : "Tránsito: Noelia"
    },
    {
        "imagen" : "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Argy.jpg",
        "nombre" : "CANELA",
        "sexo" : "Hembra",
        "edad" : "3 años",
        "contacto" : "Tránsito: Agustina"
    },
    {
        "imagen" : "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Macauliweb.jpg",
        "nombre" : "MORENA",
        "sexo" : "Hembra",
        "edad" : "5 meses",
        "contacto" : "Tránsito: Pablo"
    },
    {
        "imagen" : "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Mirkoweb.jpg",
        "nombre" : "MIRKO",
        "sexo" : "Macho",
        "edad" : "10 meses",
        "contacto" : "Tránsito: Martin"
    }
]`

let jsonConvertido = JSON.parse(adopcionJson);
console.log (jsonConvertido)

let paraAdoptarElement = document.getElementById("paraAdoptar");

for (let i = 0; i < jsonConvertido.length; i++) {
 
    let div = document.createElement("div");
    div.classList.add("cadaAdopcion");
   
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
    button.classList.add("botonAdoptar")
    

    div.appendChild(imagen);
    div.appendChild(nombre);
    div.appendChild(sexo);
    div.appendChild(edad);
    div.appendChild(contacto);
    div.appendChild(button);

    paraAdoptarElement.appendChild(div);

}
})

function mostrarFormulario(){
    var formulario = document.getElementById("formularioAdopciones");
    formulario.style.display = "block" ;

}

var button = document.getElementById("botonAdoptar");
button.addEventListener("click", mostrarFormulario);

