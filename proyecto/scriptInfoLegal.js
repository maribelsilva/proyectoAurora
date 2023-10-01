guardarLocalStorage();

function guardarLocalStorage() {
    let persona = {
        nombre: "Ana",
        email: "ana@gmail.com",
        mensaje: "Quiero adoptar un perrito geronte"
    };

    let nombre = "Bruno";



localStorage.setItem("persona", JSON.stringify(persona));
}
