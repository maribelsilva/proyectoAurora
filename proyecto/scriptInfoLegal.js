//guardarLocalStorage();

// obtenerLocalStorage()

//     function obtenerLocalStorage(){

//     if(localStorage.getItem("persona")){

//         // existe entrada persona en el localStorage 
//         let nombre = localStorage.getItem("nombre");
//         let persona = JSON.parse(localStorage.getItem("persona"));

//         console.log(nombre);
//         console.log(persona);

//       }else{
//         console.log("No hay entradas en el localStorage")
//         //para que no me tire null
//       }

//     }


// function guardarLocalStorage() {
//     let persona = {
//         nombre: "Ana",
//         email: "ana@gmail.com",
//         mensaje: "Quiero adoptar un perrito geronte"
//     };

//     let nombre = "Bruno";



// localStorage.setItem("persona", JSON.stringify(persona));
// }



window.onload = () => {
    let formulario = document.querySelector("form");
    let inputNombre = document.getElementById("name");
    let inputEmail = document.getElementById("email");
    let inputPass = document.getElementById("pass");
    let inputRepeatPass = document.getElementById("repeatPass");
    let boton = document.getElementById("boton");

    //mensaje de error si el pass no cumple con ciertos requisitos
    inputPass.addEventListener("keyup", () => {

        let mensaje;
        if (inputPass.value.length < 8) {
            mensaje = "La contrasenia tiene que tener al menos 8 caracteres"
            document.getElementById("mensajePass").innerText = mensaje;

        } else {
            document.getElementById("mensajePass").innerText = " "
        }

        const decimal = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).$/";
        let mensajeDos;
        if(inputPass.value.match(decimal)) {
             
              mensajeDos = "La contraseña es segura!"
              document.getElementById("mensajePass2").innerText = mensajeDos;
    
         } else{
    
            document.getElementById("mensajePass2").innerText = "La contraseña debe contener al menos una mayúscula, una minúscula, un caracter especial y un número."
          }
    })



    //cheque que sean iguales dos campos
    inputRepeatPass.addEventListener("keyup", () => {
        let mensaje;
        if (inputRepeatPass.value != inputPass.value) {
            mensaje = "Las contrasenias deben coincidir."
            document.getElementById("mensajeRepeatPass").innerText = mensaje
        } else {
            document.getElementById("mensajeRepeatPass").innerText = " "
        }
    })

    //borde rojo al quitar el cursor de un input cuando esta vacio
    
    inputNombre.addEventListener("blur", () => {
      if (inputNombre.value == "") {
        inputNombre.style.border = "2px solid grey"
      } else {
        inputNombre.style.border = "0"
      }
  })

  inputNombre.addEventListener("keyup", () => {
    let mensaje;
    if (inputNombre.value.length < 4) {
        mensaje = "El nombre debe contener más de tres letras."
        document.getElementById("mensajeNombre").innerText = mensaje;
    } else {
        document.getElementById("mensajeNombre").innerText = " "
    }
})
  
    inputEmail.addEventListener("blur", () => {
      if (inputEmail.value == "") {
      inputEmail.style.border = "2px solid grey"
      } else {
      inputEmail.style.border = "0"
      }
  })


    inputRepeatPass.addEventListener("blur", () => {
      if (inputRepeatPass.value == "") {
      inputRepeatPass.style.border = "2px solid grey"
      } else {
      inputRepeatPass.style.border = "0"
      }
    
    })

    
    inputPass.addEventListener("blur", () => {
      if (inputPass.value == "") {
      inputPass.style.border = "2px solid grey"
      } else {
      inputPass.style.border = "0"
      }
  })
  
        
    //Boton deshabilitado si no completo el formulario
    formulario.addEventListener("change", (event) => {
        event.preventDefault()
        if (inputNombre.value.trim() != "" && inputPass.value.trim() != "" && inputRepeatPass.value.trim() != "") {
            boton.removeAttribute("disabled");
        } else {
            boton.setAttribute("disabled", "disabled");
            
        }
            
    })


}