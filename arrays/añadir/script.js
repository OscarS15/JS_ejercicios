document.getElementById("ej1").addEventListener("click", ()=>{
    let colores = ["rojo", "verde"]
    let color = prompt("Dame un color para añadir al final")
    colores.push(color)
    alert(colores)
})

document.getElementById("ej2").addEventListener("click", ()=>{
    let numeros = [2,3,4]
    let numero = prompt("Dame un numero para añadir al inicio")
    numeros.unshift(numero)
    alert(numeros)
})