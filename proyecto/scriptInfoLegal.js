//guardarLocalStorage();

obtenerLocalStorage()

    function obtenerLocalStorage(){

    if(localStorage.getItem("persona")){

        // existe entrada persona en el localStorage 
        let nombre = localStorage.getItem("nombre");
        let persona = JSON.parse(localStorage.getItem("persona"));

        console.log(nombre);
        console.log(persona);

      }else{
        console.log("No hay entradas en el localStorage")
        //para que no me tire null
      }

    }


function guardarLocalStorage() {
    let persona = {
        nombre: "Ana",
        email: "ana@gmail.com",
        mensaje: "Quiero adoptar un perrito geronte"
    };

    let nombre = "Bruno";



localStorage.setItem("persona", JSON.stringify(persona));
}
