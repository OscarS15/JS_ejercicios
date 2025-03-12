document.getElementById("ej1").addEventListener("click", function () {
    let num  = parseFloat(prompt("Dame un numero"))
    let porcentaje =  parseFloat(prompt("Ahora dame el porcentaje a descontar a esta cantidad"))
    let descuento = (porcentaje/100) * num
    let aPagar = num - descuento
    alert(`Has introducido ${num}, y descontaremos el ${porcentaje}%,
            El descuento que se te hace es: ${descuento}, y te toca pagar
            ${aPagar}`)
});

document.getElementById("ej2").addEventListener("click", function () {
    function multiplo(numero){
        return numero%3 ===0 && numero%6 ===0 && numero%9 ===0 //recordemos que una funcion puede retornar una condicion
    }

    let numero = parseFloat(prompt("Dime el numero pa saber: "))
    if (multiplo(numero)) {
        alert("Es multiplo de 3, 6 y 9")
    }else{
        alert("Lo siento, no lo es")
    }
});

document.getElementById("ej3").addEventListener("click", function () {
    alert("Si hombre, voy a hacer una ecuacion de segundo grado")
})

document.getElementById("ej4").addEventListener("click", function () {
    let fechita =  prompt("Dime tu fecha de nacimiento(YYYY/MM/DD)")
    let fecha = new Date(fechita)
    let dia = fecha.getDate()
    let mes = fecha.getMonth()

});

document.getElementById("ej5").addEventListener("click", function () {

});

document.getElementById("ej6").addEventListener("click", function () {

});

document.getElementById("ej7").addEventListener("click", function () {

});

document.getElementById("ej8").addEventListener("click", function () {

});

document.getElementById("ej9").addEventListener("click", function () {

});

document.getElementById("ej10").addEventListener("click", function () {

    
});

document.getElementById("ej11").addEventListener("click", function () {

});

document.getElementById("ej12").addEventListener("click", function(){

})
