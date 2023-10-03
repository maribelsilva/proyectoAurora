let nombre = prompt("Ingrese su nombre")

alert(`¡Bienvenido ${nombre} a Aurora!`)


localStorage.setItem("bienvenida", nombre)
let bienvenida = localStorage.getItem("bienvenida")
console.log(bienvenida)
