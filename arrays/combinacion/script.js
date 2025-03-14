document.getElementById("ej1").addEventListener("click", () =>{
    let animales = ["perro",  "gato", "elefante"]
    animales.push("jirafa")
    animales.unshift("loro")
    let mayus = animales.map((ani) => ani.toUpperCase())
    console.log(mayus);
    
})
document.getElementById("ej2").addEventListener("click", () =>{
    let numeros = [5,10,15,20,25]
    let mayores = numeros.filter(num => num>10)
    let suma = mayores.reduce((acumulador, valor) => acumulador + valor)
    console.log(suma);
})
document.getElementById("ej3").addEventListener("click", () =>{
    let planetas =  ["Mercurio", "Venus", "Tierra", "Marte"]
    planetas.splice(1,1, "Jupiter")
    console.log(planetas);
})
document.getElementById("ej4").addEventListener("click", () =>{
    let temperaturas = [22,25,18,30]
    temperaturas.forEach((temp) =>{
        console.log(`Fahrenheit:${temp * 1.8 + 32}`);
    })

    let fah = temperaturas.map((temp) => temp*1.8 + 32)
    console.log(fah);
    
})
document.getElementById("ej5").addEventListener("click", () =>{
    let palabras = ["sol", "luna", "cielo", "nube", "lluvia"]
    let mas4 = palabras.filter(p => p.length > 4)
    let suma = mas4.reduce((a) => a+1,0) //cuantas palabras hay con mas de 4 letras, es ocomo un contador que se ira sumando por cada palabra
    console.log(mas4);
    console.log(suma);
    
})