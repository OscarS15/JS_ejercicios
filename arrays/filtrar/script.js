document.getElementById("ej1").addEventListener("click", () =>{
    let numeros = [1,2,3,4,5]
    numeros.forEach((numero) =>{
        console.log(numero);
    })
})

document.getElementById("ej2").addEventListener("click", () =>{
    let palabras = ["hola", "mundo"]
    let nuevo = palabras.map((palabra) => palabra.toUpperCase())
    console.log(nuevo);
    
})

document.getElementById("ej3").addEventListener("click", () =>{
    let edades = [12,13,18,25,45,10]
    let mayores = edades.filter(edad => edad >=18)
    console.log(mayores);
})

document.getElementById("ej4").addEventListener("click", function (){
    let precios = [10,20,30]
    let suma = precios.reduce((acumulador, valor) => acumulador + valor)
    console.log(suma);
})