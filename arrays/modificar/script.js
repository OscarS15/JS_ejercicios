document.getElementById("ej1").addEventListener("click", function () {
    let meses = ["enero", "marzo", "abril"]
    meses.splice(1,0, "febrero") //añadiremos en la posicion 1, vamos a eliminar 0 elementos y añadiremos "febrero"
    alert(meses)
})

document.getElementById("ej2").addEventListener("click", function () {
    let dias = ["lunes", "martes", "jueves", "viernes"]
    dias.splice(2,1, "miercoles") 
    alert(dias)
})