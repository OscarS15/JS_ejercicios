document.getElementById("ej1").addEventListener("click", ()=>{
    let frutas = ["manzana", "pera", "naranja", "uva"]
    frutas.pop()
    alert(frutas)
})

document.getElementById("ej2").addEventListener("click", ()=>{
    let frutas = ["manzana", "pera", "naranja", "uva"]
    frutas.shift()
    alert(frutas)
})

