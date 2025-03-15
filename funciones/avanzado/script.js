document.getElementById("ej1").addEventListener("click", () =>{
    let numeros = [1,2,3,4,5,6,7,8]
    let pares = numeros.filter(n => n % 2 === 0)
    let porDos = pares.map((num) => num * 2)
    console.log(porDos);
})

document.getElementById("ej2").addEventListener("click", () =>{
    
})

document.getElementById("ej3").addEventListener("click", () =>{
    const ordenar = (arr) => arr.sort((a,b) => a.edad - b.edad)
    /*
    a y b son dos elementos de nuestro array que sort() compara en cada iteracion
    si el valor que nos devuelve es negativo, a va antes que b, si es positivo, b va antes que a, y si es igual, no cambia el orden
    conmpara 25 - 30 = -5, eso quiere decir que juan va antes que ana, luego compara ana con carlos, y ve que carlos va antes
    luego juan y carlos, y carlos es el que va primero
    SI SE QUIERE ORDENAR DE MANERA DESCENDENTE SOLO SE INVIERTE EL ORDEN b.edad - a.edad, hara lo mismo pero del reves
    */
    let personas =  [
        { nombre: "Juan", edad: 25 },
        { nombre: "Ana", edad: 30 },
        { nombre: "Carlos", edad: 20 }
    ]
    console.log(ordenar(personas));
})

document.getElementById("ej4").addEventListener("click", () =>{
    
})

document.getElementById("ej5").addEventListener("click", () =>{
    
})

document.getElementById("ej6").addEventListener("click", () =>{
    
})

document.getElementById("ej7").addEventListener("click", () =>{
    
})

document.getElementById("ej8").addEventListener("click", () =>{
    
})